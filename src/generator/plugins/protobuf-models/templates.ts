import { Templates } from "../../Templates";
import { headerTemplate } from "../../templates/header.template";
import { importsTemplate } from "../../templates/imports.template";
import { decodeFieldTemplate, encodeFieldTemplate, enumTemplate, modelClassCtorTemplate, modelClassDecodeTemplate, modelClassEncodeTemplate, modelClassFieldsTemplate, modelClassFromJSONTemplate, modelClassTemplate, modelClassToJSONTemplate, modelIfaceTemplate, modelsTemplate, jsonIfaceTemplate, recursiveTemplate } from "./models.template";

export const templates = new Templates()
    .register('header', headerTemplate)
    .register('imports', importsTemplate)
    .register('models', modelsTemplate)
    .register('models.recursive', recursiveTemplate)
    .register('models.modelIface', modelIfaceTemplate)
    .register('models.modelClass', modelClassTemplate)
    .register('models.modelClassFields', modelClassFieldsTemplate)
    .register('models.modelClassCtor', modelClassCtorTemplate)
    .register('models.modelClassSerialize', modelClassEncodeTemplate)
    .register('models.modelClassDeserialize', modelClassDecodeTemplate)
    .register('models.modelClassToJSON', modelClassToJSONTemplate)
    .register('models.modelClassFromJSON', modelClassFromJSONTemplate)
    .register('models.jsonIface', jsonIfaceTemplate)
    .register('models.decodeField', decodeFieldTemplate)
    .register('models.encodeField', encodeFieldTemplate)
    .register('models.enum', enumTemplate)