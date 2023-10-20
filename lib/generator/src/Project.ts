import fs from 'node:fs';
import path from 'node:path';
import prettier from 'prettier';

import { ProjectContext } from './ProjectContext';
import { Plugin, PluginContextBuilder } from './Plugin';
import { Templates } from './Templates';

export interface ProjectOptions {
    protoDirPath: string
    outDirPath: string
}

export class Project {
    private context: ProjectContext;
    private plugins: [Plugin<any, any, any>, any, any][] = [];

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

        for (const [plugin, pluginContextBuilder, pluginOptions] of this.plugins) {
            const result = plugin(this.context, this.options, pluginOptions, pluginContextBuilder);

            for (const file of result.files) {
                const prettiedContent = prettier.format(file.content, { parser: 'typescript' })
                fs.writeFileSync(path.join(this.options.outDirPath, file.path), prettiedContent)
            }
        }
    }

    resgister<
        TContext,
        TTemplates extends Templates<TOptions, TTemplatesType>,
        TOptions extends Record<string, any>,
        TTemplatesType extends Record<string, (args: any[]) => string>
    >(
        plugin: Plugin<TContext, TOptions, TTemplates>,
        contextBuilder?: PluginContextBuilder<TContext, TOptions>,
        options?: TOptions,
    ) {
        this.plugins.push([plugin, contextBuilder, options]);
        return this;
    }
}