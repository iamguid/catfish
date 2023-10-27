import { FileDescriptor } from '@catfish/parser';
import { Plugin, PluginOutputFile } from '../../Plugin';
import { ProjectContext } from '../../ProjectContext';
import { replaceProtoSuffix } from '../../utils';
import { buildFileContext } from './context';
import { PluginTemplatesRegistry, registerPluginTemplates } from './templates';
import { TemplatesRegistry } from '../../Templates';

export const fileNameBuilder = (file: FileDescriptor, ctx: ProjectContext) => replaceProtoSuffix(ctx.getProtoFilePath(file), 'catfish.ts');

export interface PluginOptions {}

export const plugin: Plugin<PluginOptions, PluginTemplatesRegistry> = (projectContext, projectOptions, pluginOptions, registerTemplates) => {
    const result: PluginOutputFile[] = []

    pluginOptions = pluginOptions ?? {};
    registerTemplates = registerTemplates ?? registerPluginTemplates

    // Templates
    const templatesRegistry = new TemplatesRegistry<PluginTemplatesRegistry, PluginOptions>(projectContext, pluginOptions)
    registerTemplates(templatesRegistry)

    const files = projectContext.getFiles();

    for (const file of files) {
        // Capture usages
        const stopCapture = projectContext.resolver.capture()
        const fileContext = buildFileContext(projectContext, file, projectOptions, pluginOptions)
        const usedThings = stopCapture();

        // Render file template
        const resultFilePath = fileNameBuilder(file, projectContext);
        const imports = projectContext.resolver.getImports(usedThings, file, resultFilePath)
        const resultFileContent = templatesRegistry.render('main', { file: fileContext, imports });

        result.push({ path: resultFilePath, content: resultFileContent });
    }

    return { files: result }
}
