import { FileDescriptor } from '@catfish/parser';
import { Plugin, PluginOutputFile } from '../../Plugin';
import { ProjectContext } from '../../ProjectContext';
import { replaceProtoSuffix } from '../../utils';
import { buildFileContext } from './context';
import { PluginTemplatesRegistry, buildTemplates, pluginTemplatesRegistry } from './templates';

export const fileNameBuilder = (file: FileDescriptor, ctx: ProjectContext) => replaceProtoSuffix(ctx.getProtoFilePath(file), 'catfish.ts');

export interface PluginOptions {}

export const plugin: Plugin<PluginOptions, PluginTemplatesRegistry> = (projectContext, projectOptions, pluginOptions, pluginTemplates) => {
    const result: PluginOutputFile[] = []

    const resultOptions = pluginOptions ?? {};
    const resultTempleateRegistry = pluginTemplates ?? pluginTemplatesRegistry
    const resultTemplates = buildTemplates(resultOptions, resultTempleateRegistry)

    const files = projectContext.getFiles();

    for (const file of files) {
        // Capture usages
        const stopCapture = projectContext.resolver.capture()
        const fileContext = buildFileContext(projectContext, file, projectOptions, resultOptions)
        const usedThings = stopCapture();

        // Render file template
        const resultFilePath = fileNameBuilder(file, projectContext);
        const imports = projectContext.resolver.getImports(usedThings, file, resultFilePath)
        const resultFileContent = resultTemplates.render('main', { file: fileContext, imports });

        result.push({ path: resultFilePath, content: resultFileContent });
    }

    return { files: result }
}
