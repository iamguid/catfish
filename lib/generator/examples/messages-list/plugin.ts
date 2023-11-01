import { FileDescriptor } from '@catfish/parser';
import { PluginContextDefinition, PluginContextFlatDefinition, buildPluginContext } from './context';
import { PluginTemplatesRegistry, registerPluginTemplates } from './templates';
import { BasePluginOptions, ProjectContext, Plugin, PluginOutputFile, TemplatesRegistry } from '../../src';
import { replaceProtoSuffix } from '../../src/utils';
import { ContextsRegistry } from '../../src/PluginContext';

// File name builder function that we will use for output file path
export const fileNameBuilder = (file: FileDescriptor, ctx: ProjectContext) => replaceProtoSuffix(ctx.getProtoFilePath(file), 'list.ts');

// Plugin options
export interface PluginOptions extends BasePluginOptions {}

export const plugin: Plugin<PluginOptions, PluginTemplatesRegistry, PluginContextDefinition> = async (projectContext, projectOptions, pluginOptions, registerTemplates, buildContext) => {
    // Define result variable with result files array
    const result: PluginOutputFile[] = []

    // Define defaults
    const pluginOptions_ = pluginOptions ?? ({} as PluginOptions );
    const registerTemplates_ = registerTemplates ?? registerPluginTemplates
    const buildContext_ = buildContext ?? buildPluginContext

    // Register templates in templates registry
    const templatesRegistry = new TemplatesRegistry<PluginOptions, PluginTemplatesRegistry>(projectContext, pluginOptions_)
    registerTemplates_(templatesRegistry)

    // Get all files descriptors from project context
    const files = projectContext.getFiles();

    // We use await because context build is async operation, it is needed for type resolution
    await Promise.all(files.map(async (file) => {
        // Create context registry and build context
        const contextsRegistry = new ContextsRegistry(projectContext, file, fileNameBuilder(file, projectContext), pluginOptions_)
        const context = buildContext_(contextsRegistry);

        // Capture usages for generate imports, that we will put in top of the file,
        // all usages in context will be captured per file
        const captureContext = projectContext.resolver.getCaptureContext()
        const fileContext = await context.build(captureContext)
        const usedThings = captureContext.stopCapture();

        // Render file template
        const resultFilePath = fileNameBuilder(file, projectContext);
        const imports = projectContext.resolver.getImports(usedThings, file, resultFilePath)
        const messages = extractAllMessages(fileContext);
        const resultFileContent = templatesRegistry.render('main', { file: fileContext, imports, messages });

        // Store result file to output files
        result.push({ path: resultFilePath, content: resultFileContent });
    }))

    // Return result
    return { files: result }
}

// Flatten messages
const extractAllMessages = (file: PluginContextFlatDefinition['file']) => {
    const result: PluginContextDefinition['messages'][] = []

    const extractMessage = (message: PluginContextFlatDefinition['file.message']) => {
        result.push(message)

        for (const msg of message.messages) {
            extractMessage(msg)
        }
    }

    for (const message of file.messages) {
        extractMessage(message)
    }

    return result
}
