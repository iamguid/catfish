import { GrpcWebPlugin, Project, ProtobufModelsPlugin } from "../../../index";

export const generateAll = (
    path: string,
    protobufModelsOptions?: ProtobufModelsPlugin.PluginOptions,
    grpcJsOptions?: GrpcWebPlugin.PluginOptions
) => {
    const project = new Project({
        protoDirPath: path,
        outDirPath: path,
    });

    project
        .load()
        .resgister(ProtobufModelsPlugin.plugin, protobufModelsOptions)
        .resgister(GrpcWebPlugin.plugin, grpcJsOptions)
        .generate();
}
