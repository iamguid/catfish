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

    async generate() {
        fs.mkdirSync(this.options.outDirPath, { recursive: true })

        for (const [plugin, pluginOptions, templates] of this.plugins) {
            const result = await plugin(this.context, this.options, pluginOptions, templates);

            for (const file of result.files) {
                const prettiedContent = prettier.format(file.content, { parser: 'typescript' })
                fs.writeFileSync(path.join(this.options.outDirPath, file.path), prettiedContent)
            }
        }
    }

    resgister<
        TPluginOptions extends Record<string, any>,
        TPluginTemplatesType extends Record<string, any>,
        TExtendedPluginTemplatesType extends TPluginTemplatesType,
    >(
        plugin: Plugin<TPluginOptions, TPluginTemplatesType | TExtendedPluginTemplatesType>,
        options?: TPluginOptions,
        templates?: (t: TemplatesRegistry<TExtendedPluginTemplatesType, TPluginOptions>) => void,
    ) {
        this.plugins.push([plugin, options, templates]);
        return this;
    }
}