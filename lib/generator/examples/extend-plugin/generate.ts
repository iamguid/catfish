import { Project, ProtobufModelsPlugin } from "../../src";
import { buildExtendedPluginContext, extendedPluginTemplatesRegistry } from "./extended-pugin";

export default () => {
    const project = new Project({
        protoDirPath: __dirname,
        outDirPath: __dirname,
    });

    project
        .load()
        // TODO: any
        .resgister(ProtobufModelsPlugin.plugin as any, { enableHelloWorld: true }, extendedPluginTemplatesRegistry, buildExtendedPluginContext)
        .generate();
}
