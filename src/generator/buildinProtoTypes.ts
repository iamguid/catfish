export const buildinProtoTypesToTsType: Record<string, string> = {
    "double": 'number',
    "float": 'number',
    "int32": 'number',
    "int64": 'number',
    "uint32": 'number',
    "uint64": 'number',
    "sint32": 'number',
    "sint64": 'number',
    "fixed32": 'number',
    "fixed64": 'number',
    "sfixed32": 'number',
    "sfixed64": 'number',
    "enum": 'number',
    "bool": 'boolean',
    "string": 'string',
    "bytes": 'Uint8Array',
};