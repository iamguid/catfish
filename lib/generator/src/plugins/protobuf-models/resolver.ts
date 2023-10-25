import path from "node:path";

import { BaseDescriptor, EnumDescriptor, FileDescriptor, MessageDescriptor, OneofDescriptor } from "@catfish/parser";
import { ProjectOptions } from "../../Project";
import { ProjectContext } from "../../ProjectContext";
import { PluginOptions } from "./plugin";
import { replaceProtoSuffix } from "../../utils";

export const jsonIfaceNameBuilder = (thing: BaseDescriptor) => `${thing.name}JSON`
export const enumNameBuilder = (thing: BaseDescriptor) => thing.name
export const classNameBuilder = (thing: BaseDescriptor) => thing.name
export const oneofJsonTypeNameBuilder = (thing: BaseDescriptor) => `${thing.name}OneofJSONType`
export const oneofTypeNameBuilder = (thing: BaseDescriptor) => `${thing.name}OneofType`
export const fileNameBuilder = (file: FileDescriptor, ctx: ProjectContext) => replaceProtoSuffix(ctx.getProtoFilePath(file), 'models.ts');

export const registerPluginTypes = (ctx: ProjectContext, projectOptions: ProjectOptions, pluginOptions?: PluginOptions) => {
    const files = ctx.getFiles();

    for (const file of files) {
        registerEnums(ctx, file.enums)
        registerMessages(ctx, file.messages)
    }
}

const registerEnums = (ctx: ProjectContext, enums: EnumDescriptor[]) => {
    for (const enm of enums) {
        ctx.resolver.register('model.enum',  enm, enumNameBuilder, fileNameBuilder)
    }
}

const registerMessages = (ctx: ProjectContext, messages: MessageDescriptor[]) => {
    for (const msg of messages) {
        ctx.resolver.register('model.class', msg, classNameBuilder, fileNameBuilder)
        ctx.resolver.register('model.jsonIface', msg, jsonIfaceNameBuilder, fileNameBuilder)
        registerEnums(ctx, msg.enums);
        registerMessages(ctx, msg.messages);

        for (const field of msg.fields) {
            if (field instanceof OneofDescriptor) {
                registerOneofs(ctx, [field])
            }
        }
    }
}

const registerOneofs = (ctx: ProjectContext, oneofs: OneofDescriptor[]) => {
    for (const oneof of oneofs) {
        ctx.resolver.register('model.oneof.jsonType', oneof, oneofJsonTypeNameBuilder, fileNameBuilder)
        ctx.resolver.register('model.oneof.type', oneof, oneofTypeNameBuilder, fileNameBuilder)
    }
}