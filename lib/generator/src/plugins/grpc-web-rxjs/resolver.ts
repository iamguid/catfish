import { BaseDescriptor, FileDescriptor, ServiceDescriptor } from "@catfish/parser";
import { ProjectOptions } from "../../Project";
import { ProjectContext } from "../../ProjectContext";
import { replaceProtoSuffix } from "../../utils";
import { PluginOptions } from "./plugin";

export const rxjsGrpcClassBuilder = (thing: BaseDescriptor) => `${thing.name}RxjsClient`;
export const fileNameBuilder = (file: FileDescriptor, ctx: ProjectContext) => replaceProtoSuffix(ctx.getProtoFilePath(file), 'grpc_rxjs.ts');

export const registerFileTypes = (ctx: ProjectContext, file: FileDescriptor, projectOptions: ProjectOptions, pluginOptions?: PluginOptions) => {
    registerServices(ctx, file.services)
}

const registerServices = (ctx: ProjectContext, services: ServiceDescriptor[]) => {
    for (const service of services) {
        ctx.resolver.register('grpcrxjs.client', service, rxjsGrpcClassBuilder, fileNameBuilder)
    }
}
