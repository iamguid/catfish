import { Context } from "./Context"
import { ProjectOptions } from "./Project"

export interface PluginOutputFile {
    path: string
    content: string
}

export interface PluginOutput {
    files: PluginOutputFile[]
}

export type Plugin<TOptions> = (
    context: Context,
    projectOptions: ProjectOptions,
    pluginOptions: TOptions
) => PluginOutput;
