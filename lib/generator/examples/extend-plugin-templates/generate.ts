import { Project, ProtobufModelsPlugin } from "../../src";
import { buildExtendedPluginContext, extendedPluginTemplates } from "./extended-pugin";

const project = new Project({
    protoDirPath: __dirname,
    outDirPath: __dirname,
});

project
    .load()
    .resgister(ProtobufModelsPlugin.plugin, buildExtendedPluginContext, {  test: 'Hello, world' })
    .generate();
