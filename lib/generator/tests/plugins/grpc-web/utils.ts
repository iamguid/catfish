import { GrpcJsPlugin, Project, ProtobufModelsPlugin } from "../../../src";

export const generateAll = (
    path: string,
    protobufModelsOptions?: ProtobufModelsPlugin.PluginOptions,
    grpcJsOptions?: GrpcJsPlugin.PluginOptions
) => {
    const project = new Project({
        protoDirPath: path,
        outDirPath: path,
    });

    project
        .load()
        .resgister(ProtobufModelsPlugin.plugin, protobufModelsOptions)
        .resgister(GrpcJsPlugin.plugin, grpcJsOptions)
        .generate();
}
