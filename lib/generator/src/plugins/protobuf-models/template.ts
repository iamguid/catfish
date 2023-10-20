import { EnumContext, FileContext, MapFieldContext, MessageContext, OneofContext, TypeInfoContext, isMapField, isMessageField, isOneof } from "./context";
import { PluginOptions } from "./plugin";
import { CloneFieldTemplate, DecodeFieldTemplate, EncodeFieldTemplate, EnumTemplate, FromJsonValueTemplate, JsonIfaceTemplate, MainTemplate, ModelClassCtorTemplate, ModelClassDecodeMapTemplate, ModelClassDecodeTemplate, ModelClassEncodeMapTemplate, ModelClassEncodeTemplate, ModelClassFieldsTemplate, ModelClassFromJSONTemplate, ModelClassTemplate, ModelClassToJSONTemplate, RecursiveTemplate, ToJsonValueTemplate } from "./templates";

export const mainTemplate: MainTemplate = (render, opts, ctx) => `
  ${render('header', {
    packageName: ctx.file.package,
    fileName: ctx.file.filePath
  })}

  ${render('imports', {
    imports: ctx.file.imports
  })}

  import * as pjs from "protobufjs/minimal"
  import * as runtime from "@catfish/runtime"

  ${render('recursive', {
    messages: ctx.file.messages,
    enums: ctx.file.enums
  })}
`;

export const recursiveTemplate: RecursiveTemplate = (render, opts, ctx) => `
  ${ctx.messages.map((message) => `
    ${ctx.enums.map((enm) => render('enum', { enm })).join('\n')}

    ${(message.fields.filter(f => isOneof(f)) as OneofContext[]).map(f => {
      return `type ${f.tsTypeName} = ${f.fields.map(f => `{ ${f.name}: ${f.typeInfo.tsType} }`).join(' | ')} | undefined;`
    })}

    ${(message.fields.filter(f => isOneof(f)) as OneofContext[]).map(f => {
      return `type ${f.jsonTypeName} = ${f.fields.map(f => `{ ${f.name}: ${f.typeInfo.jsonType} }`).join(' | ')} | undefined;`
    })}

    ${render('jsonIface', { message })}

    ${render('modelClass', { message })}

    ${message.messages.length > 0 || message.enums.length > 0 ? `
      export namespace ${message.className} {
        ${render('recursive', {
          messages: message.messages,
          enums: message.enums
        })}
      }
    ` : ''}
  `).join('\n')}
`;

export const modelClassTemplate: ModelClassTemplate = (render, opts, ctx) => {
  return `
    export class ${ctx.message.className} {
      ${render('modelClassFields', {
        message: ctx.message
      })}

      public static fields = [${ctx.message.fields.map(f => `'${f.name}'`).join(",")}]

      ${(ctx.message.fields.filter(f => isMapField(f)) as MapFieldContext[]).map(f => {
        return render('modelClassEncodeMap', { mapField: f })
      }).join('\n')}

      ${(ctx.message.fields.filter(f => isMapField(f)) as MapFieldContext[]).map(f => {
        return render('modelClassDecodeMap', { mapField: f })
      }).join('\n')}

      public get fields() {
        return ${ctx.message.className}.fields
      }

      ${render('modelClassCtor', {
        message: ctx.message
      })}

      ${render('modelClassEncode', {
        message: ctx.message
      })}

      ${render('modelClassDecode', {
        message: ctx.message
      })}

      ${render('modelClassToJSON', {
        message: ctx.message
      })}

      ${render('modelClassFromJSON', {
        message: ctx.message
      })}

      serialize(): Uint8Array | Buffer {
        const w = pjs.Writer.create();
        return ${ctx.message.className}.encode(this, w).finish();
      }

      deserialize(buffer: Uint8Array | Buffer): ${ctx.message.className} {
        const r = new pjs.Reader(buffer);
        return ${ctx.message.className}.decode(this, r, r.len);
      }

      toJSON(): ${ctx.message.jsonIfaceName} {
        return ${ctx.message.className}.toJSON(this);
      }

      fromJSON(obj: ${ctx.message.jsonIfaceName}): ${ctx.message.className} {
        return ${ctx.message.className}.fromJSON(this, obj);
      }

      clone(): ${ctx.message.className} {
        return new ${ctx.message.className}(this);
      }
    }
  `;
}

