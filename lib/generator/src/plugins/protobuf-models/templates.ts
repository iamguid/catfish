import { TemplateFn, Templates } from "../../Templates";
import { HeaderTemplate, headerTemplate } from "../../templates/header.template";
import { ImportsTemplate, importsTemplate } from "../../templates/imports.template";
import { EnumContext, FileContext, MapFieldContext, MessageContext, TypeInfoContext } from "./context";
import { PluginOptions } from "./plugin";
import { recursiveTemplate, modelClassTemplate, modelClassDecodeMapTemplate, modelClassEncodeMapTemplate, modelClassFieldsTemplate, modelClassCtorTemplate, modelClassEncodeTemplate, modelClassDecodeTemplate, modelClassToJSONTemplate, modelClassFromJSONTemplate, jsonIfaceTemplate, decodeFieldTemplate, encodeFieldTemplate, fromJsonValueTemplate, toJsonValueTemplate, cloneFieldTemplate, enumTemplate, mainTemplate } from "./template";

export type MainTemplate = TemplateFn<TemplateRegistry, PluginOptions, { file: FileContext }>
export type RecursiveTemplate = TemplateFn<TemplateRegistry, PluginOptions, { messages: MessageContext[], enums: EnumContext[] }>
export type ModelClassTemplate = TemplateFn<TemplateRegistry, PluginOptions, { message: MessageContext }>
export type ModelClassDecodeMapTemplate = TemplateFn<TemplateRegistry, PluginOptions, { mapField: MapFieldContext }>
export type ModelClassEncodeMapTemplate = TemplateFn<TemplateRegistry, PluginOptions, { mapField: MapFieldContext }>
export type ModelClassFieldsTemplate = TemplateFn<TemplateRegistry, PluginOptions, { message: MessageContext }>
export type ModelClassCtorTemplate = TemplateFn<TemplateRegistry, PluginOptions, { message: MessageContext }>
export type ModelClassEncodeTemplate = TemplateFn<TemplateRegistry, PluginOptions, { message: MessageContext }>
export type ModelClassDecodeTemplate = TemplateFn<TemplateRegistry, PluginOptions, { message: MessageContext }>
export type ModelClassToJSONTemplate = TemplateFn<TemplateRegistry, PluginOptions, { message: MessageContext }>
export type ModelClassFromJSONTemplate = TemplateFn<TemplateRegistry, PluginOptions, { message: MessageContext }>
export type JsonIfaceTemplate = TemplateFn<TemplateRegistry, PluginOptions, { message: MessageContext }>
export type DecodeFieldTemplate = TemplateFn<TemplateRegistry, PluginOptions, { typeInfo: TypeInfoContext, variable?: string }>
export type EncodeFieldTemplate = TemplateFn<TemplateRegistry, PluginOptions, { typeInfo: TypeInfoContext, writer: string, variable: string }>
export type FromJsonValueTemplate = TemplateFn<TemplateRegistry, PluginOptions, { typeInfo: TypeInfoContext, variable: string }>
export type ToJsonValueTemplate = TemplateFn<TemplateRegistry, PluginOptions, { typeInfo: TypeInfoContext, variable: string }>
export type CloneFieldTemplate = TemplateFn<TemplateRegistry, PluginOptions, { typeInfo: TypeInfoContext, variable: string }>
export type EnumTemplate = TemplateFn<TemplateRegistry, PluginOptions, { enm: EnumContext }>

export type TemplateRegistry = {
  "main": MainTemplate,
  "header": HeaderTemplate,
  "imports": ImportsTemplate,
  "recursive": RecursiveTemplate,
  "modelClass": ModelClassTemplate,
  "modelClassDecodeMap": ModelClassDecodeMapTemplate,
  "modelClassEncodeMap": ModelClassEncodeMapTemplate,
  "modelClassFields": ModelClassFieldsTemplate,
  "modelClassCtor": ModelClassCtorTemplate,
  "modelClassEncode": ModelClassEncodeTemplate,
  "modelClassDecode": ModelClassDecodeTemplate,
  "modelClassToJSON": ModelClassToJSONTemplate,
  "modelClassFromJSON": ModelClassFromJSONTemplate,
  "jsonIface": JsonIfaceTemplate,
  "decodeField": DecodeFieldTemplate,
  "encodeField": EncodeFieldTemplate,
  "fromJsonValue": FromJsonValueTemplate,
  "toJsonValue": ToJsonValueTemplate,
  "cloneField": CloneFieldTemplate,
  "enum": EnumTemplate,
}

const templateRegistry: TemplateRegistry = {
  "main": mainTemplate,
  "header": headerTemplate,
  "imports": importsTemplate,
  "recursive": recursiveTemplate,
  "modelClass": modelClassTemplate,
  "modelClassDecodeMap": modelClassDecodeMapTemplate,
  "modelClassEncodeMap": modelClassEncodeMapTemplate,
  "modelClassFields": modelClassFieldsTemplate,
  "modelClassCtor": modelClassCtorTemplate,
  "modelClassEncode": modelClassEncodeTemplate,
  "modelClassDecode": modelClassDecodeTemplate,
  "modelClassToJSON": modelClassToJSONTemplate,
  "modelClassFromJSON": modelClassFromJSONTemplate,
  "jsonIface": jsonIfaceTemplate,
  "decodeField": decodeFieldTemplate,
  "encodeField": encodeFieldTemplate,
  "fromJsonValue": fromJsonValueTemplate,
  "toJsonValue": toJsonValueTemplate,
  "cloneField": cloneFieldTemplate,
  "enum": enumTemplate,
}

export const buildTemplates = (opts: PluginOptions) => {
  return new Templates(templateRegistry, opts)
}
