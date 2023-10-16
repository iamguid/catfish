import fs from 'node:fs';
import path from 'node:path';
import prettier from 'prettier';

import { Context } from './Context';
import { Plugin } from './Plugin';

export interface ProjectOptions {
    protoDirPath: string
    outDirPath: string
}


export class Project {
    private context: Context;
    private plugins: [Plugin<any>, any][] = [];

    constructor(private readonly options: ProjectOptions) {
        this.context = new Context(options)
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

        for (const [plugin, options] of this.plugins) {
            const result = plugin(this.context, this.options, options);

            for (const file of result.files) {
                const prettiedContent = prettier.format(file.content, { parser: 'typescript' })
                fs.writeFileSync(path.join(this.options.outDirPath, file.path), prettiedContent)
            }
        }
    }

    resgister<TOptions>(plugin: Plugin<TOptions>, options?: TOptions) {
        this.plugins.push([plugin, options]);
        return this;
    }
}