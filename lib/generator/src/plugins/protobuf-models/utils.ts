import { EnumDescriptor } from "@catfish/parser";
import { MessageCtx, MessageFieldCtx, TypeMarker } from "./types";
import { TypeInfo } from '../../Context';

export const getRepeatedFieldsArray = (message: MessageCtx): number[] => {
  return message.fields.filter(field => field.isRepeated).map(field => field.fieldNumber);
}

export const getOneofGroups = (message: MessageCtx): { name: string; fields: number[] }[] => {
  return message.fields
    .filter(field => field.isOneof)
    .reduce((accum, field) => {
      if (accum.findIndex(group => group.name === field.oneofName) === -1) {
        accum.push({ name: field.oneofName!, fields: [] })
      }

      const currentGroup = accum.find(group => group.name === field.oneofName)!
      currentGroup.fields.push(field.fieldNumber);
      return accum;
    }, [] as { name: string; fields: number[] }[]);
}

export const getOneofGroupsArray = (message: MessageCtx): number[][] => {
  return getOneofGroups(message).map(groups => groups.fields);
}

export const getOneofGroupsArrayIndex = (message: MessageCtx, oneofName: string): number => {
  return getOneofGroups(message).findIndex(group => group.name === oneofName);
}

export const renderOneofGroupsArray = (groups: number[][]) => {
  let result: string[] = [];

  for (const group of groups) {
    result.push(`[${group.join(', ')}]`);
  }

  return `[${result.join(', ')}]`;
}

export const getFieldDefaultValue = (field: MessageFieldCtx) => {
  if (field.isRepeated) {
    return "[]";
  }

  if (field.fieldTypeInfo?.typeMarker === "Message") {
    return `new ${field.fieldTypeInfo.tsType}()`;
  }

  if (field.fieldTypeInfo?.typeMarker === "Enum") {
    return `${field.fieldTypeInfo.fullType}.${(field.fieldTypeInfo.descriptor as EnumDescriptor).fields[0].fieldName}`;
  }

  switch (field.fieldTypeInfo?.protoType) {
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

  throw new Error(`Cannot get default TS type for proto type ${field.fieldTypeInfo?.protoType}`)
}

// Based on https://github.com/protobufjs/protobuf.js/blob/master/src/types.js#L37
export const getBasicWireType = (typeInfo: TypeInfo): number => {
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

export const getTsTypeByProtoType = (typeInfo: TypeInfo) => {
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

export const getJsonTypeByProtoType = (typeInfo: TypeInfo) => {
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

export const getTypeMarkerByProtoType = (typeInfo: TypeInfo): TypeMarker => {
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