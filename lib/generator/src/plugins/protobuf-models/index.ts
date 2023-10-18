import { Plugin, PluginOutputFile } from '../../Plugin';
import { replaceProtoSuffix } from '../../utils';
import { templates } from './templates';
import { CtxFile } from './reflection';

const plugin: Plugin<void> = (context, projectOptions) => {
    const result: PluginOutputFile[] = []

    for (const file of context.getFiles()) {
        const pluginContext = new CtxFile(context, file);
        const resultFileContent = templates.render('models', pluginContext);
        const resultFilePath = replaceProtoSuffix(context.getFilePathByDescriptor(file), 'models.ts');
        result.push({ path: resultFilePath, content: resultFileContent });
    }

    return { files: result }
}

export default plugin;

