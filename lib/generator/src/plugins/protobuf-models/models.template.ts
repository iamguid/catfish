import { protoTypeToPjsFn } from ".";
import { templates } from "./templates";
import { EnumCtx, FileCtx, MessageCtx, PrimitiveFieldCtx, TypeInfoCtx } from "./reflection";
import { getFieldDefaultValue } from "./utils";

export const modelsTemplate = (ctx: FileCtx): string => `
  ${templates.render('header', {
    packageName: ctx.descriptor.package,
    fileName: ctx.context.getFilePathByDescriptor(ctx.descriptor)
  })}

  ${templates.render('imports', {
    imports: ctx.imports
  })}

  import * as pjs from "protobufjs/minimal"
  import * as runtime from "@catfish/runtime"

  ${templates.render('models.recursive', {
    messages: ctx.messges,
    enums: ctx.enums
  })}
`;

export const recursiveTemplate = (ctx: { messages: MessageCtx[], enums: EnumCtx[] }): string => `
  ${ctx.messages.map((message) => `
    ${ctx.enums.map((enm) => templates.render('models.enum', { enm })).join('\n')}

    ${templates.render('models.jsonIface', { message })}

    ${templates.render('models.modelClass', { message })}

    ${message.mesages.length > 0 || message.enums.length > 0 ? `
      export namespace ${message.modelClassName} {
        ${templates.render('models.recursive', {
          messages: message.mesages,
          enums: message.enums
        })}
      }
    ` : ''}
  `).join('\n')}
`;

export const modelClassTemplate = (ctx: { message: MessageCtx }): string => {
  return `
    export class ${ctx.message.modelClassName} {
      ${templates.render('models.modelClassFields', {
        message: ctx.message
      })}

      public static fields = [${ctx.message.fields.map(f => `'${f.name}'`).join(",")}]

      public get fields() {
        return ${ctx.message.modelClassName}.fields
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
        return ${ctx.message.modelClassName}.encode(this, w).finish();
      }

      deserialize(buffer: Uint8Array | Buffer | pjs.Reader, length?: number): ${ctx.message.modelClassName} {
        const r = (buffer instanceof pjs.Reader) ? buffer : new pjs.Reader(buffer);
        const l = length ?? r.len
        ${ctx.message.modelClassName}.decode(this, r, l);
        return this;
      }

      toJSON(): ${ctx.message.jsonIfaceName} {
        return ${ctx.message.modelClassName}.toJSON(this);
      }

      fromJSON(obj: ${ctx.message.jsonIfaceName}): ${ctx.message.modelClassName} {
        return ${ctx.message.modelClassName}.fromJSON(this, obj);
      }

      clone(): ${ctx.message.modelClassName} {
        return new ${ctx.message.modelClassName}(this);
      }
    }
  `;
}

// I'm not shure about interface
//
// export const modelIfaceTemplate = (ctx: { message: MessageCtx }) => `
//   export interface ${ctx.message.modelIfaceName} {
//     ${ctx.message.fields.map((field) => {
//       switch (true) {
//         case field.isMap:
//           return `${field.fieldName}: Map<${field.mapType?.keyTypeInfo.tsType}, ${field.mapType?.valueTypeInfo.tsType}>;`
//         case field.isOneof:
//           return `${field.fieldName}?: ${field.fieldTypeInfo?.tsType};`
//         default:
//           return `${field.fieldName}: ${field.fieldTypeInfo?.tsType}${field.isOptional ? ' | undefined' : ''};`
//       }
//     }).join('\n')}
//   }
// `;

export const jsonIfaceTemplate = (ctx: { message: MessageCtx }) => `
  export interface ${ctx.message.jsonIfaceName} {
    ${ctx.message.fields.map((field) => {
      switch (true) {
        case field.isMap:
          return `${field.name}: Record<${field.mapType?.keyTypeInfo.jsonType}, ${field.mapType?.valueTypeInfo.jsonType}>;`
        case field.isOneof:
          return `${field.name}?: ${field.typeInfo?.jsonType};`
        default:
          return `${field.name}: ${field.typeInfo?.jsonType}${field.isOptional ? ' | undefined' : ''};`
      }
    }).join('\n')}
  }
`;

export const enumTemplate = ({ enm }: { enm: EnumCtx }) => `
  export enum ${enm.name} {
    ${enm.fields.map((field) => `${field.fieldName} = ${field.fieldValue},`).join('\n')}
  }
`;

