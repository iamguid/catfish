import { EnumDescriptor } from "@catfish/parser";
import { MessageCtx, PrimitiveFieldCtx, TypeMarker } from "./reflection";
import { TypeInfo } from '../../Context';

export const getFieldDefaultValue = (field: PrimitiveFieldCtx) => {
  if (field.repeated) {
    return "[]";
  }

  if (field.typeInfo.typeMarker === "Message") {
    return `new ${field.typeInfo.tsType}()`;
  }

  if (field.typeInfo.typeMarker === "Enum") {
    return `${field.typeInfo.fullType}.${(field.typeInfo.descriptor as EnumDescriptor).fields[0].fieldName}`;
  }

  switch (field.typeInfo.protoType) {
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
  }

  throw new Error(`Cannot get default TS type for proto type ${field.typeInfo.typeMarker} ${field.typeInfo.protoType}`)
}

// Based on https://github.com/protobufjs/protobuf.js/blob/master/src/types.js#L37
export const getWireTypeByTypeInfo = (typeInfo: TypeInfo): number => {
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
      if (typeInfo.descriptor instanceof EnumDescriptor) {
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

export const getTypeMarkerTypeInfo = (typeInfo: TypeInfo): TypeMarker => {
  switch (typeInfo.protoType) {
    case "float":
    case "int32":
    case 'double':
    case "uint32":
    case "sint32":
    case "fixed32":
    case "sfixed32":
    case "bool":
    case "string":
      return 'Primitive';
    case "int64":
    case "uint64":
    case "sint64":
    case "fixed64":
    case "sfixed64":
      return 'BigInt';
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