import { FileDescriptor } from "@catfish/parser";
import { PluginOutputFile } from "../../Plugin";
import { ProjectContext } from "../../ProjectContext";
import { TemplatesRegistry } from "../../Templates";
import { replaceProtoSuffix } from "../../utils";
import { buildFileContext } from "../grpc-web/context";
import { PluginTemplatesRegistry, registerPluginTemplates } from "./templates";
import { ProjectOptions } from "../../Project";
import { ContextsRegistry } from "../../PluginContext";

export const fileNameBuilder = (file: FileDescriptor, ctx: ProjectContext) => replaceProtoSuffix(ctx.getProtoFilePath(file), 'models.ts');

export interface PluginOptions {}

export const plugin = async (projectContext: ProjectContext, projectOptions: ProjectOptions, pluginOptions: PluginOptions) => {
    const result: PluginOutputFile[] = []

    const pluginOptions_ = pluginOptions ?? {};
    const registerTemplates_ = registerPluginTemplates

    // Build templates registry
    const templatesRegistry = new TemplatesRegistry<PluginTemplatesRegistry, PluginOptions>(projectContext, pluginOptions_)
    registerTemplates_(templatesRegistry)

    const files = projectContext.getFiles();

    for (const file of files) {
        // Build context
        const contextsRegistry = new ContextsRegistry(projectContext, file, fileNameBuilder(file, projectContext), pluginOptions_)

        // Capture usages
        const stopCapture = projectContext.resolver.capture()
        // TODO: fix async capture
        const fileContext = await contextsRegistry.build()
        const usedThings = stopCapture();

        // Render file template
        // const resultFilePath = fileNameBuilder(file, projectContext);
        // const imports = projectContext.resolver.getImports(usedThings, file, resultFilePath)
        // const resultFileContent = templatesRegistry.render('main', { file: fileContext, imports });

        // result.push({ path: resultFilePath, content: resultFileContent });
    }

    return { files: result }
}
