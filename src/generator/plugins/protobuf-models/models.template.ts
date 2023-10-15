import { protoTypeToPjsFn } from ".";
import { templates } from "./templates";
import { EnumCtx, FileCtx, MessageCtx, MessageFieldCtx, TypeInfoCtx } from "./types";
import { fieldDefault } from "./utils";

export const modelsTemplate = (ctx: FileCtx): string => `
  ${templates.render('header', {
    packageName: ctx.descriptor.package,
    fileName: ctx.context.getFilePathByDescriptor(ctx.descriptor)
  })}

  ${templates.render('imports', {
    imports: ctx.imports
  })}

  import * as pjs from "protobufjs/minimal"

  ${templates.render('models.recursive', {
    messages: ctx.messges,
    enums: ctx.enums
  })}
`;

export const recursiveTemplate = (ctx: { messages: MessageCtx[], enums: EnumCtx[] }): string => `
  ${ctx.messages.map((message) => `
    ${ctx.enums.map((enm) => templates.render('models.enum', { enm })).join('\n')}

    ${templates.render('models.jsonIface', { message })}

    ${templates.render('models.modelIface', { message })}

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
    export class ${ctx.message.modelClassName} implements ${ctx.message.modelIfaceName} {
      ${templates.render('models.modelClassFields', {
        message: ctx.message
      })}

      ${templates.render('models.modelClassCtor', {
        message: ctx.message
      })}

      ${templates.render('models.modelClassSerialize', {
        message: ctx.message
      })}

      ${templates.render('models.modelClassDeserialize', {
        message: ctx.message
      })}

      ${templates.render('models.modelClassToJSON', {
        message: ctx.message
      })}

      ${templates.render('models.modelClassFromJSON', {
        message: ctx.message
      })}

      clone(): ${ctx.message.modelClassName} {
        return new ${ctx.message.modelClassName}(this);
      }
    }
  `;
}

export const modelIfaceTemplate = (ctx: { message: MessageCtx }) => `
  export interface ${ctx.message.modelIfaceName} {
    ${ctx.message.fields.map((field) => {
      switch (true) {
        case field.isMap:
          return `${field.fieldName}: Map<${field.mapType?.keyTypeInfo.tsType}, ${field.mapType?.valueTypeInfo.tsType}>;`
        case field.isOneof:
          return `${field.fieldName}?: ${field.fieldTypeInfo?.tsType};`
        default:
          return `${field.fieldName}: ${field.fieldTypeInfo?.tsType}${field.isOptional ? ' | undefined' : ''};`
      }
    }).join('\n')}
  }
`;

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
    constructor(obj?: Partial<${ctx.message.modelIfaceName}>) {
      if (!obj) return;

      ${ctx.message.fields.map((field) => {
          return `if (obj.${field.fieldName} !== undefined) { this.${field.fieldName} = obj.${field.fieldName} }`
      }).join('\n')}
    }
  `
}

export const modelClassFieldsTemplate = (ctx: { message: MessageCtx }): string => {
  return ctx.message.fields.map((field) => {
    switch (true) {
      case field.isMap:
        return `${field.fieldName}: Record<${field.mapType?.keyTypeInfo.tsType}, ${field.mapType?.valueTypeInfo.tsType}> = ${field.isOptional ? 'undefined' : '{}'};`
      case field.isOneof:
        return `${field.fieldName}?: ${field.fieldTypeInfo?.tsType}${field.isOptional ? ' | undefined' : ''} = ${field.isOptional ? 'undefined' : fieldDefault(field)};`
      default:
        return `${field.fieldName}: ${field.fieldTypeInfo?.tsType}${field.isOptional ? ' | undefined' : ''} = ${field.isOptional ? 'undefined' : fieldDefault(field)};`
    }
  }).join('\n')
}

