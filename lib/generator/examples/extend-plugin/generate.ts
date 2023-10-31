import { Project, ProtobufModelsPlugin } from "../../src";
import { buildExtendedPluginContext, registerExtendedPluginTemplates } from "./extended-pugin";

const project = new Project({
    protoDirPath: __dirname,
    outDirPath: __dirname,
});

project
    .load()

    // TODO: fix as any
    .resgister(ProtobufModelsPlugin.plugin, { enableHelloWorld: true }, registerExtendedPluginTemplates, buildExtendedPluginContext)
    .generate();
