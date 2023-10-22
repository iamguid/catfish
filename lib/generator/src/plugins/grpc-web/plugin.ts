import { Plugin, PluginOutputFile } from '../../Plugin';
import { replaceProtoSuffix } from '../../utils';
import { PluginContext, buildPluginContext } from './context';
import { PluginTemplatesRegistry, buildTemplates, pluginTemplatesRegistry } from './templates';

export interface PluginOptions {}

export const plugin: Plugin<PluginContext, PluginOptions, PluginTemplatesRegistry> = (projectContext, projectOptions, pluginOptions, pluginTemplates, pluginContextBuilder) => {
    const result: PluginOutputFile[] = []

    const resultOptions = pluginOptions ?? {};
    const resultTempleateRegistry = pluginTemplates ?? pluginTemplatesRegistry
    const resultTemplates = buildTemplates(resultOptions, resultTempleateRegistry)
    const pluginContext = pluginContextBuilder
        ? pluginContextBuilder(projectContext, projectOptions, resultOptions) 
        : buildPluginContext(projectContext, projectOptions, resultOptions)

    for (const file of pluginContext.files) {
        const resultFileContent = resultTemplates.render('main', { file });
        const resultFilePath = replaceProtoSuffix(file.filePath, 'grpc.ts');
        result.push({ path: resultFilePath, content: resultFileContent });
    }

    return { files: result }
}
