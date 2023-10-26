import { Import } from "../../ProjectContext";
import { TemplateFn, TemplatesRenderer } from "../../Templates";
import { headerTemplate } from "../../templates/header.template";
import { importsTemplate } from "../../templates/imports.template";
import { FileContext, ServiceContext, UseMutationMethodContext, UseQueryMethodContext } from "./context";
import { PluginOptions } from "./plugin";
import { extensionsTanStackTemplate, extensionsTemplate, mainTemplate, useMutatorIfaceMethodTemplate, useMutatorMethodTemplate, useQueryIfaceMethodTemplate, useQueryMethodTemplate } from "./template";

export type PluginTamplateFn<TCtx> = TemplateFn<PluginTemplatesRegistry, PluginOptions, TCtx>
export type MainTemplate = PluginTamplateFn<{ file: FileContext, imports: Import[] }>
export type ExtensionsTemplate = PluginTamplateFn<{ file: FileContext }>
export type ExtensionsTanStackTemplate = PluginTamplateFn<{ service: ServiceContext }>
export type UseMutatorIfaceMethodTemplate = PluginTamplateFn<{ method: UseMutationMethodContext }>
export type UseMutatorMethodTemplate = PluginTamplateFn<{ service: ServiceContext, method: UseMutationMethodContext }>
export type UseQueryIfaceMethodTemplate = PluginTamplateFn<{ method: UseQueryMethodContext }>
export type UseQueryMethodTemplate = PluginTamplateFn<{ service: ServiceContext, method: UseQueryMethodContext }>

export type PluginTemplatesRegistry = {
  header: typeof headerTemplate,
  imports: typeof importsTemplate,
  main: MainTemplate,
  extensions: ExtensionsTemplate,
  extensionsTanStack: ExtensionsTanStackTemplate,
  useMutatorIfaceMethod: UseMutatorIfaceMethodTemplate,
  useMutatorMethod: UseMutatorMethodTemplate,
  useQueryIfaceMethod: UseQueryIfaceMethodTemplate,
  useQueryMethod: UseQueryMethodTemplate,
}

export const pluginTemplatesRegistry: PluginTemplatesRegistry = {
  header: headerTemplate,
  imports: importsTemplate,
  main: mainTemplate,
  extensions: extensionsTemplate,
  extensionsTanStack: extensionsTanStackTemplate,
  useMutatorIfaceMethod: useMutatorIfaceMethodTemplate,
  useMutatorMethod: useMutatorMethodTemplate,
  useQueryIfaceMethod: useQueryIfaceMethodTemplate,
  useQueryMethod: useQueryMethodTemplate,
}

export const buildTemplates = <TTemplatesRegistry extends PluginTemplatesRegistry>(opts: PluginOptions, registry: TTemplatesRegistry) => {
  return new TemplatesRenderer(opts, registry)
}
