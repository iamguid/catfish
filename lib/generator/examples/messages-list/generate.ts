import { Project, ProtobufModelsPlugin } from "../../src";
import * as MessagesListPlugin from "./"

const project = new Project({
    protoDirPath: __dirname,
    outDirPath: __dirname,
});

project
    .load()
    .resgister(ProtobufModelsPlugin.plugin)
    .resgister(MessagesListPlugin.plugin)
    .generate();
