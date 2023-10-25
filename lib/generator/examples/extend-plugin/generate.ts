import { Project, ProtobufModelsPlugin } from "../../src";
import { extendedPluginTemplatesRegistry } from "./extended-pugin";

const project = new Project({
    protoDirPath: __dirname,
    outDirPath: __dirname,
});

project
    .load()
    // TODO: any
    .resgister(ProtobufModelsPlugin.plugin as any, { enableHelloWorld: true }, extendedPluginTemplatesRegistry)
    .generate();
