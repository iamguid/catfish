import { TemplateFn, TemplatesRenderer } from "../../Templates";
import { headerTemplate } from "../../templates/header.template";
import { importsTemplate } from "../../templates/imports.template";
import { FileContext } from "./context";
import { PluginOptions } from "./plugin";
import { mainTemplate } from "./template";

export type PluginTamplateFn<TCtx> = TemplateFn<PluginTemplatesRegistry, PluginOptions, TCtx>
export type MainTemplate = PluginTamplateFn<{ file: FileContext }>

export type PluginTemplatesRegistry = {
  main: MainTemplate,
  header: typeof headerTemplate,
  imports: typeof importsTemplate,
}

export const pluginTemplatesRegistry: PluginTemplatesRegistry = {
  main: mainTemplate,
  header: headerTemplate,
  imports: importsTemplate,
}

export const buildTemplates = <TTemplatesRegistry extends PluginTemplatesRegistry>(opts: PluginOptions, registry: TTemplatesRegistry) => {
  return new TemplatesRenderer(opts, registry)
}
