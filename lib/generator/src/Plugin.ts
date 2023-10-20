import { ProjectContext } from "./ProjectContext"
import { ProjectOptions } from "./Project"
import { TemplatesRegistry } from "./Templates"

export type PluginContextBuilder<TPluginContext, TPluginOptions extends Record<string, any>> = (
    projectContext: ProjectContext,
    projectOptions: ProjectOptions,
    pluginOptions?: TPluginOptions,
) => TPluginContext

export interface PluginOutputFile {
    path: string
    content: string
}

export interface PluginOutput {
    files: PluginOutputFile[]
}

export type Plugin<TPluginContext, TPluginOptions extends Record<string, any>, TTemplatesRegistry extends TemplatesRegistry> = (
    projectContext: ProjectContext,
    projectOptions: ProjectOptions,
    pluginOptions?: TPluginOptions,
    pluginTemplates?: TTemplatesRegistry,
    pluginContextBuilder?: PluginContextBuilder<TPluginContext, TPluginOptions>,
) => PluginOutput;
