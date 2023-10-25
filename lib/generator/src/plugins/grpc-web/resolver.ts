import { BaseDescriptor, FileDescriptor, ServiceDescriptor } from "@catfish/parser";
import { ProjectOptions } from "../../Project";
import { ProjectContext } from "../../ProjectContext";
import { replaceProtoSuffix, snakeToCamel, upperCaseFirst } from "../../utils";
import { PluginOptions } from "./plugin";

export const serviceDefinitionNameBuilder = (thing: BaseDescriptor) => `${upperCaseFirst(snakeToCamel(thing.name))}Definition`
export const serviceClientNameBuilder = (thing: BaseDescriptor) => `${upperCaseFirst(snakeToCamel(thing.name))}Client`
export const fileNameBuilder = (file: FileDescriptor, ctx: ProjectContext) => replaceProtoSuffix(ctx.getProtoFilePath(file), 'grpc.ts');

export const registerFileTypes = (ctx: ProjectContext, file: FileDescriptor, projectOptions: ProjectOptions, pluginOptions?: PluginOptions) => {
    registerServices(ctx, file.services)
}

const registerServices = (ctx: ProjectContext, services: ServiceDescriptor[]) => {
    for (const service of services) {
        ctx.resolver.register('grpc.definition', service, serviceDefinitionNameBuilder, fileNameBuilder)
        ctx.resolver.register('grpc.client', service, serviceClientNameBuilder, fileNameBuilder)
    }
}
