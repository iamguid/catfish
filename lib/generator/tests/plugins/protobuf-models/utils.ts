import protobuf, { FieldBase } from "protobufjs";
import { Project, ProtobufModelsPlugin } from "../../../src";

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

export const generateModels = (path: string) => {
    const project = new Project({
        protoDirPath: path,
        outDirPath: path,
    });

    project
        .load()
        .resgister(ProtobufModelsPlugin)
        .generate();
}
