import { GrpcWebPlugin, GrpcWebRxjsPlugin, GrpcWebTanStackPlugin, Project, ProtobufModelsPlugin } from "../../../index";

export const generateAll = (
    path: string,
) => {
    const project = new Project({
        protoDirPath: path,
        outDirPath: path,
    });

    project
        .load()
        .resgister(ProtobufModelsPlugin.plugin)
        .resgister(GrpcWebPlugin.plugin)
        .resgister(GrpcWebTanStackPlugin.plugin)
        .generate();
}
