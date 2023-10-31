import { ProjectContext } from "./ProjectContext"
import { ProjectOptions } from "./Project"
import { BaseTemplates, TemplatesRegistry } from "./Templates"
import { BaseContextDefinition, ContextsRegistry } from "./PluginContext"

export interface BasePluginOptions {}

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
    TPluginOptions extends BasePluginOptions,
    TPluginTemplatesType extends BaseTemplates,
    TPluginContextDefinition extends BaseContextDefinition,
    TTemplatesBuilder = (tr: TemplatesRegistry<TPluginOptions, TPluginTemplatesType>) => void,
    TPluginContextBuilder = (cr: ContextsRegistry<TPluginOptions, BaseContextDefinition>) => ContextsRegistry<TPluginOptions, TPluginContextDefinition>
> = (
    projectContext: ProjectContext,
    projectOptions: ProjectOptions,
    pluginOptions?: TPluginOptions,
    registerPluginTemplates?: TTemplatesBuilder,
    buildPluginContext?: TPluginContextBuilder,
) => Promise<PluginOutput>;
