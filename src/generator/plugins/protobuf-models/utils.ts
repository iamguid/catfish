import { MessageCtx, MessageFieldCtx } from "./types";

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


export const fieldDefault = (field: MessageFieldCtx) => {
  if (field.isRepeated) {
    return "[]";
  }

  if (field.isMessageType) {
    return "null";
  }

  switch (field.fieldTypeInfo?.protoType) {
    case "double": return '0';
    case "float": return '0';
    case "int32": return '0';
    case "int64": return '0n';
    case "uint32": return '0';
    case "uint64": return '0n';
    case "sint32": return '0';
    case "sint64": return '0n';
    case "fixed32": return '0';
    case "fixed64": return '0n';
    case "sfixed32": return '0';
    case "sfixed64": return '0n';
    case "enum": return '0';
    case "bool": return 'false';
    case "string": return '""';
    case "bytes": return 'new Uint8Array()';
  }

  throw new Error(`Cannot get default TS type for proto type ${field.fieldTypeInfo?.protoType}`)
}
