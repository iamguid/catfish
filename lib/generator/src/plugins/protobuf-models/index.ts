import { MapField } from 'protobufjs';
import { BaseDescriptor, EnumDescriptor, MessageFieldDescriptor, FileDescriptor, MessageDescriptor, OneofDescriptor } from '../../../../parser';
import { Context, Import } from '../../Context';
import { Plugin, PluginOutputFile } from '../../Plugin';
import { filePathToPseudoNamespace, lowerCaseFirst, replaceProtoSuffix, snakeToCamel } from '../../utils';
import { templates } from './templates';
import { getWireTypeByTypeInfo, getJsonTypeByTypeInfo as getJsonTypeByTypeInfo, getTsTypeByTypeInfo as getTsTypeByTypeInfo, getTypeMarkerTypeInfo as getTypeMarkerByTypeInfo } from './utils';
import { CtxEnum, CtxEnumField, CtxFile, CtxMapField, CtxMessage, CtxMessageField, CtxOneof } from './reflection';
import { MapFieldDescriptor } from '@catfish/parser/src/reflection/MapFieldDescriptor';

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


const buildFileContext = (ctx: Context, file: FileDescriptor): CtxFile => {
    return new CtxFile(
        ctx,
        file,
        getImports(ctx, file),
        file.enums.map(enm => buildEnumCtx(ctx, file, enm)),
        file.messages.map(msg => buildMessageCtx(ctx, msg)),
    )
}

const buildEnumCtx = (ctx: Context, file: FileDescriptor, desc: EnumDescriptor) => {
    return new CtxEnum(ctx, desc, desc.fields.map(fld => new CtxEnumField(ctx, fld)));
}

const buildMessageCtx = (ctx: Context, file: FileDescriptor, desc: MessageDescriptor): CtxMessage => {
    const fileds = desc.fields.map(field => buildFieldCtx(ctx, file, field))
    const nestedEnums = desc.enums.map(enm => buildEnumCtx(ctx, file, enm));
    const nestedMessages = desc.messages.map(msg => buildMessageCtx(ctx, file, msg));

    return new CtxMessage(
        ctx,
        desc,
        fileds,
        nestedEnums,
        nestedMessages,
    )
}

const buildFieldCtx = (ctx: Context, file: FileDescriptor, desc: BaseDescriptor) => {
    if (desc instanceof MessageFieldDescriptor) {
        return new CtxMessageField(ctx, desc)
    }

    if (desc instanceof OneofDescriptor) {
        return new CtxOneof(ctx, desc)
    }

    if (desc instanceof MapFieldDescriptor) {
        return new CtxMapField(ctx, desc)
    }

    throw new Error("Invalid descriptor")
}

const buildMessageFieldCtx = (context: Context, descriptor: FileDescriptor, field: BaseDescriptor): PrimitiveFieldCtx => {
    if (field instanceof MapField) {
        retrun 
    }

    let mapType: MapFieldCtx | undefined = undefined;

    if (field.map) {
        const keyTypeInfo = getTypeInfoCtx(context, descriptor, field.map.keyType, 1);
        const valueTypeInfo = getTypeInfoCtx(context, descriptor, field.map.valueType, 2);

        mapType = {
            keyTypeInfo: keyTypeInfo,
            valueTypeInfo: valueTypeInfo,
        }
    }

    const fieldTypeInfo = field.type ? getTypeInfoCtx(context, descriptor, field.type, field.fieldNumber) : null;

    return {
        rawName: field.name,
        name: snakeToCamel(lowerCaseFirst(field.name)),
        number: field.fieldNumber,
        typeInfo: fieldTypeInfo,
        isMap: Boolean(field.map),
        isOneof: Boolean(field.oneofName),
        isRepeated: field.repeated,
        isOptional: field.optional,
        mapType,
        oneofName: field.oneofName,
    }
}

export const getFullImportPath = (context: Context, file: FileDescriptor, descriptor: BaseDescriptor) => {
    const filePath = context.getFilePathByDescriptor(descriptor.fileDescriptor);
    const modelsFilePath = replaceProtoSuffix(filePath, 'models');
    const modelsFileImportName = filePathToPseudoNamespace(modelsFilePath);

    // Model defined in current file
    if (descriptor.fileDescriptor === file) {
        return descriptor.fullname
    } else {
        return `${modelsFileImportName}.${descriptor.fullpath}`
    }
}

export const getTypeInfoCtx = (context: Context, fileDescriptor: FileDescriptor, type: string, fieldNumber: number): TypeInfoCtx => {
    const typeInfo = context.getTypeInfo(fileDescriptor, type);
    const fullImportPath = typeInfo.descriptor ? getFullImportPath(context, fileDescriptor, typeInfo.descriptor) : null

    return {
        ...typeInfo,
        tag: ((fieldNumber << 3) | getWireTypeByTypeInfo(typeInfo)) >>> 0,
        typeMarker: getTypeMarkerByTypeInfo(typeInfo),
        tsType: getTsTypeByTypeInfo(typeInfo) ?? fullImportPath ?? '',
        jsonType: getJsonTypeByTypeInfo(typeInfo) ?? `${fullImportPath}JSON` ?? '',
        fullType: fullImportPath,
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

const getImports = (ctx: Context, file: FileDescriptor): Import[] => {
    const imports: Import[] = [];
    const dependencies = ctx.getDependencies(file, true);

    for (const dependency of dependencies) {
        const filePath = ctx.getFilePathByDescriptor(dependency);
        const modelsFilePath = replaceProtoSuffix(filePath, 'models');
        const modelsFileImportName = filePathToPseudoNamespace(modelsFilePath);

        imports.push({
            path: modelsFilePath,
            name: modelsFileImportName
        })
    }

    return imports;
}

export default plugin;
