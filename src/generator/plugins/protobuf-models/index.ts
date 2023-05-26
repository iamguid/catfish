import { EnumDescriptor, FieldDescriptor, FileDescriptor, MessageDescriptor } from '../../../parser';
import { buildinProtoTypesToTsType } from '../../buildinProtoTypes';
import { Context, Import } from '../../Context';
import { Plugin } from '../../Plugin';
import { filePathToPseudoNamespace, lowerCaseFirst, replaceProtoSuffix } from '../../utils';
import { EnumCtx, EnumFieldCtx, MapTypeCtx, MessageCtx, MessageFieldCtx, FileCtx } from './types';

const plugin: Plugin<void> = (context, projectOptions) => {
    for (const file of context.getFiles()) {
        const pluginContext = buildFileContext(context, file);
    }

    return {
        files: []
    }
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
    const dependencies = context.getDependencies(descriptor);

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
        ifaceName: `I${message.name}`,
        modelName: message.name,
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
            keyTypeInfo: context.getTypeInfo(descriptor, field.map.keyType),
            valueTypeInfo: context.getTypeInfo(descriptor, field.map.valueType),
            valueTypeIsMessage: !(field.map.valueType in buildinProtoTypesToTsType)
        }
    }

    return {
        fieldName: lowerCaseFirst(field.name),
        fieldNumber: field.fieldNumber,
        fieldTypeInfo: field.type ? context.getTypeInfo(descriptor, field.type) : null,
        isMessageType: !(field.type! in buildinProtoTypesToTsType),
        isMap: Boolean(field.map),
        isOneof: Boolean(field.oneofName),
        isRepeated: field.repeated,
        mapType,
        oneofName: field.oneofName,
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

export default plugin;