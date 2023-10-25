import { Plugin, PluginOutputFile } from '../../Plugin';
import { PluginContext, buildPluginContext } from './context';
import { PluginTemplatesRegistry, buildTemplates, pluginTemplatesRegistry } from './templates';
import { fileNameBuilder, registerPluginTypes } from "./resolver";

export interface PluginOptions {}

export const plugin: Plugin<PluginContext, PluginOptions, PluginTemplatesRegistry> = (projectContext, projectOptions, pluginOptions, pluginTemplates, pluginContextBuilder) => {
    const result: PluginOutputFile[] = []

    const resultOptions = pluginOptions ?? {};
    const resultTempleateRegistry = pluginTemplates ?? pluginTemplatesRegistry
    const resultTemplates = buildTemplates(resultOptions, resultTempleateRegistry)

    const uncapture = projectContext.resolver.capture();
    registerPluginTypes(projectContext, projectOptions, resultOptions)
    const resolvedThings = uncapture();

    const pluginContext = pluginContextBuilder
        ? pluginContextBuilder(projectContext, projectOptions, resultOptions) 
        : buildPluginContext(projectContext, projectOptions, resultOptions)

    for (const file of pluginContext.files) {
        const imports = projectContext.resolver.getImports(resolvedThings, file.desc)
        const resultFileContent = resultTemplates.render('main', { file, imports });
        const resultFilePath = fileNameBuilder(file.desc, projectContext);
        result.push({ path: resultFilePath, content: resultFileContent });
    }

    return { files: result }
}
