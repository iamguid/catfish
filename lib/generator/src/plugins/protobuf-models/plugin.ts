import { Plugin, PluginOutputFile } from '../../Plugin';
import { buildFileContext } from './context';
import { PluginTemplatesRegistry, buildTemplates, pluginTemplatesRegistry } from './templates';
import { fileNameBuilder, registerFileTypes } from "./resolver";

export interface PluginOptions {}

export const plugin: Plugin<PluginOptions, PluginTemplatesRegistry> = (projectContext, projectOptions, pluginOptions, pluginTemplates) => {
    const result: PluginOutputFile[] = []

    const resultOptions = pluginOptions ?? {};
    const resultTempleateRegistry = pluginTemplates ?? pluginTemplatesRegistry
    const resultTemplates = buildTemplates(resultOptions, resultTempleateRegistry)

    const files = projectContext.getFiles();

    // Register files types
    for (const file of files) {
        registerFileTypes(projectContext, file, projectOptions, resultOptions)
    }

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
