import { Project, ProtobufModelsPlugin } from "../../src";

const project = new Project({
    protoDirPath: __dirname,
    outDirPath: __dirname,
});

project
    .load()
    .resgister(ProtobufModelsPlugin, ProtobufModelsPlugin.templates, () => undefined)
    .generate();
    