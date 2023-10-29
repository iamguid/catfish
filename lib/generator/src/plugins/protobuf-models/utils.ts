import { EnumDescriptor } from "@catfish/parser";
import { TypeInfo } from '../../ProjectContext';

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
export const getWireTypeByTypeInfo = (typeInfo: TypeInfoContext): number => {
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

export const getPjsFnNameByTypeInfo = (typeInfo: TypeInfo) => {
  if (typeInfo.descriptor instanceof EnumDescriptor) {
    return "int32";
  }

  return typeInfo.protoType;
}

export const getTag = (fieldNUmber: number, wireType: number) => {
  return ((fieldNUmber << 3) | wireType) >>> 0;
}
