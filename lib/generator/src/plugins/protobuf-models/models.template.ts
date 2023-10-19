import { MapField } from "protobufjs";
import { CtxEnum, CtxEnumField, CtxFile, CtxMapField, CtxMessage, CtxMessageField, CtxOneof, CtxTypeInfo } from "./reflection";
import { templates } from "./templates";
import { getScalarDefaultValue, getTag } from "./utils";

export const modelsTemplate = (ctx: CtxFile): string => `
  ${templates.render('header', {
    packageName: ctx.package,
    fileName: ctx.filePath
  })}

  ${templates.render('imports', {
    imports: ctx.imports
  })}

  import * as pjs from "protobufjs/minimal"
  import * as runtime from "@catfish/runtime"

  ${templates.render('models.recursive', {
    messages: ctx.messages,
    enums: ctx.enums
  })}
`;

export const recursiveTemplate = (ctx: { messages: CtxMessage[], enums: CtxEnum[] }): string => `
  ${ctx.messages.map((message) => `
    ${ctx.enums.map((enm) => templates.render('models.enum', { enm })).join('\n')}

    ${templates.render('models.jsonIface', { message })}

    ${templates.render('models.modelClass', { message })}

    ${message.messages.length > 0 || message.enums.length > 0 ? `
      export namespace ${message.className} {
        ${templates.render('models.recursive', {
          messages: message.messages,
          enums: message.enums
        })}
      }
    ` : ''}
  `).join('\n')}
`;

export const modelClassTemplate = (ctx: { message: CtxMessage }): string => {
  return `
    export class ${ctx.message.className} {
      ${templates.render('models.modelClassFields', {
        message: ctx.message
      })}

      public static fields = [${ctx.message.fields.map(f => `'${f.name}'`).join(",")}]

      ${(ctx.message.fields.filter(f => f instanceof CtxMapField) as CtxMapField[]).map(f => {
        return templates.render('models.modelClassEncodeMap', { mapField: f })
      }).join('\n')}

      ${(ctx.message.fields.filter(f => f instanceof CtxMapField) as CtxMapField[]).map(f => {
        return templates.render('models.modelClassDecodeMap', { mapField: f })
      }).join('\n')}

      public get fields() {
        return ${ctx.message.className}.fields
      }

      ${templates.render('models.modelClassCtor', {
        message: ctx.message
      })}

      ${templates.render('models.modelClassEncode', {
        message: ctx.message
      })}

      ${templates.render('models.modelClassDecode', {
        message: ctx.message
      })}

      ${templates.render('models.modelClassToJSON', {
        message: ctx.message
      })}

      ${templates.render('models.modelClassFromJSON', {
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

export const jsonIfaceTemplate = (ctx: { message: CtxMessage }) => `
  export interface ${ctx.message.jsonIfaceName} {
    ${ctx.message.fields.map((field) => {
      if (field instanceof CtxMapField) {
        return `${field.name}: Record<${field.keyTypeInfo.jsonType}, ${field.valueTypeInfo.jsonType}>;`
      }

      if (field instanceof CtxOneof) {
        return `// NOT IMPLEMENTED`
      }

      if (field instanceof CtxMessageField) {
          return `${field.name}: ${field.typeInfo.jsonType}${field.optional ? ' | undefined' : ''};`
      }
    }).join('\n')}
  }
`;

export const enumTemplate = ({ enm }: { enm: CtxEnum }) => `
  export enum ${enm.name} {
    ${enm.fields.map((field) => `${field.name} = ${field.value},`).join('\n')}
  }
`;

export const modelClassCtorTemplate = (ctx: { message: CtxMessage }): string => {
  return `
    constructor(obj?: ${ctx.message.className}) {
      if (!obj) return;

      ${ctx.message.fields.map((field) => {
        return `if (obj.${field.name} !== undefined) {
          ${(() => {
            if (field instanceof CtxMapField) {
              return `
                const entries = Array.from(obj.${field.name}.entries());
                ${(() => {
                  switch (field.valueTypeInfo.typeMarker) {
                    case "Message":
                      return `const copy = entries.map(([key, val]) => [key, val.clone()]);`
                    case "Bytes":
                      return `const copy = entries.map(([key, val]) => [key, new pjs.util.Buffer(val)]);`
                    default:
                      return `const copy = entries.map(([key, val]) => [key, val]);`
                  }
                })()}
                this.${field.name} = new Map(copy);
              `
            }

            if (field instanceof CtxOneof) {
              return `// NOT IMPLEMENTED`
            }

            if (field instanceof CtxMessageField) {
                return `this.${field.name} = obj.${field.name};`
            }
          })()}
        }`
      }).join('\n')}
    }
  `
}

