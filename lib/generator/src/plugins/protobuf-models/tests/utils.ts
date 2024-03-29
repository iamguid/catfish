import protobuf from "protobufjs";
import { Project, ProtobufModelsPlugin } from "../../../index";

export const loadProtoFileByProtobufjs = (protoFilePath: string, typePath: string, obj: Record<string, any>) => {
    const protoRoot = protobuf.loadSync(protoFilePath);
    const type = protoRoot.lookupType(typePath);
    const message = type.fromObject(obj);
    const buffer = type.encode(message).finish();
    const json = message.toJSON();

    return {
        protoRoot,
        type,
        message,
        buffer,
        json
    }
}

export const generateModels = async (path: string) => {
    const project = new Project({
        protoDirPath: path,
        outDirPath: path,
    });

    await project
        .load()
        .resgister(ProtobufModelsPlugin.plugin)
        .generate();
}
