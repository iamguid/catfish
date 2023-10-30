import { ExtractPluginContextFlat } from "../../PluginContext";
import { Import } from "../../ProjectContext";
import { TemplatesRegistry } from "../../Templates";
import { PluginContextFlatOut } from "./context";
import { PluginOptions } from "./plugin";

export type PluginTemplatesRegistry = {
  main: { file: PluginContextFlatOut['file'], imports: Import[] },
  recursive: { messages: PluginContextFlatOut['file.message'][], enums: PluginContextFlatOut['file.enum'][] },
  modelClass: { message: PluginContextFlatOut['file.message'] },
  modelClassDecodeMap: { mapField: PluginContextFlatOut['file.message.map'] },
  modelClassEncodeMap: { mapField: PluginContextFlatOut['file.message.map'] },
  modelClassFields: { message: PluginContextFlatOut['file.message'] },
  modelClassCtor: { message: PluginContextFlatOut['file.message'] },
  modelClassEncode: { message: PluginContextFlatOut['file.message'] },
  modelClassDecode: { message: PluginContextFlatOut['file.message'] },
  modelClassToJSON: { message: PluginContextFlatOut['file.message'] },
  modelClassFromJSON: { message: PluginContextFlatOut['file.message'] },
  jsonIface: { message: PluginContextFlatOut['file.message'] },
  decodeField: { typeInfo: PluginContextFlatOut['typeinfo'], variable?: string },
  encodeField: { typeInfo: PluginContextFlatOut['typeinfo'], writer: string, variable: string },
  fromJsonValue: { typeInfo: PluginContextFlatOut['typeinfo'], variable: string },
  toJsonValue: { typeInfo: PluginContextFlatOut['typeinfo'], variable: string },
  cloneField: { typeInfo: PluginContextFlatOut['typeinfo'], variable: string },
  enum: { enm: PluginContextFlatOut['file.enum'] },
}

