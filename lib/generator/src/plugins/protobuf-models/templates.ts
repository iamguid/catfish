import { Templates } from "../../Templates";
import { headerTemplate } from "../../templates/header.template";
import { importsTemplate } from "../../templates/imports.template";
import { recursiveTemplate, modelClassTemplate, modelClassDecodeMapTemplate, modelClassEncodeMapTemplate, modelClassFieldsTemplate, modelClassCtorTemplate, modelClassEncodeTemplate, modelClassDecodeTemplate, modelClassToJSONTemplate, modelClassFromJSONTemplate, jsonIfaceTemplate, decodeFieldTemplate, encodeFieldTemplate, fromJsonValueTemplate, toJsonValueTemplate, cloneFieldTemplate, enumTemplate, mainTemplate } from "./template";

export const templates = new Templates()
  .register('main', mainTemplate)
  .register('header', headerTemplate)
  .register('imports', importsTemplate)
  .register('recursive', recursiveTemplate)
  .register('modelClass', modelClassTemplate)
  .register('modelClassDecodeMap', modelClassDecodeMapTemplate)
  .register('modelClassEncodeMap', modelClassEncodeMapTemplate)
  .register('modelClassFields', modelClassFieldsTemplate)
  .register('modelClassCtor', modelClassCtorTemplate)
  .register('modelClassEncode', modelClassEncodeTemplate)
  .register('modelClassDecode', modelClassDecodeTemplate)
  .register('modelClassToJSON', modelClassToJSONTemplate)
  .register('modelClassFromJSON', modelClassFromJSONTemplate)
  .register('jsonIface', jsonIfaceTemplate)
  .register('decodeField', decodeFieldTemplate)
  .register('encodeField', encodeFieldTemplate)
  .register('fromJsonValue', fromJsonValueTemplate)
  .register('toJsonValue', toJsonValueTemplate)
  .register('cloneField', cloneFieldTemplate)
  .register('enum', enumTemplate)