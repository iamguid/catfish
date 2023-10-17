import protobuf, { FieldBase } from "protobufjs";
import { Project, ProtobufModelsPlugin } from "../src";

export const loadProtoFileByProtobufjs = (protoFilePath: string, typePath: string, obj: Record<string, any>) => {
    const protoRoot = protobuf.loadSync(protoFilePath);
    const type = protoRoot.lookupType(typePath);
    const message = type.create(obj);
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

export const traverseByModels = <TModel extends Record<string, any>>(modelA: TModel, modelB: TModel, eachCb: (fieldA: any, fieldB: any) => void) => {
    for (const fieldA of modelA.fields) {
        const fieldAValue = modelA[fieldA];
        const fieldBValue = modelB[fieldA];
        if (fieldAValue.hasOwnProperty('fields')) {
            traverseByModels(fieldAValue, fieldBValue, eachCb)
        } else {
            eachCb(fieldAValue, fieldBValue)
        }
    }
}