import { Plugin, PluginOutputFile } from '../../Plugin';
import { replaceProtoSuffix } from '../../utils';
import { PluginContext, buildPluginContext } from './context';
import { templates } from './templates';

export interface PluginOptions {}

export const plugin: Plugin<PluginContext, PluginOptions> = (projectContext, projectOptions, pluginContextBuilder, pluginTemplates, pluginOptions) => {
    const result: PluginOutputFile[] = []

    const resultTemplates = pluginTemplates ?? templates;
    const pluginContext = pluginContextBuilder
        ? pluginContextBuilder(projectContext, projectOptions, pluginOptions) 
        : buildPluginContext(projectContext, projectOptions, pluginOptions);

    for (const file of pluginContext.files) {
        const resultFileContent = resultTemplates.render('main', file);
        const resultFilePath = replaceProtoSuffix(file.filePath, 'models.ts');
        result.push({ path: resultFilePath, content: resultFileContent });
    }

    return { files: result }
}