export const modelClassFieldsTemplate = (ctx: { message: CtxMessage }): string => {
  return ctx.message.fields.map((field) => {
    if (field instanceof CtxMapField) {
      return `${field.name}: Map<${field.keyTypeInfo.tsType}, ${field.valueTypeInfo.tsType}> = new Map();`
    }

    if (field instanceof CtxOneof) {
      return `// NOT IMPLEMENTED`
    }

    if (field instanceof CtxMessageField) {
        return `${field.name}: ${field.typeInfo.tsType}${field.optional ? ' | undefined' : ''} = ${field.optional ? 'undefined' : field.typeInfo.defaultValue};`
    }
  }).join('\n')
}

export const modelClassEncodeTemplate = (ctx: { message: CtxMessage }): string => {
  return `
    public static encode(m: ${ctx.message.className}, w: pjs.Writer): pjs.Writer {
      ${ctx.message.fields.map(field => {
        if (field instanceof CtxMapField) {
            return `
              // map<${field.keyTypeInfo.protoType}, ${field.valueTypeInfo.protoType}> ${field.rawName} = ${field.number}
              ${ctx.message.className}.${field.encodeMethodName}(m.${field.name}, w);
            `
        }

        if (field instanceof CtxOneof) {
          return `
              // NOT IMPLEMENTED
          `
        }

        if (field instanceof CtxMessageField) {
            return `
              // ${field.typeInfo.protoType} ${field.rawName} = ${field.number}
              if (m.${field.name} !== ${field.typeInfo.defaultValue}) {
                w.uint32(${field.tag});
                ${templates.render('models.encodeField', { typeInfo: field.typeInfo, writer: 'w', variable: `m.${field.name}` })}
              }
            `
        }
      }).join('\n')}
      
      return w;
    }
  `
}