export const registerPluginTemplates = (t: TemplatesRegistry<PluginTemplatesRegistry, PluginOptions>) => {
  t.register('main', ({ file, imports }) => `
    ${t.renderHeader(file.desc)}

    ${t.renderImports(imports)}

    import * as pjs from "protobufjs/minimal"
    import * as runtime from "@catfish/runtime"

    ${t.render('recursive', {
      messages: file.messages,
      enums: file.enums,
    })}
  `)

  t.register('recursive', ({ messages, enums }) => {
    return messages.map((message) => {
      const oneofs = message.fields.filter(f => f.type === 'map') as PluginContextFlatOut['file.message.oneof'][]

      return `
        ${ enums.map((enm) => t.render('enum', { enm })).join('\n') }

        ${oneofs.map(oneof => `type ${oneof.typeThing.name} = ${oneof.fields.map(f => `{ ${f.fieldName}: ${f.typeInfo.tsType} }`).join(' | ')} | undefined;`)}

        ${oneofs.map(f => `type ${f.jsonTypeThing.name} = ${f.fields.map(f => `{ ${f.fieldName}: ${f.typeInfo.jsonType} }`).join(' | ')} | undefined;`)}

        ${t.render('jsonIface', { message })}

        ${t.render('modelClass', { message })}

        ${(message.messages.length > 0 || message.enums.length > 0) ? `
          export namespace ${message.classThing.name} {
            ${t.render('recursive', { messages: message.messages, enums: message.enums })}
          }
        ` : ''}
    `}).join('\n')
  })


  t.register('modelClass', ({ message }) => {
    const maps = message.fields.filter(f => f.type === 'map') as PluginContextFlatOut['file.message.map'][]

    return `
      export class ${message.classThing.name} {
        ${t.render('modelClassFields', { message })}
  
        public static fields = [${message.fields.map(f => `'${f.fieldName}'`).join(",")}]
  
        ${maps.map(mapField => t.render('modelClassEncodeMap', { mapField })).join('\n')}
  
        ${maps.map(mapField => t.render('modelClassDecodeMap', { mapField })).join('\n')}
  
        public get fields() {
          return ${message.classThing.name}.fields
        }
  
        ${t.render('modelClassCtor', { message })}
  
        ${t.render('modelClassEncode', { message })}
  
        ${t.render('modelClassDecode', { message })}
  
        ${t.render('modelClassToJSON', { message })}
  
        ${t.render('modelClassFromJSON', { message })}
  
        serialize(): Uint8Array | Buffer {
          const w = pjs.Writer.create();
          return ${message.classThing.name}.encode(this, w).finish();
        }
  
        deserialize(buffer: Uint8Array | Buffer): ${message.classThing.name} {
          const r = new pjs.Reader(buffer);
          return ${message.classThing.name}.decode(this, r, r.len);
        }
  
        toJSON(): ${message.jsonIfaceThing.name} {
          return ${message.classThing.name}.toJSON(this);
        }
  
        fromJSON(obj: ${message.jsonIfaceThing.name}): ${message.classThing.name} {
          return ${message.classThing.name}.fromJSON(this, obj);
        }
  
        clone(): ${message.classThing.name} {
          return new ${message.classThing.name}(this);
        }
      }
    `;
  })

  t.register('jsonIface', ({ message }) => `
    export interface ${message.jsonIfaceThing.name} {
      ${message.fields.map((field) => {
        if (field.type === 'map') {
          return `${field.fieldName}: Record<${field.keyTypeInfo.jsonType}, ${field.valueTypeInfo.jsonType}>;`
        }

        if (field.type === 'oneof') {
          return `${field.fieldName}?: ${field.jsonTypeThing.fullname} = undefined;`
        }
  
        if (field.type === 'field') {
          return `${field.fieldName}${field.msgFieldDesc.optional ? '?' : ''}: ${field.typeInfo.jsonType}${field.msgFieldDesc.repeated ? '[]' : ''}${field.msgFieldDesc.optional ? ' | undefined' : ''};`
        }
      }).join('\n')}
    }
  `);

  t.register('enum', ({ enm }) => `
    export enum ${enm.desc.name} {
      ${enm.fields.map((field) => `${field.enmDesc.name} = ${field.enmDesc.index},`).join('\n')}
    }
  `);

  t.register('modelClassCtor', ({ message }) => {
    return `
      constructor(obj?: ${message.classThing.name}) {
        if (!obj) return;
  
        ${message.fields.map((field) => {
          return `if (obj.${field.fieldName} !== undefined) {
            ${(() => {
              if (field.type === 'map') {
                return `
                  const entries = Array.from(obj.${field.fieldName}.entries());
                  const copy = entries.map(([key, val]) => [key, ${t.render('cloneField', { typeInfo: field.valueTypeInfo, variable: 'val' })}]);
                  this.${field.fieldName} = new Map(copy);
                `
              }
  
              if (field.type === 'oneof') {
                return `
                  switch (true) {
                    ${field.fields.map(f => {
                      return `
                        case (obj.${field.fieldName}.${f.fieldName} !== undefined):
                          this.${field.fieldName} = { ${f.fieldName}: ${t.render('cloneField', { typeInfo: f.typeInfo, variable: `obj.${field.fieldName}.${f.fieldName}` })} };
                          break;
                      `
                    }).join('\n')}
                  }
                `
              }
  
              if (field.type === 'field') {
                if (field.msgFieldDesc.repeated) {
                  return `this.${field.fieldName} =  obj.${field.fieldName}.map(val => ${t.render('cloneField', { typeInfo: field.typeInfo, variable: 'val' })});`
                }
  
                return `this.${field.fieldName} = ${t.render('cloneField', { typeInfo: field.typeInfo, variable: `obj.${field.fieldName}` })};`
              }
            })()}
          }`
        }).join('\n')}
      }
    `
  })


  t.register('modelClassFields', ({ message }) => {
    return message.fields.map((field) => {
      if (field.type === 'map') {
        return `${field.fieldName}: Map<${field.keyTypeInfo.tsType}, ${field.valueTypeInfo.tsType}> = new Map();`
      }
  
      if (field.type === 'oneof') {
        return `${field.fieldName}?: ${field.typeThing.fullname} = undefined;`
      }
  
      if (field.type === 'field') {
          if (field.msgFieldDesc.repeated) {
            return `${field.fieldName}: (${field.typeInfo.tsType})[]${field.msgFieldDesc.optional ? ' | undefined' : ''} = ${field.msgFieldDesc.optional ? 'undefined' : '[]'};`
          }
  
          return `${field.fieldName}: ${field.typeInfo.tsType}${field.msgFieldDesc.optional ? ' | undefined' : ''} = ${field.msgFieldDesc.optional ? 'undefined' : field.typeInfo.defaultValue};`
      }
    }).join('\n')
  })

  t.register('modelClassEncode', ({ message }) => {
    return `
      public static encode(m: ${message.classThing.name}, w: pjs.Writer): pjs.Writer {
        ${message.fields.map(field => {
          if (field.type === 'map') {
              return `
                // map<${field.keyTypeInfo.protoType}, ${field.valueTypeInfo.protoType}> ${field.desc.name} = ${field.desc.fieldNumber}
                ${message.classThing.name}.${field.encodeMethodName}(m.${field.fieldName}, w);
              `
          }
  
          if (field.type === 'oneof') {
            return `
              // oneof
              switch (true) {
                ${field.fields.map(f => {
                  return `
                    case (m.${field.fieldName}?.${f.fieldName} !== undefined):
                      w.uint32(${f.fieldTag});
                      ${t.render('encodeField', { typeInfo: f.typeInfo, writer: 'w', variable: `m.${field.fieldName}.${f.fieldName}` })}
                      break;
                  `
                }).join('\n')}
              }
            `
          }
  
          if (field.type === 'field') {
            if (field.msgFieldDesc.repeated) {
              switch (field.typeInfo.typeMarker) {
                case "FixedSmall":
                case "FixedBig":
                case "Enum":
                  return `
                    // repeated ${field.typeInfo.protoType} ${field.msgFieldDesc.name} = ${field.msgFieldDesc.fieldNumber}
                    if (m.${field.fieldName}.length > 0) {
                      w.uint32(${field.fieldTag});
                      w.uint32(m.${field.fieldName}.length);
                      for (let item of m.${field.fieldName}) {
                        ${t.render('encodeField', { typeInfo: field.typeInfo, writer: 'w', variable: `item` })}
                      }
                    }
                  `
                case "String":
                case "Bytes":
                case "Message":
                  return `
                    // repeated ${field.typeInfo.protoType} ${field.msgFieldDesc.name} = ${field.msgFieldDesc.fieldNumber}
                    if (m.${field.fieldName}.length > 0) {
                      for (let item of m.${field.fieldName}) {
                        w.uint32(${field.fieldTag});
                        ${t.render('encodeField', { typeInfo: field.typeInfo, writer: 'w', variable: `item` })}
                      }
                    }
                  `
              }
            }
  
            return `
              // ${field.typeInfo.protoType} ${field.msgFieldDesc.name} = ${field.msgFieldDesc.fieldNumber}
              if (m.${field.fieldName} !== undefined) {
                w.uint32(${field.fieldTag});
                ${t.render('encodeField', { typeInfo: field.typeInfo, writer: 'w', variable: `m.${field.fieldName}` })}
              }
            `
          }
        }).join('\n')}
        
        return w;
      }
    `
  })

  t.register('modelClassDecodeMap', ({ mapField }) => `
    // map<${mapField.keyTypeInfo.protoType}, ${mapField.valueTypeInfo.protoType}> ${mapField.desc.name} = ${mapField.desc.fieldNumber}
    public static ${mapField.decodeMethodName}(r: pjs.Reader, length: number): [${mapField.keyTypeInfo.tsType}, ${mapField.valueTypeInfo.tsType}] {
      const l = r.pos + length;
      let k;
      let v;
      while (r.pos < l) {
        const tag = r.uint32();
        switch (tag) {
          case ${mapField.keyTag}:
            k = ${t.render('decodeField', { typeInfo: mapField.keyTypeInfo })}
            continue;
          case ${mapField.valueTag}:
            v = ${t.render('decodeField', { typeInfo: mapField.valueTypeInfo, variable: `new ${mapField.valueTypeInfo.tsType}()` })}
            continue;
        }
      }

      return [k, v];
    }
  `)

  t.register('modelClassEncodeMap', ({ mapField }) => `
    // map<${mapField.keyTypeInfo.protoType}, ${mapField.valueTypeInfo.protoType}> ${mapField.desc.name} = ${mapField.desc.fieldNumber}
    public static ${mapField.encodeMethodName}(m: Map<${mapField.keyTypeInfo.tsType}, ${mapField.valueTypeInfo.tsType}>, w: pjs.Writer): pjs.Writer {
      for (const [key, val] of m) {
        w.uint32(${mapField.tag});
        const w2 = w.fork();
        w.uint32(${mapField.keyTag});
        ${t.render('encodeField', { typeInfo: mapField.keyTypeInfo, writer: 'w', variable: 'key' })}
        w.uint32(${mapField.valueTag});
        ${t.render('encodeField', { typeInfo: mapField.valueTypeInfo, writer: 'w2', variable: 'val' })}
        w2.ldelim();
      }
      return w;
    }
  `)

  t.register('modelClassDecode', ({ message }) => `
    public static decode(m: ${message.classThing.name}, r: pjs.Reader, length: number): ${message.classThing.name} {
      const l = r.pos + length;
      while (r.pos < l) {
        const tag = r.uint32();
        switch (tag) {
          ${message.fields.map(field => {

            if (field.type === 'map') {
              return `
                // map<${field.keyTypeInfo.protoType}, ${field.valueTypeInfo.protoType}> ${field.desc.name} = ${field.desc.fieldNumber}
                case ${field.tag}:
                  {
                    const [k, v] = ${message.classThing.name}.${field.decodeMethodName}(r, r.uint32());
                    m.${field.fieldName}.set(k, v)
                  }
                  continue;
              `
            }
    
            if (field.type === 'oneof') {
              return `
                // oneof ${field.fieldName} begin
                ${field.fields.map(f => {
                  return `
                    case ${f.fieldTag}:
                      m.${field.fieldName} = { ${f.fieldName}: ${t.render('decodeField', { typeInfo: f.typeInfo, variable: `new ${f.typeInfo.tsType}()` })} };
                      break;
                  `
                }).join('\n')}
                // oneof ${field.fieldName} end
              `
            }
    
            if (field.type === 'field') {
              if (field.msgFieldDesc.repeated) {
                switch (field.typeInfo.typeMarker) {
                  case "FixedSmall":
                  case "FixedBig":
                  case "Enum":
                    return `
                      // repeated ${field.typeInfo.protoType} ${field.msgFieldDesc.name} = ${field.msgFieldDesc.fieldNumber}
                      case ${field.fieldTag}: {
                        const l = r.uint32();
                        for (let i = 0; i < l; i++) {
                          m.${field.fieldName}.push(${t.render('decodeField', { typeInfo: field.typeInfo })})
                        }
                        continue;
                      }
                    `
                  case "String":
                  case "Bytes":
                  case "Message":
                    return `
                      // repeated ${field.typeInfo.protoType} ${field.msgFieldDesc.name} = ${field.msgFieldDesc.fieldNumber}
                      case ${field.fieldTag}:
                        m.${field.fieldName}.push(${t.render('decodeField', { typeInfo: field.typeInfo, variable: `new ${field.typeInfo.tsType}()` })})
                        continue;
                    `
                }
              }

              return `
                // ${field.typeInfo.protoType} ${field.msgFieldDesc.name} = ${field.msgFieldDesc.fieldNumber}
                case ${field.fieldTag}:
                  m.${field.fieldName} = ${t.render('decodeField', { typeInfo: field.typeInfo, variable: `new ${field.typeInfo.tsType}()` })}
                  continue;
              `
            }
          }).join('\n')}
        }

        if ((tag & 7) === 4 || tag === 0) {
          break;
        }
      }

      return m;
    }
  `)

  t.register('modelClassToJSON', ({ message }) => `
    public static toJSON(m: ${message.classThing.name}): ${message.jsonIfaceThing.name} {
      const obj = {};

      ${message.fields.map((field) => {
        if (field.type === 'map') {
          return `obj['${field.fieldName}'] = runtime.convertMapToRecord(m.${field.fieldName}, (val) => ${t.render('toJsonValue', { typeInfo: field.valueTypeInfo, variable: 'val' })});`
        }

        if (field.type === 'oneof') {
          return `
            // oneof ${field.fieldName}
            switch (true) {
              ${field.fields.map(f => {
                return `
                  case (m.${field.fieldName}?.${f.fieldName} !== undefined):
                    obj['${field.fieldName}'] = { ${f.fieldName}: ${t.render('toJsonValue', { typeInfo: f.typeInfo, variable: `m.${field.fieldName}.${f.fieldName}` })} };
                    break;
                `
              }).join('\n')}
            }
          `
        }

        if (field.type === 'field') {
          if (field.msgFieldDesc.repeated) {
            return `obj['${field.fieldName}'] = m.${field.fieldName}.map(val => ${t.render('toJsonValue', { typeInfo: field.typeInfo, variable: `val` })});`
          }

          let result = ''
          if (field.msgFieldDesc.optional) {
            result += `if (m.${field.fieldName} !== undefined) {`
          }

          result += `obj['${field.fieldName}'] = ${t.render('toJsonValue', { typeInfo: field.typeInfo, variable: `m.${field.fieldName}` })};`

          if (field.msgFieldDesc.optional) {
            result += `}`
          }

          return result
        }
      }).join('\n')}

      return obj;
    }
  `)

  t.register('modelClassFromJSON', ({ message }) => {
    return `
      public static fromJSON(m: ${message.classThing.name}, obj: ${message.jsonIfaceThing.name}): ${message.classThing.name} {
        ${message.fields.map((field) => {
          if (field.type === 'map') {
            return `m.${field.fieldName} = runtime.convertRecordToMap(obj.${field.fieldName}, (val) => ${t.render('fromJsonValue', { typeInfo: field.valueTypeInfo, variable: 'val' })});`
          }
  
          if (field.type === 'oneof') {
            return `
              // oneof ${field.fieldName}
              m.${field.fieldName} = (() => {
                switch (true) {
                  ${field.fields.map(f => {
                    return `
                      case (obj.${field.fieldName}?.${f.fieldName} !== undefined):
                        return { ${f.fieldName}: ${t.render('fromJsonValue', { typeInfo: f.typeInfo, variable: `obj.${field.fieldName}?.${f.fieldName}` })} }
                    `
                  }).join('\n')}
                }
              })();
            `
          }
  
          if (field.type === 'field') {
            if (field.msgFieldDesc.repeated) {
              return `m.${field.fieldName} = obj.${field.fieldName}.map((val) => ${t.render('fromJsonValue', { typeInfo: field.typeInfo!, variable: `val` })});`
            }
  
            let result = ''
            if (field.msgFieldDesc.optional) {
              result += `if (obj.${field.fieldName} !== undefined) {`
            }
  
            result += `m.${field.fieldName} = ${t.render('fromJsonValue', { typeInfo: field.typeInfo!, variable: `obj.${field.fieldName}` })}`
  
            if (field.msgFieldDesc.optional) {
              result += `}`
            }
  
            return result
          }
        }).join('\n')}
  
        return m;
      }
    `
  })

  t.register('cloneField', ({ typeInfo, variable }) => {
    switch (typeInfo.typeMarker) {
      case "FixedSmall":
      case "String":
      case "Enum":
        return variable
      case "FixedBig":
        return `new pjs.util.Long(${variable})`
      case "Bytes":
        return `new pjs.util.Buffer(${variable})`
      case "Message":
        return `new ${typeInfo.tsType}(${variable})`
    }
  })
  
  t.register('fromJsonValue', ({ typeInfo, variable }) => {
    switch (typeInfo.typeMarker) {
      case "FixedSmall":
      case "String":
        return variable
      case "FixedBig":
        return `pjs.util.Long.fromValue(${variable}, ${typeInfo.protoType === "uint64" || typeInfo.protoType === "fixed64" ? 'true' : 'false'})`
      case "Bytes":
        return `runtime.convertBase64ToBytes(${variable})`
      case "Enum":
        return `${typeInfo.enumType}[${variable}]`
      case "Message":
        return `new ${typeInfo.tsType}().fromJSON(${variable})`
    }
  })
  
  t.register('toJsonValue', ({ typeInfo, variable }) => {
    switch (typeInfo.typeMarker) {
      case "String":
      case "FixedSmall":
        return variable
      case "FixedBig":
        return `${variable}.toString()`
      case "Bytes":
        return `runtime.convertBytesToBase64(${variable})`
      case "Enum":
        return `${typeInfo.enumType}[${variable}]`
      case "Message":
        return `${variable}.toJSON()`
    }
  })
  
  t.register('decodeField', ({ typeInfo, variable }) => {
    switch (typeInfo.typeMarker) {
      case "FixedSmall":
      case "FixedBig":
      case "Enum":
      case "Bytes":
      case "String":
        return `r.${typeInfo.pjsFn}()`
      case "Message":
        return `${typeInfo.tsType}.decode(${variable}, r, r.uint32())`
    }
  })
  
  t.register('encodeField', ({ typeInfo, writer, variable }) => {
    switch (typeInfo.typeMarker) {
      case "FixedSmall":
      case "FixedBig":
      case "Enum":
      case "Bytes":
      case "String":
        return `${writer}.${typeInfo.pjsFn}(${variable});`
      case "Message":
        return `${typeInfo.tsType}.encode(${variable}, ${writer}.fork()).ldelim();`
    }
  })
}
