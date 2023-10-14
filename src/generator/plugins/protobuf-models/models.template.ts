import { protoTypeToPjsFn } from ".";
import { FieldContext } from "../../../parser/generated/Protobuf2Parser";
import { TypeInfo } from "../../Context";
import { templates } from "./templates";
import { EnumCtx, FileCtx, MessageCtx, MessageFieldCtx, TypeInfoCtx } from "./types";
import { fieldDefault, getOneofGroupsArray, getOneofGroupsArrayIndex, getRepeatedFieldsArray, renderOneofGroupsArray } from "./utils";

export const modelsTemplate = (ctx: FileCtx): string => `
  ${templates.render('header', {
    packageName: ctx.descriptor.package,
    fileName: ctx.context.getFilePathByDescriptor(ctx.descriptor)
  })}

  ${templates.render('imports', {
    imports: ctx.imports
  })}

  import * as pjs from "protobufjs/minimal"

  ${templates.render('models.messagesRecursive', {
    messages: ctx.messges,
    enums: ctx.enums
  })}
`;

export const messagesRecursiveTemplate = (ctx: { messages: MessageCtx[], enums: EnumCtx[] }): string => `
  ${ctx.messages.map((message) => `
    ${ctx.enums.map((enm) => templates.render('models.enum', { enm })).join('\n')}

    ${templates.render('models.messageIface', { message })}

    ${templates.render('models.messageModel', { message })}

    ${message.mesages.length > 0 || message.enums.length > 0 ? `
      export namespace ${message.modelName} {
        ${templates.render('models.messagesRecursive', {
          messages: message.mesages,
          enums: message.enums
        })}
      }
    ` : ''}
  `).join('\n')}
`;

export const messageModelTemplate = (ctx: { message: MessageCtx }): string => {
  return `
    export class ${ctx.message.modelName} implements ${ctx.message.ifaceName} {
      ${templates.render('models.messageModelFields', {
        message: ctx.message
      })}

      ${templates.render('models.messageModelConstructor', {
        message: ctx.message
      })}

      ${templates.render('models.messageModelSerialize', {
        message: ctx.message
      })}

      ${templates.render('models.messageModelDeserialize', {
        message: ctx.message
      })}

      clone(): ${ctx.message.modelName} {
        return new ${ctx.message.modelName}(this);
      }
    }
  `;
}

export const messageIfaceTemplate = (ctx: { message: MessageCtx }) => `
  export interface ${ctx.message.ifaceName} {
    ${ctx.message.fields.map((field) => {
      switch (true) {
        case field.isMap:
          return `${field.fieldName}: Record<${field.mapType?.keyTypeInfo.tsType}, ${field.mapType?.valueTypeInfo.tsType}>;`
        case field.isOneof:
          return `${field.fieldName}?: ${field.fieldTypeInfo?.tsType};`
        default:
          return `${field.fieldName}: ${field.fieldTypeInfo?.tsType}${field.isOptional ? ' | undefined' : ''};`
      }
    }).join('\n')}
  }
`;

export const enumTemplate = ({ enm }: { enm: EnumCtx }) => `
  export enum ${enm.name} {
    ${enm.fields.map((field) => `${field.fieldName} = ${field.fieldValue},`).join('\n')}
  }
`;

export const messageModelConstructorTemplate = (ctx: { message: MessageCtx }): string => {
  return `
    constructor(obj?: Partial<${ctx.message.ifaceName}>) {
      if (!obj) return;

      ${ctx.message.fields.map((field) => {
          return `if (obj?.${field.fieldName} !== ${fieldDefault(field)}) { this.${field.fieldName} = obj.${field.fieldName} }`
      }).join('\n')}
    }
  `
}

export const messageModelFieldsTemplate = (ctx: { message: MessageCtx }): string => {
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

export const messageModelEncodeTemplate = (ctx: { message: MessageCtx }): string => {
  return `
    encode(w: pjs.Writer = pjs.Writer.create()): Uint8Array {
      ${ctx.message.fields.map(field => {
        switch (true) {
          case field.isMap:
            return ``
          case field.isOneof:
            return ``
          default:
            return ``
        }
      }).join('\n')}
      
      return w;
    }
  `
}

export const messageModelDecodeTemplate = (ctx: { message: MessageCtx }): string => {
  return `
    decode(b: Uint8Array): void {
      const reader = pjs.Reader.create(b);
      while (reader.pos < reader.len) {
        const tag = reader.uint32();
        switch (tag) {
          ${ctx.message.fields.map(field => {
            switch (true) {
              case field.isMap:
                return `
                  case ${field.fieldTag}:
                    const ${field.fieldName}Key = ${templates.render('models.decodeField', { typeInfo: field.mapType!.keyTypeInfo })}
                    const ${field.fieldName}Value = ${templates.render('models.decodeField', { typeInfo: field.mapType!.valueTypeInfo })}

                    ${field.isOptional ? `
                    if (this.${field.fieldName} === undefined) {
                      this.${field.fieldName} = new Map();
                    }` : ''}

                    this.${field.fieldName}.set(${field.fieldName}Key, ${field.fieldName}Value)
                    continue;
                `
              case field.isRepeated:
                return `
                  case ${field.fieldTag}:
                    const ${field.fieldName}Value = ${templates.render('models.decodeField', { typeInfo: field.fieldTypeInfo! })}

                    ${field.isOptional ? `
                    if (this.${field.fieldName} === undefined) {
                      this.${field.fieldName} = [];
                    }` : ''}

                    this.${field.fieldName}.push(${field.fieldName}Value)
                    continue;
                `
              default:
                return `
                  case ${field.fieldTag}:
                    this.${field.fieldName} = ${templates.render('models.decodeField', { typeInfo: field.fieldTypeInfo! })}
                    continue;
                `
            }
          }).join('\n')}
        }
      }
    }
  `
}

export const decodeFieldTemplate = (ctx: { typeInfo: TypeInfoCtx }): string => {
  if (ctx.typeInfo.isBuiltin) {
    return `pjs.${protoTypeToPjsFn(ctx.typeInfo.protoType)}()`
  }

  return ctx.typeInfo.modelFullImportName!
}
