import { Project, ProtobufModelsPlugin } from "../../src";
import { buildExtendedPluginContext, registerExtendedPluginTemplates } from "./extended-pugin";

const project = new Project({
    protoDirPath: __dirname,
    outDirPath: __dirname,
});

project
    .load()

    // TODO: fix as any
    .resgister(ProtobufModelsPlugin.plugin as any, { enableHelloWorld: true }, registerExtendedPluginTemplates as any, buildExtendedPluginContext)
    .generate();
