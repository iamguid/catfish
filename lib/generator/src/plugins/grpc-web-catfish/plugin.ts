import { FileDescriptor } from '@catfish/parser';
import { BasePluginOptions, Plugin, PluginOutputFile } from '../../Plugin';
import { ProjectContext } from '../../ProjectContext';
import { replaceProtoSuffix } from '../../utils';
import { PluginTemplatesRegistry, registerPluginTemplates } from './templates';
import { TemplatesRegistry } from '../../Templates';
import { ContextsRegistry } from '../../PluginContext';
import { PluginContextDefinition, buildPluginContext } from './context';

export const fileNameBuilder = (file: FileDescriptor, ctx: ProjectContext) => replaceProtoSuffix(ctx.getProtoFilePath(file), 'catfish.ts');

export interface PluginOptions extends BasePluginOptions {}

export const plugin: Plugin<PluginOptions, PluginTemplatesRegistry, PluginContextDefinition> = async (projectContext, projectOptions, pluginOptions, registerTemplates, buildContext) => {
    const result: PluginOutputFile[] = []

    const pluginOptions_ = pluginOptions ?? ({} as PluginOptions);
    const registerTemplates_ = registerTemplates ?? registerPluginTemplates
    const buildContext_ = buildContext ?? buildPluginContext

    // Templates
    const templatesRegistry = new TemplatesRegistry<PluginOptions, PluginTemplatesRegistry>(projectContext, pluginOptions_)
    registerTemplates_(templatesRegistry)

    const files = projectContext.getFiles();

    await Promise.all(files.map(async (file) => {
        // Build context
        const contextsRegistry = new ContextsRegistry(projectContext, file, fileNameBuilder(file, projectContext), pluginOptions_)
        const context = buildContext_(contextsRegistry);

        // Capture usages
        const captureContext = projectContext.resolver.getCaptureContext()
        const fileContext = await context.build(captureContext)
        const usedThings = captureContext.stopCapture();

        // Render file template
        const resultFilePath = fileNameBuilder(file, projectContext);
        const imports = projectContext.resolver.getImports(usedThings, file, resultFilePath)
        const resultFileContent = templatesRegistry.render('main', { file: fileContext, imports });

        result.push({ path: resultFilePath, content: resultFileContent });
    }))

    return { files: result }
}
