import fs from 'node:fs';
import path from 'node:path';
import prettier from 'prettier';

import { ProjectContext } from './ProjectContext';
import { BasePluginOptions, Plugin } from './Plugin';
import { BaseTemplates, TemplatesRegistry } from './Templates';
import { BaseContextDefinition, ContextsRegistry } from './PluginContext';

export interface ProjectOptions {
    protoDirPath: string
    outDirPath: string
}

export class Project {
    private context: ProjectContext;
    private plugins: [Plugin<any, any, any>, any, any, any][] = [];

    constructor(private readonly options: ProjectOptions) {
        this.context = new ProjectContext(options)
    }

    // TODO: make async
    load() {
        this.context.load();
        this.context.resolve();
        return this;
    }

    async generate() {
        fs.mkdirSync(this.options.outDirPath, { recursive: true })

        for (const [plugin, pluginOptions, templatesBuilder, constextBuilder] of this.plugins) {
            const result = await plugin(this.context, this.options, pluginOptions, templatesBuilder, constextBuilder);

            for (const file of result.files) {
                const prettiedContent = prettier.format(file.content, { parser: 'typescript' })
                fs.writeFileSync(path.join(this.options.outDirPath, file.path), prettiedContent)
            }
        }
    }

    resgister<
        TPluginOptions extends BasePluginOptions,
        TExtendedPluginTemplatesType extends BaseTemplates,
        TExtendedPluginContextRegistryType extends BaseContextDefinition,
    >(
        plugin: Plugin<any, any, any>,
        options?: TPluginOptions,
        templatesBuilder?: (t: TemplatesRegistry<TPluginOptions, TExtendedPluginTemplatesType>) => void,
        constextBuilder?: (c: ContextsRegistry<TPluginOptions, BaseContextDefinition>) => ContextsRegistry<TPluginOptions, TExtendedPluginContextRegistryType>
    ) {
        this.plugins.push([plugin, options, templatesBuilder, constextBuilder]);
        return this;
    }
}