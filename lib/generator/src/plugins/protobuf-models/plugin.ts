import { FileDescriptor } from "@catfish/parser";
import { BasePluginOptions, PluginOutputFile, Plugin } from "../../Plugin";
import { ProjectContext } from "../../ProjectContext";
import { BaseTemplates, TemplatesBuilder, TemplatesRegistry } from "../../Templates";
import { replaceProtoSuffix } from "../../utils";
import { PluginTemplates, registerPluginTemplates } from "./templates";
import { ProjectOptions } from "../../Project";
import { BaseContextDefinition, ContextBuilder, ContextsRegistry } from "../../PluginContext";
import { PluginContextDefinition, buildPluginContext } from "./context";

export const fileNameBuilder = (file: FileDescriptor, ctx: ProjectContext) => replaceProtoSuffix(ctx.getProtoFilePath(file), 'models.ts');

export interface PluginOptions extends BasePluginOptions {}

export const plugin: Plugin<PluginOptions, PluginTemplates, PluginContextDefinition> = async (
    projectContext,
    projectOptions,
    pluginOptions?,
    templatesBuilder?,
    contextBuilder?
) => {
    const result: PluginOutputFile[] = []

    const pluginOptions_ = pluginOptions ?? {};
    const templatesBuilder_ = templatesBuilder ?? registerPluginTemplates
    const contextBuilder_ = contextBuilder ?? buildPluginContext

    // Build templates registry
    const templatesRegistry = new TemplatesRegistry<PluginOptions, PluginTemplates>(projectContext, pluginOptions_)
    templatesBuilder_(templatesRegistry)

    const files = projectContext.getFiles();

    await Promise.all(files.map(async (file) => {
        // Build context
        const contextsRegistry = new ContextsRegistry<PluginOptions, PluginContextDefinition>(projectContext, file, fileNameBuilder(file, projectContext), pluginOptions_)
        const context = contextBuilder_(contextsRegistry);

        // Capture usages
        const captureContext = projectContext.resolver.getCaptureContext()
        // TODO: fix as any
        const fileContext = await (context as any).build(captureContext)
        const usedThings = captureContext.stopCapture();

        // Render file template
        const resultFilePath = fileNameBuilder(file, projectContext);
        const imports = projectContext.resolver.getImports(usedThings, file, resultFilePath)
        const resultFileContent = templatesRegistry.render('main', { file: fileContext, imports });

        result.push({ path: resultFilePath, content: resultFileContent });
    }))

    return { files: result }
}
