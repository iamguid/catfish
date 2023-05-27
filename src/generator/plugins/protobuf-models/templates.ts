import { Templates } from "../../Templates";
import { headerTemplate } from "../../templates/header.template";
import { importsTemplate } from "../../templates/imports.template";
import { enumTemplate, messageFieldGetterBodyTemplate, messageIfaceTemplate, messageModelTemplate, messagesRecursiveTemplate, modelsTemplate } from "./models.template";

export const templates = new Templates()
    .register('header', headerTemplate)
    .register('imports', importsTemplate)
    .register('models', modelsTemplate)
    .register('models.messagesRecursive', messagesRecursiveTemplate)
    .register('models.messageIface', messageIfaceTemplate)
    .register('models.messageModel', messageModelTemplate)
    .register('models.messageFieldGetterBody', messageFieldGetterBodyTemplate)
    .register('models.enum', enumTemplate)