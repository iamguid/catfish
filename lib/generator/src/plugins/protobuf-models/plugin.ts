import { FileDescriptor } from "@catfish/parser";
import { BasePluginOptions, PluginOutputFile } from "../../Plugin";
import { ProjectContext } from "../../ProjectContext";
import { BaseTemplates, TemplatesBuilder, TemplatesRegistry } from "../../Templates";
import { replaceProtoSuffix } from "../../utils";
import { PluginTemplates, registerPluginTemplates } from "./templates";
import { ProjectOptions } from "../../Project";
import { BaseContextDefinition, ContextBuilder, ContextsRegistry } from "../../PluginContext";
import { PluginContextDefinition, buildPluginContext } from "./context";

export const fileNameBuilder = (file: FileDescriptor, ctx: ProjectContext) => replaceProtoSuffix(ctx.getProtoFilePath(file), 'models.ts');

export interface PluginOptions extends BasePluginOptions {}

export const plugin = async <
    TPluginOptions extends PluginOptions,
    TPluginTemplates extends PluginTemplates,
    TPluginContextDefintion extends PluginContextDefinition,
    TTemplatesBuilder extends TemplatesBuilder<TPluginOptions, TPluginTemplates>,
    TContextBuilder extends ContextBuilder<TPluginOptions, TPluginContextDefintion>,
>(
    projectContext: ProjectContext,
    projectOptions: ProjectOptions,
    pluginOptions?: TPluginOptions,
    templatesBuilder?: TTemplatesBuilder,
    contextBuilder?: TContextBuilder
) => {
    const result: PluginOutputFile[] = []

    const pluginOptions_ = pluginOptions ?? ({} as TPluginOptions);
    const templatesBuilder_ = templatesBuilder ?? registerPluginTemplates
    const contextBuilder_ = contextBuilder ?? buildPluginContext

    // Build templates registry
    const templatesRegistry = new TemplatesRegistry<TPluginOptions, TPluginTemplates>(projectContext, pluginOptions_)
    templatesBuilder_(templatesRegistry)

    const files = projectContext.getFiles();

    await Promise.all(files.map(async (file) => {
        // Build context
        const contextsRegistry = new ContextsRegistry<TPluginOptions, TPluginContextDefintion>(projectContext, file, fileNameBuilder(file, projectContext), pluginOptions_)
        const context = contextBuilder_(contextsRegistry);

        // Capture usages
        const captureContext = projectContext.resolverV2.getCaptureContext()
        // TODO: fix as any
        const fileContext = await (context as any).build(captureContext)
        const usedThings = captureContext.stopCapture();

        // Render file template
        const resultFilePath = fileNameBuilder(file, projectContext);
        const imports = projectContext.resolverV2.getImports(usedThings, file, resultFilePath)
        const resultFileContent = templatesRegistry.render('main', { file: fileContext, imports });

        result.push({ path: resultFilePath, content: resultFileContent });
    }))

    return { files: result }
}
