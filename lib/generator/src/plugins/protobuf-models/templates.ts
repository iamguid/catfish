import { Templates } from "../../Templates";
import { headerTemplate } from "../../templates/header.template";
import { importsTemplate } from "../../templates/imports.template";
import { decodeFieldTemplate, encodeFieldTemplate, enumTemplate, modelClassCtorTemplate, modelClassDecodeTemplate, modelClassEncodeTemplate, modelClassFieldsTemplate, modelClassFromJSONTemplate, modelClassTemplate, modelClassToJSONTemplate, modelsTemplate, jsonIfaceTemplate, recursiveTemplate, fromJsonValueTemplate, toJsonValueTemplate, modelClassDecodeMapTemplate, modelClassEncodeMapTemplate, cloneFieldTemplate } from "./models.template";

export const templates = new Templates()
    .register('header', headerTemplate)
    .register('imports', importsTemplate)
    .register('models', modelsTemplate)
    .register('models.recursive', recursiveTemplate)
    .register('models.modelClass', modelClassTemplate)
    .register('models.modelClassDecodeMap', modelClassDecodeMapTemplate)
    .register('models.modelClassEncodeMap', modelClassEncodeMapTemplate)
    .register('models.modelClassFields', modelClassFieldsTemplate)
    .register('models.modelClassCtor', modelClassCtorTemplate)
    .register('models.modelClassEncode', modelClassEncodeTemplate)
    .register('models.modelClassDecode', modelClassDecodeTemplate)
    .register('models.modelClassToJSON', modelClassToJSONTemplate)
    .register('models.modelClassFromJSON', modelClassFromJSONTemplate)
    .register('models.jsonIface', jsonIfaceTemplate)
    .register('models.decodeField', decodeFieldTemplate)
    .register('models.encodeField', encodeFieldTemplate)
    .register('models.fromJsonValue', fromJsonValueTemplate)
    .register('models.toJsonValue', toJsonValueTemplate)
    .register('models.cloneField', cloneFieldTemplate)
    .register('models.enum', enumTemplate)