export const jsonIfaceTemplate: JsonIfaceTemplate = (render, opts, ctx) => `
  export interface ${ctx.message.jsonIfaceName} {
    ${ctx.message.fields.map((field) => {
      if (isMapField(field)) {
        return `${field.name}: Record<${field.keyTypeInfo.jsonType}, ${field.valueTypeInfo.jsonType}>;`
      }

      if (isOneof(field)) {
        return `${field.name}?: ${field.jsonTypeName} = undefined;`
      }
 
      if (isMessageField(field)) {
        return `${field.name}${field.optional ? '?' : ''}: ${field.typeInfo.jsonType}${field.repeated ? '[]' : ''}${field.optional ? ' | undefined' : ''};`
      }
    }).join('\n')}
  }
`;

export const enumTemplate: EnumTemplate = (render, opts, ctx) => `
  export enum ${ctx.enm.name} {
    ${ctx.enm.fields.map((field) => `${field.name} = ${field.value},`).join('\n')}
  }
`;

export const modelClassCtorTemplate: ModelClassCtorTemplate = (render, opts, ctx) => {
  return `
    constructor(obj?: ${ctx.message.className}) {
      if (!obj) return;

      ${ctx.message.fields.map((field) => {
        return `if (obj.${field.name} !== undefined) {
          ${(() => {
            if (isMapField(field)) {
              return `
                const entries = Array.from(obj.${field.name}.entries());
                const copy = entries.map(([key, val]) => [key, ${render('cloneField', { typeInfo: field.valueTypeInfo, variable: 'val' })}]);
                this.${field.name} = new Map(copy);
              `
            }

            if (isOneof(field)) {
              return `
                switch (true) {
                  ${field.fields.map(f => {
                    return `
                      case (obj.${field.name}.${f.name} !== undefined):
                        this.${field.name} = { ${f.name}: ${render('cloneField', { typeInfo: f.typeInfo, variable: `obj.${field.name}.${f.name}` })} };
                        break;
                    `
                  }).join('\n')}
                }
              `
            }

            if (isMessageField(field)) {
              if (field.repeated) {
                return `this.${field.name} =  obj.${field.name}.map(val => ${render('cloneField', { typeInfo: field.typeInfo, variable: 'val' })});`
              }

              return `this.${field.name} = ${render('cloneField', { typeInfo: field.typeInfo, variable: `obj.${field.name}` })};`
            }
          })()}
        }`
      }).join('\n')}
    }
  `
}

export const modelClassFieldsTemplate: ModelClassFieldsTemplate = (render, opts, ctx) => {
  return ctx.message.fields.map((field) => {
    if (isMapField(field)) {
      return `${field.name}: Map<${field.keyTypeInfo.tsType}, ${field.valueTypeInfo.tsType}> = new Map();`
    }

    if (isOneof(field)) {
      return `${field.name}?: ${field.tsTypeName} = undefined;`
    }

    if (isMessageField(field)) {
        if (field.repeated) {
          return `${field.name}: (${field.typeInfo.tsType})[]${field.optional ? ' | undefined' : ''} = ${field.optional ? 'undefined' : '[]'};`
        }

        return `${field.name}: ${field.typeInfo.tsType}${field.optional ? ' | undefined' : ''} = ${field.optional ? 'undefined' : field.typeInfo.defaultValue};`
    }
  }).join('\n')
}

