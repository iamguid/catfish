import { ProjectContext } from "./ProjectContext"
import { ProjectOptions } from "./Project"
import { TemplatesRegistry } from "./Templates"

export type PluginContextBuilder<TPluginContext> = (
    projectContext: ProjectContext,
    projectOptions: ProjectOptions,
) => TPluginContext

export interface PluginOutputFile {
    path: string
    content: string
}

export interface PluginOutput {
    files: PluginOutputFile[]
}

export type Plugin<
    TPluginOptions extends Record<string, any>,
    TPluginTemplatesType extends Record<string, any>,
    TRegisterTemplates = (t: TemplatesRegistry<TPluginTemplatesType, TPluginOptions>) => void
> = (
    projectContext: ProjectContext,
    projectOptions: ProjectOptions,
    pluginOptions?: TPluginOptions,
    registerPluginTemplates?: TRegisterTemplates,
) => PluginOutput;
