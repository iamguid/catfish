import fs from 'node:fs';
import path from 'node:path';

export const wellKnownTypesToRuntimeMap: {[key: string]: string} = {
  'google/protobuf/any.proto': '@grpc-web-framework/runtime/well-known-types/any_models',
  'google/protobuf/api.proto': '@grpc-web-framework/runtime/well-known-types/api_models',
  'google/protobuf/duration.proto': '@grpc-web-framework/runtime/well-known-types/duration_models',
  'google/protobuf/empty.proto': '@grpc-web-framework/runtime/well-known-types/empty_models',
  'google/protobuf/field_mask.proto': '@grpc-web-framework/runtime/well-known-types/field_mask_models',
  'google/protobuf/source_context.proto': '@grpc-web-framework/runtime/well-known-types/source_context_models',
  'google/protobuf/struct.proto': '@grpc-web-framework/runtime/well-known-types/struct_models',
  'google/protobuf/timestamp.proto': '@grpc-web-framework/runtime/well-known-types/timestamp_models',
  'google/protobuf/type.proto': '@grpc-web-framework/runtime/well-known-types/type_models',
  'google/protobuf/wrappers.proto': '@grpc-web-framework/runtime/well-known-types/wrappers_models'
};

export const wellKnownTypesToProtoFilesMap: { [key: string]: string } = {
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