export const modelClassEncodeTemplate: ModelClassEncodeTemplate = (render, opts, ctx) => {
  return `
    public static encode(m: ${ctx.message.className}, w: pjs.Writer): pjs.Writer {
      ${ctx.message.fields.map(field => {
        if (isMapField(field)) {
            return `
              // map<${field.keyTypeInfo.protoType}, ${field.valueTypeInfo.protoType}> ${field.rawName} = ${field.number}
              ${ctx.message.className}.${field.encodeMethodName}(m.${field.name}, w);
            `
        }

        if (isOneof(field)) {
          return `
            // oneof
            switch (true) {
              ${field.fields.map(f => {
                return `
                  case (m.${field.name}?.${f.name} !== undefined):
                    w.uint32(${f.tag});
                    ${render('encodeField', { typeInfo: f.typeInfo, writer: 'w', variable: `m.${field.name}.${f.name}` })}
                    break;
                `
              }).join('\n')}
            }
          `
        }

        if (isMessageField(field)) {
          if (field.repeated) {
            switch (field.typeInfo.typeMarker) {
              case "FixedSmall":
              case "FixedBig":
              case "Enum":
                return `
                  // repeated ${field.typeInfo.protoType} ${field.rawName} = ${field.number}
                  if (m.${field.name}.length > 0) {
                    w.uint32(${field.tag});
                    w.uint32(m.${field.name}.length);
                    for (let item of m.${field.name}) {
                      ${render('encodeField', { typeInfo: field.typeInfo, writer: 'w', variable: `item` })}
                    }
                  }
                `
              case "String":
              case "Bytes":
              case "Message":
                return `
                  // repeated ${field.typeInfo.protoType} ${field.rawName} = ${field.number}
                  if (m.${field.name}.length > 0) {
                    for (let item of m.${field.name}) {
                      w.uint32(${field.tag});
                      ${render('encodeField', { typeInfo: field.typeInfo, writer: 'w', variable: `item` })}
                    }
                  }
                `
            }
          }

          return `
            // ${field.typeInfo.protoType} ${field.rawName} = ${field.number}
            if (m.${field.name} !== undefined) {
              w.uint32(${field.tag});
              ${render('encodeField', { typeInfo: field.typeInfo, writer: 'w', variable: `m.${field.name}` })}
            }
          `
        }
      }).join('\n')}
      
      return w;
    }
  `
}

export const modelClassDecodeMapTemplate: ModelClassDecodeMapTemplate = (render, opts, ctx) => {
  return `
    // map<${ctx.mapField.keyTypeInfo.protoType}, ${ctx.mapField.valueTypeInfo.protoType}> ${ctx.mapField.rawName} = ${ctx.mapField.number}
    public static ${ctx.mapField.decodeMethodName}(r: pjs.Reader, length: number): [${ctx.mapField.keyTypeInfo.tsType}, ${ctx.mapField.valueTypeInfo.tsType}] {
      const l = r.pos + length;
      let k;
      let v;
      while (r.pos < l) {
        const tag = r.uint32();
        switch (tag) {
          case ${ctx.mapField.keyTag}:
            k = ${render('decodeField', { typeInfo: ctx.mapField.keyTypeInfo })}
            continue;
          case ${ctx.mapField.valueTag}:
            v = ${render('decodeField', { typeInfo: ctx.mapField.valueTypeInfo, variable: `new ${ctx.mapField.valueTypeInfo.fullType}()` })}
            continue;
        }
      }

      return [k, v];
    }
  `
}

export const modelClassEncodeMapTemplate: ModelClassEncodeMapTemplate = (render, opts, ctx) => {
  return `
    // map<${ctx.mapField.keyTypeInfo.protoType}, ${ctx.mapField.valueTypeInfo.protoType}> ${ctx.mapField.rawName} = ${ctx.mapField.number}
    public static ${ctx.mapField.encodeMethodName}(m: Map<${ctx.mapField.keyTypeInfo.tsType}, ${ctx.mapField.valueTypeInfo.tsType}>, w: pjs.Writer): pjs.Writer {
      for (const [key, val] of m) {
        w.uint32(${ctx.mapField.tag});
        const w2 = w.fork();
        w.uint32(${ctx.mapField.keyTag});
        ${render('encodeField', { typeInfo: ctx.mapField.keyTypeInfo, writer: 'w', variable: 'key' })}
        w.uint32(${ctx.mapField.valueTag});
        ${render('encodeField', { typeInfo: ctx.mapField.valueTypeInfo, writer: 'w2', variable: 'val' })}
        w2.ldelim();
      }
      return w;
    }
  `
}