export const modelClassEncodeTemplate = (ctx: { message: MessageCtx }): string => {
  return `
    public static encode(m: ${ctx.message.modelIfaceName}, w: pjs.Writer = pjs.Writer.create()): Uint8Array {
      ${ctx.message.fields.map(field => {
        switch (true) {
          case field.isMap:
            return `
              // map<${field.mapType?.keyTypeInfo.protoType}, ${field.mapType?.valueTypeInfo.protoType}> ${field.rawName} = ${field.fieldNumber}
            `
          case field.isOneof:
            return `
              // oneof ${field.fieldTypeInfo?.protoType} ${field.rawName} = ${field.fieldNumber}
            `
          default:
            return `
              // ${field.fieldTypeInfo?.protoType} ${field.rawName} = ${field.fieldNumber}
              if (m.${field.fieldName} !== ${fieldDefault(field)}) {
                w.uint32(${field.fieldTag});
                ${templates.render('models.encodeField', { typeInfo: field.fieldTypeInfo!, field })}
              }
            `
        }
      }).join('\n')}
      
      return w.finish();
    }
  `
}

export const modelClassDecodeTemplate = (ctx: { message: MessageCtx }): string => {
  return `
    public static decode(b: Uint8Array): ${ctx.message.modelClassName} {
      const m = new ${ctx.message.modelClassName}();
      const r = pjs.Reader.create(b);
      while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag) {
          ${ctx.message.fields.map(field => {
            switch (true) {
              case field.isMap:
                return `
                  // map<${field.mapType?.keyTypeInfo.protoType}, ${field.mapType?.valueTypeInfo.protoType}> ${field.rawName} = ${field.fieldNumber}
                  case ${field.fieldTag}:
                    const ${field.fieldName}Key = ${templates.render('models.decodeField', { typeInfo: field.mapType!.keyTypeInfo })}
                    const ${field.fieldName}Value = ${templates.render('models.decodeField', { typeInfo: field.mapType!.valueTypeInfo })}

                    ${field.isOptional ? `
                    if (m.${field.fieldName} === undefined) {
                      m.${field.fieldName} = new Map();
                    }` : ''}

                    m.${field.fieldName}.set(${field.fieldName}Key, ${field.fieldName}Value)
                    continue;
                `
              case field.isRepeated:
                return `
                  // repeated ${field.fieldTypeInfo?.protoType} ${field.rawName} = ${field.fieldNumber}
                  case ${field.fieldTag}:
                    const ${field.fieldName}Value = ${templates.render('models.decodeField', { typeInfo: field.fieldTypeInfo! })}

                    ${field.isOptional ? `
                    if (m.${field.fieldName} === undefined) {
                      m.${field.fieldName} = [];
                    }` : ''}

                    m.${field.fieldName}.push(${field.fieldName}Value)
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

      return m;
    }
  `
}

export const modelClassToJSONTemplate = (ctx: { message: MessageCtx }): string => {
  return `
    public static toJSON(m: ${ctx.message.modelIfaceName}): ${ctx.message.jsonIfaceName} {

    }
  `
}

export const modelClassFromJSONTemplate = (ctx: { message: MessageCtx }): string => {
  return `
    public static fromJSON(obj: ${ctx.message.jsonIfaceName}): ${ctx.message.modelIfaceName} {

    }
  `
}

export const decodeFieldTemplate = (ctx: { typeInfo: TypeInfoCtx }): string => {
  if (ctx.typeInfo.tsType) {
    return `r.${protoTypeToPjsFn(ctx.typeInfo.protoType)}()`
  }

  return ctx.typeInfo.modelFullImportName!
}

export const encodeFieldTemplate = (ctx: { typeInfo: TypeInfoCtx, field: MessageFieldCtx }): string => {
  if (ctx.typeInfo.tsType) {
    return `w.${protoTypeToPjsFn(ctx.typeInfo.protoType)}(m.${ctx.field.fieldName})`
  }

  return `m.${ctx.field.fieldName}.encode(writer)`
}
