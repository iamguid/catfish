import { templates } from "./templates";
import { EnumCtx, FileCtx, MessageCtx, MessageFieldCtx } from "./types";
import { fieldDefault, getOneofGroupsArray, getOneofGroupsArrayIndex, getRepeatedFieldsArray, renderOneofGroupsArray } from "./utils";

export const modelsTemplate = (ctx: FileCtx): string => `
  ${templates.render('header', {
    packageName: ctx.descriptor.package,
    fileName: ctx.context.getFilePathByDescriptor(ctx.descriptor)
  })}

  ${templates.render('imports', {
    imports: ctx.imports
  })}

  import * as jspb from "google-protobuf"

  ${templates.render('models.messagesRecursive', {
    messages: ctx.messges,
    enums: ctx.enums
  })}
`;

export const messagesRecursiveTemplate = (ctx: { messages: MessageCtx[], enums: EnumCtx[] }): string => `
  ${ctx.messages.map((message) => `
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

    ${ctx.enums.map((enm) => templates.render('models.enum', { enm })).join('\n')}
  `).join('\n')}
`;

export const messageIfaceTemplate = (ctx: { message: MessageCtx }) => `
  export interface ${ctx.message.ifaceName} {
    ${ctx.message.fields.map((field) => {
      switch (true) {
        case field.isMap:
          return `${field.fieldName}: Record<${field.mapType?.keyTypeInfo.tsType}, ${field.mapType?.valueTypeInfo.tsType}>;`
        case field.isOneof:
          return `${field.fieldName}?: ${field.fieldTypeInfo.tsType};`
        default:
          return `${field.fieldName}: ${field.fieldTypeInfo.tsType}; `
      }
    }).join('\n')}
  }
`;

export const messageFieldGetterBodyTemplate = ({ field }: { field: MessageFieldCtx }) => {
  let useDefault = true;

  // Repeated fields get initialized to their default in the constructor
  // (why?), so we emit a plain getField() call for them.
  if (field.isRepeated) {
    useDefault = false;
  }

  const isBoolean = field.fieldTypeInfo.protoType == "bool";
  const isFloatOrDouble =
    field.fieldTypeInfo.protoType == "float" ||
    field.fieldTypeInfo.protoType == "double";

  const cardinality = field.isRepeated ? "Repeated" : "";
  const withDefault = useDefault ? "WithDefault" : "";
  const defaultArg = useDefault ? fieldDefault(field) : "";

  let type = "";
  if (isFloatOrDouble) {
    type = "FloatingPoint";
  }
  if (isBoolean) {
    type = "Boolean";
  }

  // Prints the appropriate function, among:
  // - getField
  // - getBooleanField
  // - getFloatingPointField => Replaced by getOptionalFloatingPointField to
  //   preserve backward compatibility.
  // - getFieldWithDefault
  // - getBooleanFieldWithDefault
  // - getFloatingPointFieldWithDefault
  // - getRepeatedField
  // - getRepeatedBooleanField
  // - getRepeatedFloatingPointField
  if (isFloatOrDouble && !field.isRepeated && !useDefault) {
    return `
      return jspb.Message.getOptionalFloatingPointField(
        this,
        ${field.fieldNumber}
      )
    `
  } else {
    return `
      return jspb.Message.get${cardinality}${type}Field${withDefault}(
        this,
        ${field.fieldNumber},
        ${defaultArg}
      )
    `
  }
}

export const messageModelTemplate = (ctx: { message: MessageCtx }): string => {
  const repeatedFieldsArray = getRepeatedFieldsArray(ctx.message);
  const oneofGroupsArray = getOneofGroupsArray(ctx.message);

  return `
    export class ${ctx.message.modelName} implements ${ctx.message.ifaceName} extends jspb.Message {
      ${repeatedFieldsArray.length > 0 ? `private static repeatedFields: number[] = [${repeatedFieldsArray.join(', ')}];` : ''}
      ${oneofGroupsArray.length > 0 ? `private static oneofFieldsGroups: number[] = ${renderOneofGroupsArray(oneofGroupsArray)};` : ''}

      contructor(opt_data: any) {
        jspb.Message.initialize(
          this,
          opt_data,
          0,
          ${ctx.message.pivot},
          ${repeatedFieldsArray.length > 0 ? `${ctx.message.modelName}.repeatedFields,` : `null,`}
          ${oneofGroupsArray.length > 0 ? `${ctx.message.modelName}.oneofFieldsGroups` : `null`}
        )
      }

      ${ctx.message.fields.map((field) => {
        switch (true) {
          case field.isMap: {
            return `
              public get ${field.fieldName}(): jspb.Map<${field.mapType?.keyTypeInfo.tsType}, ${field.mapType?.valueTypeInfo.tsType}> {
                return jspb.Message.getMapField(
                  this,
                  ${field.fieldNumber},
                  false,
                  ${field.mapType!.valueTypeIsMessage ? field.mapType?.valueTypeInfo.tsType : 'null'}
                );
              }
            `
          }
          case field.isMessageType: {
            return `
              public get ${field.fieldName} (): ${field.fieldTypeInfo.tsType} {
                return jspb.Message.get${field.isRepeated ? 'Repeated' : ''}WrapperField(
                  this,
                  ${field.fieldTypeInfo.tsType},
                  ${field.fieldNumber}
                );
              }

              public set ${field.fieldName} (value: ${field.fieldTypeInfo.tsType}): void {
                return jspb.Message.set${field.isOneof ? 'Oneof' : ''}${field.isRepeated ? 'Repeated' : ''}WrapperField(
                  this,
                  ${field.fieldNumber},
                  ${field.oneofName ? `${ctx.message.modelName}.oneofFieldsGroups[${getOneofGroupsArrayIndex(ctx.message, field.oneofName)}], ` : ''}
                  value
                )
              }
            `
          }
          default: {
            return `
              public get ${field.fieldName} (): ${field.fieldTypeInfo.tsType} {
                ${templates.render('models.messageFieldGetterBody', { field })}
              }

              public set ${field.fieldName} (value: ${field.fieldTypeInfo.tsType}) {
              }
            `
          }
        }
      }).join('\n')}
    }
  `;
}

export const enumTemplate = ({ enm }: { enm: EnumCtx }) => `
  export enum ${enm.name} {
    ${enm.fields.map((field) => `${field.fieldName} = ${field.fieldValue},`).join('\n')}
  }
`;