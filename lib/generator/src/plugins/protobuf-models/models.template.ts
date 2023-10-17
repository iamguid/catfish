import { protoTypeToPjsFn } from ".";
import { templates } from "./templates";
import { EnumCtx, FileCtx, MessageCtx, MessageFieldCtx, TypeInfoCtx } from "./types";
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

      public static fields = [${ctx.message.fields.map(f => `'${f.fieldName}'`).join(",")}]

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

      deserialize(b: Uint8Array | Buffer): ${ctx.message.modelClassName} {
        const r = new pjs.Reader(b);
        ${ctx.message.modelClassName}.decode(this, r, r.len);
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
          return `${field.fieldName}: Record<${field.mapType?.keyTypeInfo.jsonType}, ${field.mapType?.valueTypeInfo.jsonType}>;`
        case field.isOneof:
          return `${field.fieldName}?: ${field.fieldTypeInfo?.jsonType};`
        default:
          return `${field.fieldName}: ${field.fieldTypeInfo?.jsonType}${field.isOptional ? ' | undefined' : ''};`
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
        return `if (obj.${field.fieldName} !== undefined) {
          ${(() => {
            if (field.isMap) {
              return `
                const entries = Array.from(obj.${field.fieldName}.entries());
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
                this.${field.fieldName} = new Map(copy);
              `
            } else {
              return `this.${field.fieldName} = obj.${field.fieldName};`
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
        return `${field.fieldName}: Map<${field.mapType?.keyTypeInfo.tsType}, ${field.mapType?.valueTypeInfo.tsType}> = ${field.isOptional ? 'undefined' : 'new Map()'};`
      case field.isOneof:
        return `${field.fieldName}?: ${field.fieldTypeInfo?.tsType}${field.isOptional ? ' | undefined' : ''} = ${field.isOptional ? 'undefined' : getFieldDefaultValue(field)};`
      default:
        return `${field.fieldName}: ${field.fieldTypeInfo?.tsType}${field.isOptional ? ' | undefined' : ''} = ${field.isOptional ? 'undefined' : getFieldDefaultValue(field)};`
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
              // map<${field.mapType?.keyTypeInfo.protoType}, ${field.mapType!.valueTypeInfo.protoType}> ${field.rawName} = ${field.fieldNumber}
              for (const [key, val] of m.${field.fieldName}) {
                ${templates.render('models.encodeField', { typeInfo: field.mapType!.keyTypeInfo!, variable: 'key' })}
                ${templates.render('models.encodeField', { typeInfo: field.mapType!.valueTypeInfo!, variable: 'val' })}
              }
            `
          case field.isOneof:
            return `
              // oneof ${field.fieldTypeInfo?.protoType} ${field.rawName} = ${field.fieldNumber}
            `
          default:
            return `
              // ${field.fieldTypeInfo?.protoType} ${field.rawName} = ${field.fieldNumber}
              if (m.${field.fieldName} !== ${getFieldDefaultValue(field)}) {
                w.uint32(${field.fieldTag});
                ${templates.render('models.encodeField', { typeInfo: field.fieldTypeInfo!, variable: `m.${field.fieldName}` })}
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
    public static decode(m: ${ctx.message.modelClassName}, r: pjs.Reader, l: number): pjs.Reader {
      while (r.pos < l) {
        const tag = r.uint32();
        switch (tag) {
          ${ctx.message.fields.map(field => {
            switch (true) {
              case field.isMap:
                return `
                  // map<${field.mapType?.keyTypeInfo.protoType}, ${field.mapType?.valueTypeInfo.protoType}> ${field.rawName} = ${field.fieldNumber}
                  case ${field.fieldTag}:
                    {
                      const len = r.uint32();
                      const keyTag = r.uint32();
                      const key = ${templates.render('models.decodeField', { typeInfo: field.mapType!.keyTypeInfo })}
                      const valueTag = r.uint32();
                      const value = ${templates.render('models.decodeField', { typeInfo: field.mapType!.valueTypeInfo })}
  
                      ${field.isOptional ? `
                      if (m.${field.fieldName} === undefined) {
                        m.${field.fieldName} = new Map();
                      }` : ''}
  
                      m.${field.fieldName}.set(key, value)
                    }
                    continue;
                `
              case field.isRepeated:
                return `
                  // repeated ${field.fieldTypeInfo?.protoType} ${field.rawName} = ${field.fieldNumber}
                  case ${field.fieldTag}:
                    {
                      const value = ${templates.render('models.decodeField', { typeInfo: field.fieldTypeInfo! })}

                      ${field.isOptional ? `
                      if (m.${field.fieldName} === undefined) {
                        m.${field.fieldName} = [];
                      }` : ''}
  
                      m.${field.fieldName}.push(value)
                    }
                    continue;
                `
              default:
                return `
                  // ${field.fieldTypeInfo?.protoType} ${field.rawName} = ${field.fieldNumber}
                  case ${field.fieldTag}:
                    m.${field.fieldName} = ${templates.render('models.decodeField', { typeInfo: field.fieldTypeInfo! })}
                    continue;
                `
            }
          }).join('\n')}
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
            return `${field.fieldName}: runtime.convertMapToRecord(m.${field.fieldName}, (val) => ${templates.render('models.toJsonValue', { typeInfo: field.mapType!.valueTypeInfo, variable: 'val' })}),`
          } else {
            return `${field.fieldName}: ${templates.render('models.toJsonValue', { typeInfo: field.fieldTypeInfo!, variable: `m.${field.fieldName}` })},`
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
            return `m.${field.fieldName} = runtime.convertRecordToMap(obj.${field.fieldName}, (val) => {
              const tmpBuffer = []
              pjs.util.base64.decode(val, tmpBuffer, 0);
              return ${templates.render('models.fromJsonValue', { typeInfo: field.mapType!.valueTypeInfo, variable: 'tmpBuffer' })};
            });`
          } else {
            return `m.${field.fieldName} = runtime.convertRecordToMap(obj.${field.fieldName}, (val) => ${templates.render('models.fromJsonValue', { typeInfo: field.mapType!.valueTypeInfo, variable: 'val' })});`
          }
        } else if (field.fieldTypeInfo?.typeMarker === "Bytes") {
          return `{
            const tmpBuffer = []
            pjs.util.base64.decode(obj.${field.fieldName}, tmpBuffer, 0);
            m.${field.fieldName} = ${templates.render('models.fromJsonValue', { typeInfo: field.fieldTypeInfo!, variable: 'tmpBuffer' })}
          }`
        } else {
            return `m.${field.fieldName} = ${templates.render('models.fromJsonValue', { typeInfo: field.fieldTypeInfo!, variable: `obj.${field.fieldName}` })}`
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
      return `${ctx.typeInfo.tsType!}.decode(r, r.uint32())`
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
