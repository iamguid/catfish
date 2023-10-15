import { BaseDescriptor, EnumDescriptor, FieldDescriptor, FileDescriptor, MessageDescriptor } from '../../../parser';
import { Context, Import } from '../../Context';
import { Plugin, PluginOutputFile } from '../../Plugin';
import { filePathToPseudoNamespace, lowerCaseFirst, replaceProtoSuffix, snakeToCamel } from '../../utils';
import { templates } from './templates';
import { EnumCtx, EnumFieldCtx, MapTypeCtx, MessageCtx, MessageFieldCtx, FileCtx, TypeInfoCtx } from './types';
import { getBasicWireType, getJsonTypeByProtoType, getTsTypeByProtoType } from './utils';

const plugin: Plugin<void> = (context, projectOptions) => {
    const result: PluginOutputFile[] = []

    for (const file of context.getFiles()) {
        const pluginContext = buildFileContext(context, file);
        const resultFileContent = templates.render('models', pluginContext);
        const resultFilePath = replaceProtoSuffix(context.getFilePathByDescriptor(file), 'models.ts');
        result.push({ path: resultFilePath, content: resultFileContent });
    }

    return { files: result }
}

const buildFileContext = (context: Context, descriptor: FileDescriptor): FileCtx => {
    return {
        context,
        descriptor: descriptor,
        imports: getImports(context, descriptor),
        enums: descriptor.enums.map(enm => buildEnumContext(enm)),
        messges: descriptor.messages.map(msg => buildMessageContext(context, descriptor, msg)),
    }
}

const getImports = (context: Context, descriptor: FileDescriptor): Import[] => {
    const imports: Import[] = [];
    const dependencies = context.getDependencies(descriptor, true);

    for (const dependency of dependencies) {
        const filePath = context.getFilePathByDescriptor(dependency);
        const modelsFilePath = replaceProtoSuffix(filePath, 'models');
        const modelsFileImportName = filePathToPseudoNamespace(modelsFilePath);

        imports.push({
            path: modelsFilePath,
            name: modelsFileImportName
        })
    }

    return imports;
}

const buildEnumContext = (enm: EnumDescriptor): EnumCtx => {
    const enumFields: EnumFieldCtx[] = enm.fields.map(field => {
        return {
            fieldName: field.fieldName,
            fieldValue: field.fieldValue,
        }
    })

    return {
        name: enm.name,
        fields: enumFields,
    }
}

const buildMessageContext = (context: Context, descriptor: FileDescriptor, message: MessageDescriptor): MessageCtx => {
    const fileds = message.fields.map(field => buildMessageFieldContext(context, descriptor, field))
    const nestedEnums = message.enums.map(enm => buildEnumContext(enm));
    const nestedMessages = message.messages.map(msg => buildMessageContext(context, descriptor, msg));

    return {
        messageIndex: message.index!,
        modelIfaceName: `I${message.name}`,
        modelClassName: message.name,
        jsonIfaceName: `I${message.name}Obj`,
        pivot: getPivot(message),
        enums: nestedEnums,
        mesages: nestedMessages,
        fields: fileds,
    }
}

const buildMessageFieldContext = (context: Context, descriptor: FileDescriptor, field: FieldDescriptor): MessageFieldCtx => {
    let mapType: MapTypeCtx | undefined = undefined;

    if (field.map) {
        mapType = {
            keyTypeInfo: getTypeInfoCtx(context, descriptor, field.map.keyType),
            valueTypeInfo: getTypeInfoCtx(context, descriptor, field.map.valueType),
            valueTypeIsMessage: getTsTypeByProtoType(field.map.valueType!) === null
        }
    }

    const fieldTypeInfo = field.type ? getTypeInfoCtx(context, descriptor, field.type) : null;

    return {
        rawName: field.name,
        fieldName: snakeToCamel(lowerCaseFirst(field.name)),
        fieldNumber: field.fieldNumber,
        fieldTag: ((field.fieldNumber << 3) | getBasicWireType(field.type!)) >>> 0,
        fieldTypeInfo,
        isMessageType: getTsTypeByProtoType(field.type!) === null,
        isMap: Boolean(field.map),
        isOneof: Boolean(field.oneofName),
        isRepeated: field.repeated,
        isOptional: field.optional,
        mapType,
        oneofName: field.oneofName,
    }
}

export const getModelFullImportName = (context: Context, descriptor: BaseDescriptor) => {
    const filePath = context.getFilePathByDescriptor(descriptor.fileDescriptor);
    const modelsFilePath = replaceProtoSuffix(filePath, 'models');
    const modelsFileImportName = filePathToPseudoNamespace(modelsFilePath);
    return `${modelsFileImportName}.${descriptor.fullpath}`
}

export const getTypeInfoCtx = (context: Context, fileDescriptor: FileDescriptor, type: string): TypeInfoCtx => {
    const typeInfo = context.getTypeInfo(fileDescriptor, type);

    if (typeInfo.descriptor) {
        return {
            ...typeInfo,
            tsType: getTsTypeByProtoType(typeInfo.protoType),
            jsonType: getJsonTypeByProtoType(typeInfo.protoType),
            modelFullImportName: getModelFullImportName(context, typeInfo.descriptor),
        }
    }

    return {
        ...typeInfo,
        tsType: getTsTypeByProtoType(typeInfo.protoType),
        jsonType: getJsonTypeByProtoType(typeInfo.protoType),
    }
}

// Returns the max index in the underlying data storage array beyond which the
// extension object is used.
const getPivot = (messageDescriptor: MessageDescriptor): number => {
    const kDefaultPivot = 500;

    // Find the max field number
    let maxFieldNumber = 0;
    for (let i = 0; i < messageDescriptor.fields.length; i++) {
        if (messageDescriptor.fields[i].fieldNumber > maxFieldNumber) {
            maxFieldNumber = messageDescriptor.fields[i].fieldNumber;
        }
    }

    let pivot = -1;
    if (maxFieldNumber >= kDefaultPivot) {
        pivot = ((maxFieldNumber + 1) < kDefaultPivot) ? (maxFieldNumber + 1) : kDefaultPivot;
    }

    return pivot;
}

export const protoTypeToPjsFn = (protoType: string) => {
  switch (protoType) {
    case 'enum': return 'int32';
    default: return protoType
  }
}

export default plugin;
