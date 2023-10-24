import path from "node:path";
import { FileDescriptor } from '@catfish/parser';
import { Plugin, PluginOutputFile } from '../../Plugin';
import { ResolversGroup, ThingResolver } from '../../Resolver';
import { replaceProtoSuffix, snakeToCamel } from '../../utils';
import { PluginContext, buildPluginContext } from './context';
import { PluginTemplatesRegistry, buildTemplates, pluginTemplatesRegistry } from './templates';

export interface PluginOptions {}

export const plugin: Plugin<PluginContext, PluginOptions, PluginTemplatesRegistry> = (projectContext, projectOptions, pluginOptions, pluginTemplates, pluginContextBuilder) => {
    const result: PluginOutputFile[] = []

    // Register resolvers
    const fileNameBuilder = (file: FileDescriptor) => replaceProtoSuffix(path.basename(projectContext.getProtoFilePath(file)), 'models.ts');
    projectContext.resolver.addResolver(new ResolversGroup('model', [
        new ThingResolver("json-iface", projectContext, (thing) => `${thing.name}JSON`, fileNameBuilder),
        new ThingResolver("class", projectContext, (thing) => thing.name, fileNameBuilder),
        new ThingResolver("oneof-json-type", projectContext, (thing) => `${thing.name}OneofJSONType`, fileNameBuilder),
        new ThingResolver("oneof-type", projectContext, (thing) => `${thing.name}OneofType`, fileNameBuilder),
    ]));

    const resultOptions = pluginOptions ?? {};
    const resultTempleateRegistry = pluginTemplates ?? pluginTemplatesRegistry
    const resultTemplates = buildTemplates(resultOptions, resultTempleateRegistry)
    const pluginContext = pluginContextBuilder
        ? pluginContextBuilder(projectContext, projectOptions, resultOptions) 
        : buildPluginContext(projectContext, projectOptions, resultOptions)

    for (const file of pluginContext.files) {
        const resultFileContent = resultTemplates.render('main', { file });
        const resultFilePath = replaceProtoSuffix(file.filePath, 'models.ts');
        result.push({ path: resultFilePath, content: resultFileContent });
    }

    return { files: result }
}