export const modelClassDecodeMapTemplate = (ctx: { mapField: CtxMapField }): string => {
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
            k = ${templates.render('models.decodeField', { typeInfo: ctx.mapField.keyTypeInfo })}
            continue;
          case ${ctx.mapField.valueTag}:
            v = ${templates.render('models.decodeField', { typeInfo: ctx.mapField.valueTypeInfo, variable: `new ${ctx.mapField.valueTypeInfo.fullType}()` })}
            continue;
        }
      }

      return [k, v];
    }
  `
}

export const modelClassEncodeMapTemplate = (ctx: { mapField: CtxMapField }): string => {
  return `
    // map<${ctx.mapField.keyTypeInfo.protoType}, ${ctx.mapField.valueTypeInfo.protoType}> ${ctx.mapField.rawName} = ${ctx.mapField.number}
    public static ${ctx.mapField.encodeMethodName}(m: Map<${ctx.mapField.keyTypeInfo.tsType}, ${ctx.mapField.valueTypeInfo.tsType}>, w: pjs.Writer): pjs.Writer {
      for (const [key, val] of m) {
        w.uint32(${ctx.mapField.tag});
        const w2 = w.fork();
        w.uint32(${ctx.mapField.keyTag});
        ${templates.render('models.encodeField', { typeInfo: ctx.mapField.keyTypeInfo, writer: 'w', variable: 'key' })}
        w.uint32(${ctx.mapField.valueTag});
        ${templates.render('models.encodeField', { typeInfo: ctx.mapField.valueTypeInfo, writer: 'w2', variable: 'val' })}
        w2.ldelim();
      }
      return w;
    }
  `
}

export const modelClassDecodeTemplate = (ctx: { message: CtxMessage }): string => {
  return `
    public static decode(m: ${ctx.message.className}, r: pjs.Reader, length: number): ${ctx.message.className} {
      const l = r.pos + length;
      while (r.pos < l) {
        const tag = r.uint32();
        switch (tag) {
          ${ctx.message.fields.map(field => {

            if (field instanceof CtxMapField) {
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
    
            if (field instanceof CtxOneof) {
              return `
                  // NOT IMPLEMENTED
              `
            }
    
            if (field instanceof CtxMessageField) {
              return `
                // ${field.typeInfo.protoType} ${field.rawName} = ${field.number}
                case ${field.tag}:
                  m.${field.name} = ${templates.render('models.decodeField', { typeInfo: field.typeInfo })}
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

export const modelClassToJSONTemplate = (ctx: { message: CtxMessage }): string => {
  return `
    public static toJSON(m: ${ctx.message.className}): ${ctx.message.jsonIfaceName} {
      return {
        ${ctx.message.fields.map((field) => {
          if (field instanceof CtxMapField) {
            return `${field.name}: runtime.convertMapToRecord(m.${field.name}, (val) => ${templates.render('models.toJsonValue', { typeInfo: field.valueTypeInfo, variable: 'val' })}),`
          }

          if (field instanceof CtxOneof) {
            return `// NOT IMPLEMENTED`
          }

          if (field instanceof CtxMessageField) {
            return `${field.name}: ${templates.render('models.toJsonValue', { typeInfo: field.typeInfo, variable: `m.${field.name}` })},`
          }
        }).join('\n')}
      }
    }
  `
}

export const modelClassFromJSONTemplate = (ctx: { message: CtxMessage }): string => {
  return `
    public static fromJSON(m: ${ctx.message.className}, obj: ${ctx.message.jsonIfaceName}): ${ctx.message.className} {
      ${ctx.message.fields.map((field) => {
        if (field instanceof CtxMapField) {
          if (field.valueTypeInfo.typeMarker === "Bytes") {
            return `m.${field.name} = runtime.convertRecordToMap(obj.${field.name}, (val) => {
              const tmpBuffer = []
              pjs.util.base64.decode(val, tmpBuffer, 0);
              return ${templates.render('models.fromJsonValue', { typeInfo: field.valueTypeInfo, variable: 'tmpBuffer' })};
            });`
          } else {
            return `m.${field.name} = runtime.convertRecordToMap(obj.${field.name}, (val) => ${templates.render('models.fromJsonValue', { typeInfo: field.valueTypeInfo, variable: 'val' })});`
          }
        }

        if (field instanceof CtxOneof) {
          return `// NOT IMPLEMENTED`
        }

        if (field instanceof CtxMessageField) {
          if (field.typeInfo.typeMarker === "Bytes") {
            return `{
              const tmpBuffer = []
              pjs.util.base64.decode(obj.${field.name}, tmpBuffer, 0);
              m.${field.name} = ${templates.render('models.fromJsonValue', { typeInfo: field.typeInfo, variable: 'tmpBuffer' })}
            }`
          } else {
            return `m.${field.name} = ${templates.render('models.fromJsonValue', { typeInfo: field.typeInfo!, variable: `obj.${field.name}` })}`
          }
        }
      }).join('\n')}

      return m;
    }
  `
}

export const fromJsonValueTemplate = (ctx: { typeInfo: CtxTypeInfo, variable: string }): string => {
  switch (ctx.typeInfo.typeMarker) {
    case "Primitive":
      return ctx.variable
    case "BigInt":
      return `pjs.util.Long.fromValue(${ctx.variable}, ${ctx.typeInfo.protoType === "uint64" || ctx.typeInfo.protoType === "fixed64" ? 'true' : 'false'})`
    case "Bytes":
      return `new pjs.util.Buffer(${ctx.variable})`
    case "Enum":
      return `${ctx.typeInfo.fullType}[${ctx.variable}]`
    case "Message":
      return `new ${ctx.typeInfo.fullType}().fromJSON(${ctx.variable})`
  }
}

export const toJsonValueTemplate = (ctx: { typeInfo: CtxTypeInfo, variable: string }): string => {
  switch (ctx.typeInfo.typeMarker) {
    case "Primitive":
      return `${ctx.variable}`
    case "BigInt":
      return `${ctx.variable}.toString()`
    case "Bytes":
      return `pjs.util.base64.encode(${ctx.variable}, 0, ${ctx.variable}.length)`
    case "Enum":
      return `${ctx.typeInfo.fullType}[${ctx.variable}]`
    case "Message":
      return `${ctx.variable}.toJSON()`
  }
}

export const decodeFieldTemplate = (ctx: { typeInfo: CtxTypeInfo, variable?: string }): string => {
  switch (ctx.typeInfo.typeMarker) {
    case "Enum":
    case "BigInt":
    case "Primitive":
    case "Bytes":
      return `r.${ctx.typeInfo.pjsFn}()`
    case "Message":
      return `${ctx.typeInfo.tsType}.decode(${ctx.variable}, r, r.uint32())`
  }
}

export const encodeFieldTemplate = (ctx: { typeInfo: CtxTypeInfo, writer: string, variable: string }): string => {
  switch (ctx.typeInfo.typeMarker) {
    case "Enum":
    case "Bytes":
    case "BigInt":
    case "Primitive":
      return `${ctx.writer}.${ctx.typeInfo.pjsFn}(${ctx.variable});`
    case "Message":
      return `${ctx.typeInfo.tsType}.encode(${ctx.variable}, ${ctx.writer}.fork()).ldelim();`
  }
}