export const modelClassDecodeTemplate: ModelClassDecodeTemplate = (render, opts, ctx) => {
  return `
    public static decode(m: ${ctx.message.className}, r: pjs.Reader, length: number): ${ctx.message.className} {
      const l = r.pos + length;
      while (r.pos < l) {
        const tag = r.uint32();
        switch (tag) {
          ${ctx.message.fields.map(field => {

            if (isMapField(field)) {
              return `
                // map<${field.keyTypeInfo.protoType}, ${field.valueTypeInfo.protoType}> ${field.rawName} = ${field.number}
                case ${field.tag}:
                  {
                    const [k, v] = ${ctx.message.className}.${field.decodeMethodName}(r, r.uint32());
                    m.${field.name}.set(k, v)
                  }
                  continue;
              `
            }
    
            if (isOneof(field)) {
              return `
                // oneof ${field.name} begin
                ${field.fields.map(f => {
                  return `
                    case ${f.tag}:
                      m.${field.name} = { ${f.name}: ${render('decodeField', { typeInfo: f.typeInfo, variable: `new ${f.typeInfo.fullType}()` })} };
                      break;
                  `
                }).join('\n')}
                // oneof ${field.name} end
              `
            }
    
            if (isMessageField(field)) {
              if (field.repeated) {
                switch (field.typeInfo.typeMarker) {
                  case "FixedSmall":
                  case "FixedBig":
                  case "Enum":
                    return `
                      // repeated ${field.typeInfo.protoType} ${field.rawName} = ${field.number}
                      case ${field.tag}: {
                        const l = r.uint32();
                        for (let i = 0; i < l; i++) {
                          m.${field.name}.push(${render('decodeField', { typeInfo: field.typeInfo })})
                        }
                        continue;
                      }
                    `
                  case "String":
                  case "Bytes":
                  case "Message":
                    return `
                      // repeated ${field.typeInfo.protoType} ${field.rawName} = ${field.number}
                      case ${field.tag}:
                        m.${field.name}.push(${render('decodeField', { typeInfo: field.typeInfo, variable: `new ${field.typeInfo.fullType}()` })})
                        continue;
                    `
                }
              }

              return `
                // ${field.typeInfo.protoType} ${field.rawName} = ${field.number}
                case ${field.tag}:
                  m.${field.name} = ${render('decodeField', { typeInfo: field.typeInfo })}
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
  `
}

export const modelClassToJSONTemplate: ModelClassToJSONTemplate = (render, opts, ctx) => {
  return `
    public static toJSON(m: ${ctx.message.className}): ${ctx.message.jsonIfaceName} {
      const obj = {};

      ${ctx.message.fields.map((field) => {
        if (isMapField(field)) {
          return `obj['${field.name}'] = runtime.convertMapToRecord(m.${field.name}, (val) => ${render('toJsonValue', { typeInfo: field.valueTypeInfo, variable: 'val' })});`
        }

        if (isOneof(field)) {
          return `
            // oneof ${field.name}
            switch (true) {
              ${field.fields.map(f => {
                return `
                  case (m.${field.name}?.${f.name} !== undefined):
                    obj['${field.name}'] = { ${f.name}: ${render('toJsonValue', { typeInfo: f.typeInfo, variable: `m.${field.name}.${f.name}` })} };
                    break;
                `
              }).join('\n')}
            }
          `
        }

        if (isMessageField(field)) {
          if (field.repeated) {
            return `obj['${field.name}'] = m.${field.name}.map(val => ${render('toJsonValue', { typeInfo: field.typeInfo, variable: `val` })});`
          }

          let result = ''
          if (field.optional) {
            result += `if (m.${field.name} !== undefined) {`
          }

          result += `obj['${field.name}'] = ${render('toJsonValue', { typeInfo: field.typeInfo, variable: `m.${field.name}` })};`

          if (field.optional) {
            result += `}`
          }

          return result
        }
      }).join('\n')}

      return obj;
    }
  `
}

export const modelClassFromJSONTemplate: ModelClassFromJSONTemplate = (render, opts, ctx) => {
  return `
    public static fromJSON(m: ${ctx.message.className}, obj: ${ctx.message.jsonIfaceName}): ${ctx.message.className} {
      ${ctx.message.fields.map((field) => {
        if (isMapField(field)) {
          return `m.${field.name} = runtime.convertRecordToMap(obj.${field.name}, (val) => ${render('fromJsonValue', { typeInfo: field.valueTypeInfo, variable: 'val' })});`
        }

        if (isOneof(field)) {
          return `
            // oneof ${field.name}
            m.${field.name} = (() => {
              switch (true) {
                ${field.fields.map(f => {
                  return `
                    case (obj.${field.name}?.${f.name} !== undefined):
                      return { ${f.name}: ${render('fromJsonValue', { typeInfo: f.typeInfo, variable: `obj.${field.name}?.${f.name}` })} }
                  `
                }).join('\n')}
              }
            })();
          `
        }

        if (isMessageField(field)) {
          if (field.repeated) {
            return `m.${field.name} = obj.${field.name}.map((val) => ${render('fromJsonValue', { typeInfo: field.typeInfo!, variable: `val` })});`
          }

          let result = ''
          if (field.optional) {
            result += `if (obj.${field.name} !== undefined) {`
          }

          result += `m.${field.name} = ${render('fromJsonValue', { typeInfo: field.typeInfo!, variable: `obj.${field.name}` })}`

          if (field.optional) {
            result += `}`
          }

          return result
        }
      }).join('\n')}

      return m;
    }
  `
}

export const cloneFieldTemplate: CloneFieldTemplate = (render, opts, ctx) => {
  switch (ctx.typeInfo.typeMarker) {
    case "FixedSmall":
    case "String":
    case "Enum":
      return ctx.variable
    case "FixedBig":
      return `new pjs.util.Long(${ctx.variable})`
    case "Bytes":
      return `new pjs.util.Buffer(${ctx.variable})`
    case "Message":
      return `new ${ctx.typeInfo.fullType}(${ctx.variable})`
  }
}

export const fromJsonValueTemplate: FromJsonValueTemplate = (render, opts, ctx) => {
  switch (ctx.typeInfo.typeMarker) {
    case "FixedSmall":
    case "String":
      return ctx.variable
    case "FixedBig":
      return `pjs.util.Long.fromValue(${ctx.variable}, ${ctx.typeInfo.protoType === "uint64" || ctx.typeInfo.protoType === "fixed64" ? 'true' : 'false'})`
    case "Bytes":
      return `runtime.convertBase64ToBytes(${ctx.variable})`
    case "Enum":
      return `${ctx.typeInfo.fullType}[${ctx.variable}]`
    case "Message":
      return `new ${ctx.typeInfo.fullType}().fromJSON(${ctx.variable})`
  }
}

export const toJsonValueTemplate: ToJsonValueTemplate = (render, opts, ctx) => {
  switch (ctx.typeInfo.typeMarker) {
    case "String":
    case "FixedSmall":
      return ctx.variable
    case "FixedBig":
      return `${ctx.variable}.toString()`
    case "Bytes":
      return `runtime.convertBytesToBase64(${ctx.variable})`
    case "Enum":
      return `${ctx.typeInfo.fullType}[${ctx.variable}]`
    case "Message":
      return `${ctx.variable}.toJSON()`
  }
}

export const decodeFieldTemplate: DecodeFieldTemplate = (render, opts, ctx) => {
  switch (ctx.typeInfo.typeMarker) {
    case "FixedSmall":
    case "FixedBig":
    case "Enum":
    case "Bytes":
    case "String":
      return `r.${ctx.typeInfo.pjsFn}()`
    case "Message":
      return `${ctx.typeInfo.tsType}.decode(${ctx.variable}, r, r.uint32())`
  }
}

export const encodeFieldTemplate: EncodeFieldTemplate = (render, opts, ctx) => {
  switch (ctx.typeInfo.typeMarker) {
    case "FixedSmall":
    case "FixedBig":
    case "Enum":
    case "Bytes":
    case "String":
      return `${ctx.writer}.${ctx.typeInfo.pjsFn}(${ctx.variable});`
    case "Message":
      return `${ctx.typeInfo.tsType}.encode(${ctx.variable}, ${ctx.writer}.fork()).ldelim();`
  }
}
