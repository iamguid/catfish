import { FileDescriptor } from '@catfish/parser';
import { Plugin, PluginOutputFile } from '../../Plugin';
import { ContextsRegistry } from '../../PluginContext';
import { TemplatesRegistry } from '../../Templates';
import { buildPluginContext } from './context';
import { PluginTemplatesRegistry, registerPluginTemplates } from './templates';
import { ProjectContext } from '../../ProjectContext';
import { replaceProtoSuffix } from '../../utils';

export const fileNameBuilder = (file: FileDescriptor, ctx: ProjectContext) => replaceProtoSuffix(ctx.getProtoFilePath(file), 'grpc_rxjs.ts');

export interface PluginOptions {}

export const plugin: Plugin<PluginOptions, PluginTemplatesRegistry> = async (projectContext, projectOptions, pluginOptions, registerTemplates) => {
    const result: PluginOutputFile[] = []

    const pluginOptions_ = pluginOptions ?? {};
    const registerTemplates_ = registerTemplates ?? registerPluginTemplates

    // Templates
    const templatesRegistry = new TemplatesRegistry<PluginTemplatesRegistry, PluginOptions>(projectContext, pluginOptions_)
    registerTemplates_(templatesRegistry)

    const files = projectContext.getFiles();

    await Promise.all(files.map(async (file) => {
        // Build context
        const contextsRegistry = new ContextsRegistry(projectContext, file, fileNameBuilder(file, projectContext), pluginOptions_)
        const context = buildPluginContext(contextsRegistry);

        // Capture usages
        const captureContext = projectContext.resolverV2.getCaptureContext()
        const fileContext = await context.build(captureContext)
        const usedThings = captureContext.stopCapture();

        // Render file template
        const resultFilePath = fileNameBuilder(file, projectContext);
        const imports = projectContext.resolverV2.getImports(usedThings, file, resultFilePath)
        const resultFileContent = templatesRegistry.render('main', { file: fileContext, imports });

        result.push({ path: resultFilePath, content: resultFileContent });
    }))

    return { files: result }
}
