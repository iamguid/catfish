import fs from 'node:fs';
import path from 'node:path';
import prettier from 'prettier';

import { ProjectContext } from './ProjectContext';
import { Plugin } from './Plugin';
import { TemplatesRegistry } from './Templates';

export interface ProjectOptions {
    protoDirPath: string
    outDirPath: string
}

export class Project {
    private context: ProjectContext;
    private plugins: [Plugin<any, any>, any, any][] = [];

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

        for (const [plugin, pluginOptions, templates] of this.plugins) {
            const result = plugin(this.context, this.options, pluginOptions, templates);

            for (const file of result.files) {
                const prettiedContent = prettier.format(file.content, { parser: 'typescript' })
                fs.writeFileSync(path.join(this.options.outDirPath, file.path), prettiedContent)
            }
        }
    }

    resgister<
        TPluginOptions extends Record<string, any>,
        TPluginTemplates extends TemplatesRegistry,
    >(
        plugin: Plugin<TPluginOptions, TPluginTemplates>,
        options?: TPluginOptions,
        templates?: TPluginTemplates,
    ) {
        this.plugins.push([plugin, options, templates]);
        return this;
    }
}