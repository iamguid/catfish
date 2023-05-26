export const buildinProtoTypesToTsType: Record<string, string> = {
    "double": 'number',
    "float": 'number',
    "int32": 'number',
    "int64": 'BigInt',
    "uint32": 'number',
    "uint64": 'BigInt',
    "sint32": 'number',
    "sint64": 'BigInt',
    "fixed32": 'number',
    "fixed64": 'BigInt',
    "sfixed32": 'number',
    "sfixed64": 'BigInt',
    "enum": 'number',
    "bool": 'boolean',
    "string": 'string',
    "bytes": 'Uint8Array',
};