export const modelClassCtorTemplate = (ctx: { message: MessageCtx }): string => {
  return `
    constructor(obj?: ${ctx.message.modelClassName}) {
      if (!obj) return;

      ${ctx.message.fields.map((field) => {
        return `if (obj.${field.name} !== undefined) {
          ${(() => {
            if (field.isMap) {
              return `
                const entries = Array.from(obj.${field.name}.entries());
                ${(() => {
                  switch (field.mapType!.valueTypeInfo.typeMarker) {
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
            } else {
              return `this.${field.name} = obj.${field.name};`
            }
          })()}
        }`
      }).join('\n')}
    }
  `
}

export const modelClassFieldsTemplate = (ctx: { message: MessageCtx }): string => {
  return ctx.message.fields.map((field) => {
    switch (true) {
      case field.isMap:
        return `${field.name}: Map<${field.mapType?.keyTypeInfo.tsType}, ${field.mapType?.valueTypeInfo.tsType}> = ${field.isOptional ? 'undefined' : 'new Map()'};`
      case field.isOneof:
        return `${field.name}?: ${field.typeInfo?.tsType}${field.isOptional ? ' | undefined' : ''} = ${field.isOptional ? 'undefined' : getFieldDefaultValue(field)};`
      default:
        return `${field.name}: ${field.typeInfo?.tsType}${field.isOptional ? ' | undefined' : ''} = ${field.isOptional ? 'undefined' : getFieldDefaultValue(field)};`
    }
  }).join('\n')
}

export const modelClassEncodeTemplate = (ctx: { message: MessageCtx }): string => {
  return `
    public static encode(m: ${ctx.message.modelClassName}, w: pjs.Writer): pjs.Writer {
      ${ctx.message.fields.map(field => {
        switch (true) {
          case field.isMap:
            return `
              // map<${field.mapType?.keyTypeInfo.protoType}, ${field.mapType!.valueTypeInfo.protoType}> ${field.rawName} = ${field.number}
              w.uint32(${((field.number << 3) | 2) >>> 0});
              for (const [key, val] of m.${field.name}) {
                w.uint32(${field.mapType!.keyTypeInfo.tag});
                ${templates.render('models.encodeField', { typeInfo: field.mapType!.keyTypeInfo!, variable: 'key' })}
                w.uint32(${field.mapType!.valueTypeInfo.tag});
                ${templates.render('models.encodeField', { typeInfo: field.mapType!.valueTypeInfo!, variable: 'val' })}
              }
            `
          case field.isOneof:
            return `
              // oneof ${field.typeInfo?.protoType} ${field.rawName} = ${field.number}
            `
          default:
            return `
              // ${field.typeInfo?.protoType} ${field.rawName} = ${field.number}
              if (m.${field.name} !== ${getFieldDefaultValue(field)}) {
                w.uint32(${field.typeInfo!.tag});
                ${templates.render('models.encodeField', { typeInfo: field.typeInfo!, variable: `m.${field.name}` })}
              }
            `
        }
      }).join('\n')}
      
      return w;
    }
  `
}

export const modelClassDecodeTemplate = (ctx: { message: MessageCtx }): string => {
  return `
    public static decode(m: ${ctx.message.modelClassName}, r: pjs.Reader, length: number): pjs.Reader {
      const l = r.pos + length;
      while (r.pos < l) {
        const tag = r.uint32();
        switch (tag) {
          ${ctx.message.fields.map(field => {
            switch (true) {
              case field.isMap:
                return `
                  // map<${field.mapType?.keyTypeInfo.protoType}, ${field.mapType?.valueTypeInfo.protoType}> ${field.rawName} = ${field.number}
                  case ${((field.number << 3) | 2) >>> 0}:
                    {
                      // r.skipType(0); // uint32 - ???
                      // r.skipType(0); // uint32 - Key Tag
                      const length = r.uint32();
                      const keyTag = r.uint32();
                      const key = ${templates.render('models.decodeField', { typeInfo: field.mapType!.keyTypeInfo })}
                      ${(() => {
                        if (field.mapType!.valueTypeInfo.typeMarker === "Message") {
                          return `const value = ${templates.render('models.decodeField', { typeInfo: field.mapType!.valueTypeInfo })}`
                        } else {
                          return  `
                            r.skipType(0); // uint32 - Value Tag
                            const value = ${templates.render('models.decodeField', { typeInfo: field.mapType!.valueTypeInfo })}
                          `
                        }
                      })()}
  
                      ${field.isOptional ? `
                      if (m.${field.name} === undefined) {
                        m.${field.name} = new Map();
                      }` : ''}
  
                      m.${field.name}.set(key, value)
                    }
                    continue;
                `
              case field.isRepeated:
                return `
                  // repeated ${field.typeInfo?.protoType} ${field.rawName} = ${field.number}
                  case ${field.typeInfo!.tag}:
                    {
                      const value = ${templates.render('models.decodeField', { typeInfo: field.typeInfo! })}

                      ${field.isOptional ? `
                      if (m.${field.name} === undefined) {
                        m.${field.name} = [];
                      }` : ''}
  
                      m.${field.name}.push(value)
                    }
                    continue;
                `
              default:
                return `
                  // ${field.typeInfo?.protoType} ${field.rawName} = ${field.number}
                  case ${field.typeInfo!.tag}:
                    m.${field.name} = ${templates.render('models.decodeField', { typeInfo: field.typeInfo! })}
                    continue;
                `
            }
          }).join('\n')}
        }

        if ((tag & 7) === 4 || tag === 0) {
          break;
        }
      }

      return r;
    }
  `
}

export const modelClassToJSONTemplate = (ctx: { message: MessageCtx }): string => {
  return `
    public static toJSON(m: ${ctx.message.modelClassName}): ${ctx.message.jsonIfaceName} {
      return {
        ${ctx.message.fields.map((field) => {
          if (field.isMap) {
            return `${field.name}: runtime.convertMapToRecord(m.${field.name}, (val) => ${templates.render('models.toJsonValue', { typeInfo: field.mapType!.valueTypeInfo, variable: 'val' })}),`
          } else {
            return `${field.name}: ${templates.render('models.toJsonValue', { typeInfo: field.typeInfo!, variable: `m.${field.name}` })},`
          }
        }).join('\n')}
      }
    }
  `
}

export const modelClassFromJSONTemplate = (ctx: { message: MessageCtx }): string => {
  return `
    public static fromJSON(m: ${ctx.message.modelClassName}, obj: ${ctx.message.jsonIfaceName}): ${ctx.message.modelClassName} {
      ${ctx.message.fields.map((field) => {
        if (field.isMap) {
          if (field.mapType?.valueTypeInfo.typeMarker === "Bytes") {
            return `m.${field.name} = runtime.convertRecordToMap(obj.${field.name}, (val) => {
              const tmpBuffer = []
              pjs.util.base64.decode(val, tmpBuffer, 0);
              return ${templates.render('models.fromJsonValue', { typeInfo: field.mapType!.valueTypeInfo, variable: 'tmpBuffer' })};
            });`
          } else {
            return `m.${field.name} = runtime.convertRecordToMap(obj.${field.name}, (val) => ${templates.render('models.fromJsonValue', { typeInfo: field.mapType!.valueTypeInfo, variable: 'val' })});`
          }
        } else if (field.typeInfo?.typeMarker === "Bytes") {
          return `{
            const tmpBuffer = []
            pjs.util.base64.decode(obj.${field.name}, tmpBuffer, 0);
            m.${field.name} = ${templates.render('models.fromJsonValue', { typeInfo: field.typeInfo!, variable: 'tmpBuffer' })}
          }`
        } else {
            return `m.${field.name} = ${templates.render('models.fromJsonValue', { typeInfo: field.typeInfo!, variable: `obj.${field.name}` })}`
        }
      }).join('\n')}

      return m;
    }
  `
}

export const fromJsonValueTemplate = (ctx: { typeInfo: TypeInfoCtx, variable: string }): string => {
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

export const toJsonValueTemplate = (ctx: { typeInfo: TypeInfoCtx, variable: string }): string => {
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

export const decodeFieldTemplate = (ctx: { typeInfo: TypeInfoCtx }): string => {
  switch (ctx.typeInfo.typeMarker) {
    case "Enum":
      return `r.uint32()`
    case "BigInt":
    case "Primitive":
    case "Bytes":
      return `r.${protoTypeToPjsFn(ctx.typeInfo.protoType)}()`
    case "Message":
      return `new ${ctx.typeInfo.tsType!}().deserialize(r, r.uint32())`
  }
}

export const encodeFieldTemplate = (ctx: { typeInfo: TypeInfoCtx, variable: string }): string => {
  switch (ctx.typeInfo.typeMarker) {
    case "Enum":
      return `w.uint32(${ctx.variable})`
    case "Bytes":
    case "BigInt":
    case "Primitive":
      return `w.${protoTypeToPjsFn(ctx.typeInfo.protoType)}(${ctx.variable})`
    case "Message":
      return `${ctx.typeInfo.tsType!}.encode(${ctx.variable}, w)`
  }
}
