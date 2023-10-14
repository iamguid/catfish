import { Templates } from "../../Templates";
import { headerTemplate } from "../../templates/header.template";
import { importsTemplate } from "../../templates/imports.template";
import { enumTemplate, messageIfaceTemplate, messageModelConstructorTemplate, messageModelDecodeTemplate, messageModelFieldsTemplate, messageModelEncodeTemplate, messageModelTemplate, messagesRecursiveTemplate, modelsTemplate, decodeFieldTemplate } from "./models.template";

export const templates = new Templates()
    .register('header', headerTemplate)
    .register('imports', importsTemplate)
    .register('models', modelsTemplate)
    .register('models.messagesRecursive', messagesRecursiveTemplate)
    .register('models.messageIface', messageIfaceTemplate)
    .register('models.messageModel', messageModelTemplate)
    .register('models.messageModelFields', messageModelFieldsTemplate)
    .register('models.messageModelConstructor', messageModelConstructorTemplate)
    .register('models.messageModelSerialize', messageModelEncodeTemplate)
    .register('models.messageModelDeserialize', messageModelDecodeTemplate)
    .register('models.decodeField', decodeFieldTemplate)
    .register('models.enum', enumTemplate)