import { TemplateFn, TemplatesRegistry, TemplatesRenderer } from "../../Templates";
import { headerTemplate } from "../../templates/header.template";
import { importsTemplate } from "../../templates/imports.template";
import { EnumContext, FileContext, MapFieldContext, MessageContext, TypeInfoContext } from "./context";
import { PluginOptions } from "./plugin";
import { recursiveTemplate, modelClassTemplate, modelClassDecodeMapTemplate, modelClassEncodeMapTemplate, modelClassFieldsTemplate, modelClassCtorTemplate, modelClassEncodeTemplate, modelClassDecodeTemplate, modelClassToJSONTemplate, modelClassFromJSONTemplate, jsonIfaceTemplate, decodeFieldTemplate, encodeFieldTemplate, fromJsonValueTemplate, toJsonValueTemplate, cloneFieldTemplate, enumTemplate, mainTemplate } from "./template";

export type PluginTamplateFn<TCtx> = TemplateFn<PluginTemplatesRegistry, PluginOptions, TCtx>
export type MainTemplate = PluginTamplateFn<{ file: FileContext }>
export type RecursiveTemplate = PluginTamplateFn<{ messages: MessageContext[], enums: EnumContext[] }>
export type ModelClassTemplate = PluginTamplateFn<{ message: MessageContext }>
export type ModelClassDecodeMapTemplate = PluginTamplateFn<{ mapField: MapFieldContext }>
export type ModelClassEncodeMapTemplate = PluginTamplateFn<{ mapField: MapFieldContext }>
export type ModelClassFieldsTemplate = PluginTamplateFn<{ message: MessageContext }>
export type ModelClassCtorTemplate = PluginTamplateFn<{ message: MessageContext }>
export type ModelClassEncodeTemplate = PluginTamplateFn<{ message: MessageContext }>
export type ModelClassDecodeTemplate = PluginTamplateFn<{ message: MessageContext }>
export type ModelClassToJSONTemplate = PluginTamplateFn<{ message: MessageContext }>
export type ModelClassFromJSONTemplate = PluginTamplateFn<{ message: MessageContext }>
export type JsonIfaceTemplate = PluginTamplateFn<{ message: MessageContext }>
export type DecodeFieldTemplate = PluginTamplateFn<{ typeInfo: TypeInfoContext, variable?: string }>
export type EncodeFieldTemplate = PluginTamplateFn<{ typeInfo: TypeInfoContext, writer: string, variable: string }>
export type FromJsonValueTemplate = PluginTamplateFn<{ typeInfo: TypeInfoContext, variable: string }>
export type ToJsonValueTemplate = PluginTamplateFn<{ typeInfo: TypeInfoContext, variable: string }>
export type CloneFieldTemplate = PluginTamplateFn<{ typeInfo: TypeInfoContext, variable: string }>
export type EnumTemplate = PluginTamplateFn<{ enm: EnumContext }>

export type PluginTemplatesRegistry = {
  main: MainTemplate,
  header: typeof headerTemplate,
  imports: typeof importsTemplate,
  recursive: RecursiveTemplate,
  modelClass: ModelClassTemplate,
  modelClassDecodeMap: ModelClassDecodeMapTemplate,
  modelClassEncodeMap: ModelClassEncodeMapTemplate,
  modelClassFields: ModelClassFieldsTemplate,
  modelClassCtor: ModelClassCtorTemplate,
  modelClassEncode: ModelClassEncodeTemplate,
  modelClassDecode: ModelClassDecodeTemplate,
  modelClassToJSON: ModelClassToJSONTemplate,
  modelClassFromJSON: ModelClassFromJSONTemplate,
  jsonIface: JsonIfaceTemplate,
  decodeField: DecodeFieldTemplate,
  encodeField: EncodeFieldTemplate,
  fromJsonValue: FromJsonValueTemplate,
  toJsonValue: ToJsonValueTemplate,
  cloneField: CloneFieldTemplate,
  enum: EnumTemplate,
}

export const pluginTemplatesRegistry: PluginTemplatesRegistry = {
  main: mainTemplate,
  header: headerTemplate,
  imports: importsTemplate,
  recursive: recursiveTemplate,
  modelClass: modelClassTemplate,
  modelClassDecodeMap: modelClassDecodeMapTemplate,
  modelClassEncodeMap: modelClassEncodeMapTemplate,
  modelClassFields: modelClassFieldsTemplate,
  modelClassCtor: modelClassCtorTemplate,
  modelClassEncode: modelClassEncodeTemplate,
  modelClassDecode: modelClassDecodeTemplate,
  modelClassToJSON: modelClassToJSONTemplate,
  modelClassFromJSON: modelClassFromJSONTemplate,
  jsonIface: jsonIfaceTemplate,
  decodeField: decodeFieldTemplate,
  encodeField: encodeFieldTemplate,
  fromJsonValue: fromJsonValueTemplate,
  toJsonValue: toJsonValueTemplate,
  cloneField: cloneFieldTemplate,
  enum: enumTemplate,
}

export const buildTemplates = <TTemplatesRegistry extends PluginTemplatesRegistry>(opts: PluginOptions, registry: TTemplatesRegistry) => {
  return new TemplatesRenderer(opts, registry)
}
