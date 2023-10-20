import { Plugin, PluginOutputFile } from '../../Plugin';
import { replaceProtoSuffix } from '../../utils';
import { CtxFile } from './context';
import { templates } from './templates';

const plugin: Plugin<CtxFile, void, typeof templates> = (projectContext, projectOptions, pluginContextBuilder, pluginTemplates, pluginOptions) => {
    const result: PluginOutputFile[] = []

    const pluginContext = pluginContextBuilder ? pluginContextBuilder(projectContext, projectOptions, pluginOptions) : null;

    for (const file of projectContext.getFiles()) {
        const resultFileContent = pluginTemplates.render('main', pluginContext);
        const resultFilePath = replaceProtoSuffix(projectContext.getFilePathByDescriptor(file), 'models.ts');
        result.push({ path: resultFilePath, content: resultFileContent });
    }

    return { files: result }
}

export default plugin;

