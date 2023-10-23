import path from 'node:path';

export const googleWellKnownTypesToProtoFilesMap: { [key: string]: string } = {
  'google/protobuf/any.proto': path.join(__dirname, '../wktproto/any.proto'),
  'google/protobuf/api.proto': path.join(__dirname, '../wktproto/api.proto'),
  'google/protobuf/duration.proto': path.join(__dirname, '../wktproto/duration.proto'),
  'google/protobuf/empty.proto': path.join(__dirname, '../wktproto/empty.proto'),
  'google/protobuf/field_mask.proto': path.join(__dirname, '../wktproto/field_mask.proto'),
  'google/protobuf/source_context.proto': path.join(__dirname, '../wktproto/source_context.proto'),
  'google/protobuf/struct.proto': path.join(__dirname, '../wktproto/struct.proto'),
  'google/protobuf/timestamp.proto': path.join(__dirname, '../wktproto/timestamp.proto'),
  'google/protobuf/type.proto': path.join(__dirname, '../wktproto/type.proto'),
  'google/protobuf/wrappers.proto': path.join(__dirname, '../wktproto/wrappers.proto'),
}

export const catfishWellKnownTypesToProtoFilesMap: { [key: string]: string } = {
  'catfish.proto': path.join(__dirname, '../catfishproto/catfish.proto'),
}
