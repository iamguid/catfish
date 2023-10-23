import { GrpcWebPlugin, GrpcWebRxjsPlugin, Project, ProtobufModelsPlugin } from "../../../index";

export const generateAll = (
    path: string,
    protobufModelsOptions?: ProtobufModelsPlugin.PluginOptions,
    grpcWebOptions?: GrpcWebPlugin.PluginOptions,
    grpcWebRxjsOptions?: GrpcWebRxjsPlugin.PluginOptions,
) => {
    const project = new Project({
        protoDirPath: path,
        outDirPath: path,
    });

    project
        .load()
        .resgister(ProtobufModelsPlugin.plugin, protobufModelsOptions)
        .resgister(GrpcWebPlugin.plugin, grpcWebOptions)
        .resgister(GrpcWebRxjsPlugin.plugin, grpcWebRxjsOptions)
        .generate();
}
