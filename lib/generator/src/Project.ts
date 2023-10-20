import fs from 'node:fs';
import path from 'node:path';
import prettier from 'prettier';

import { ProjectContext } from './ProjectContext';
import { Plugin, PluginContextBuilder } from './Plugin';
import { TemplatesRegistry, TemplatesRenderer } from './Templates';

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

    // TODO: make async
    generate() {
        fs.mkdirSync(this.options.outDirPath, { recursive: true })

        for (const [plugin, pluginOptions, templates, pluginContextBuilder] of this.plugins) {
            const result = plugin(this.context, this.options, pluginOptions, templates, pluginContextBuilder);

            for (const file of result.files) {
                const prettiedContent = prettier.format(file.content, { parser: 'typescript' })
                fs.writeFileSync(path.join(this.options.outDirPath, file.path), prettiedContent)
            }
        }
    }

    resgister<
        TPluginContext,
        TPluginOptions extends Record<string, any>,
        TPluginTemplates extends TemplatesRegistry,
    >(
        plugin: Plugin<TPluginContext, TPluginOptions, TPluginTemplates>,
        options?: TPluginOptions,
        templates?: TPluginTemplates,
        contextBuilder?: PluginContextBuilder<TPluginContext, TPluginOptions>,
    ) {
        this.plugins.push([plugin, options, templates, contextBuilder]);
        return this;
    }
}