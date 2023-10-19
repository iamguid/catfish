import { BaseDescriptor, EnumDescriptor, FileDescriptor } from "@catfish/parser";
import { CtxTypeInfo, TypeMarker } from "./context";
import { ProjectContext, Import, TypeInfo } from '../../ProjectContext';
import { filePathToPseudoNamespace, replaceProtoSuffix } from "../../utils";

export const getScalarDefaultValue = (typeInfo: TypeInfo) => {
  switch (typeInfo.protoType) {
    case "double": return '0';
    case "float": return '0';
    case "int32": return '0';
    case "int64": return 'pjs.util.Long.fromValue(0, false)';
    case "uint32": return '0';
    case "uint64": return 'pjs.util.Long.fromValue(0, true)';
    case "sint32": return '0';
    case "sint64": return 'pjs.util.Long.fromValue(0, false)';
    case "fixed32": return '0';
    case "fixed64": return 'pjs.util.Long.fromValue(0, true)';
    case "sfixed32": return '0';
    case "sfixed64": return 'pjs.util.Long.fromValue(0, false)';
    case "bool": return 'false';
    case "string": return '""';
    case "bytes": return 'pjs.util.newBuffer(0)';
    default: return null;
  }
}

// Based on https://github.com/protobufjs/protobuf.js/blob/master/src/types.js#L37
export const getWireTypeByTypeInfo = (typeInfo: CtxTypeInfo): number => {
  switch (typeInfo.protoType) {
    case "int32":
    case "uint32":
    case "sint32":
    case "int64":
    case "uint64":
    case "sint64":
    case "bool":
      return 0;
    case "double":
    case "fixed64":
    case "sfixed64":
      return 1;
    case "string":
    case "bytes":
      return 2;
    case "float":
    case "fixed32":
    case "sfixed32":
      return 5;
    default:
      if (typeInfo.desc instanceof EnumDescriptor) {
        return 0;
      } else {
        return 2;
      }
  }
}

export const getTsTypeByTypeInfo = (typeInfo: TypeInfo) => {
  switch (typeInfo.protoType) {
    case 'double': return 'number';
    case "float": return 'number';
    case "int32": return 'number';
    case "int64": return 'pjs.Long';
    case "uint32": return 'number';
    case "uint64": return 'pjs.Long';
    case "sint32": return 'number';
    case "sint64": return 'pjs.Long';
    case "fixed32": return 'number';
    case "fixed64": return 'pjs.Long';
    case "sfixed32": return 'number';
    case "sfixed64": return 'pjs.Long';
    case "bool": return 'boolean';
    case "string": return 'string';
    case "bytes": return 'Uint8Array | Buffer';
    default:
      if (typeInfo.descriptor instanceof EnumDescriptor) {
        return "number";
      } else {
        return null;
      }
  }
}

export const getJsonTypeByTypeInfo = (typeInfo: TypeInfo) => {
  switch (typeInfo.protoType) {
    case 'double': return 'number';
    case "float": return 'number';
    case "int32": return 'number';
    case "int64": return 'string';
    case "uint32": return 'number';
    case "uint64": return 'string';
    case "sint32": return 'number';
    case "sint64": return 'string';
    case "fixed32": return 'number';
    case "fixed64": return 'string';
    case "sfixed32": return 'number';
    case "sfixed64": return 'string';
    case "bool": return 'boolean';
    case "string": return 'string';
    case "bytes": return 'string';
    default:
      if (typeInfo.descriptor instanceof EnumDescriptor) {
        return "string";
      } else {
        return null;
      }
  }
}

export const getTypeMarkerByTypeInfo = (typeInfo: TypeInfo): TypeMarker => {
  switch (typeInfo.protoType) {
    case "float":
    case 'double':
    case "bool":
    case "int32":
    case "uint32":
    case "sint32":
    case "fixed32":
    case "sfixed32":
      return 'FixedSmall';
    case "int64":
    case "uint64":
    case "sint64":
    case "fixed64":
    case "sfixed64":
      return 'FixedBig';
    case "string":
      return "String";
    case "bytes":
      return 'Bytes';
    default:
      if (typeInfo.descriptor instanceof EnumDescriptor) {
        return "Enum";
      } else {
        return "Message"
      }
  }
}

export const getPjsFnNameByTypeInfo = (typeInfo: TypeInfo) => {
  if (typeInfo.descriptor instanceof EnumDescriptor) {
    return "int32";
  }

  return typeInfo.protoType;
}

export const getTag = (fieldNUmber: number, wireType: number) => {
  return ((fieldNUmber << 3) | wireType) >>> 0;
}

export const getFullImportPath = (ctx: ProjectContext, file: FileDescriptor, desc: BaseDescriptor) => {
    const filePath = ctx.getFilePathByDescriptor(desc.fileDescriptor);
    const modelsFilePath = replaceProtoSuffix(filePath, 'models');
    const modelsFileImportName = filePathToPseudoNamespace(modelsFilePath);

    // Model defined in current file
    if (desc.fileDescriptor === file) {
        return desc.fullname
    } else {
        return `${modelsFileImportName}.${desc.fullname}`
    }
}

export const getImports = (ctx: ProjectContext, file: FileDescriptor): Import[] => {
    const imports: Import[] = [];
    const dependencies = ctx.getDependencies(file, true);

    for (const dependency of dependencies) {
        const filePath = ctx.getFilePathByDescriptor(dependency);
        const modelsFilePath = replaceProtoSuffix(filePath, 'models');
        const modelsFileImportName = filePathToPseudoNamespace(modelsFilePath);

        imports.push({
            path: `./${modelsFilePath}`,
            name: modelsFileImportName
        })
    }

    return imports;
}
