import { ProjectContext } from "./ProjectContext"
import { ProjectOptions } from "./Project"
import { Templates } from "./Templates"

export type PluginContextBuilder<TPluginContext, TPluginOptions> = (
    projectContext: ProjectContext,
    projectOptions: ProjectOptions,
    pluginOptions: TPluginOptions,
) => TPluginContext

export interface PluginOutputFile {
    path: string
    content: string
}

export interface PluginOutput {
    files: PluginOutputFile[]
}

export type Plugin<TPluginContext, TPluginOptions, TTemplates extends Templates<Record<string, (args: any[]) => string>>> = (
    projectContext: ProjectContext,
    projectOptions: ProjectOptions,
    pluginContextBuilder?: PluginContextBuilder<TPluginContext, TPluginOptions>,
    pluginTemplates?: TTemplates,
    pluginOptions?: TPluginOptions,
) => PluginOutput;
