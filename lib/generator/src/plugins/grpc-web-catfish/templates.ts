import { Import } from "../../ProjectContext";
import { TemplateFn, TemplatesRenderer } from "../../Templates";
import { headerTemplate } from "../../templates/header.template";
import { importsTemplate } from "../../templates/imports.template";
import { FileContext, ServiceContext, ServiceMethodContext } from "./context";
import { PluginOptions } from "./plugin";
import { extensionsTemplate, grpcBasedExtensionsTemplate, grpcBasedPaginationExtensionTemplate, mainTemplate, rxjsBasedExtensionsTemplate, rxjsBasedPaginationExtensionTemplate } from "./template";

export type PluginTamplateFn<TCtx> = TemplateFn<PluginTemplatesRegistry, PluginOptions, TCtx>
export type MainTemplate = PluginTamplateFn<{ file: FileContext, imports: Import[] }>
export type ExtensionsTemplate = PluginTamplateFn<{ file: FileContext }>
export type RxjsBasedExtensionsTemplate = PluginTamplateFn<{ service: ServiceContext }>
export type RxjsBasedPaginationExtensionTemplate = PluginTamplateFn<{ service: ServiceContext, method: ServiceMethodContext }>
export type GrpcBasedExtensionsTemplate = PluginTamplateFn<{ service: ServiceContext }>
export type GrpcBasedPaginationExtensionTemplate = PluginTamplateFn<{ service: ServiceContext, method: ServiceMethodContext }>

export type PluginTemplatesRegistry = {
  main: MainTemplate,
  header: typeof headerTemplate,
  imports: typeof importsTemplate,
  extensions: ExtensionsTemplate,
  rxjsBasedExtensions: RxjsBasedExtensionsTemplate,
  rxjsBasedPaginationExtension: RxjsBasedPaginationExtensionTemplate,
  grpcBasedExtensions: GrpcBasedExtensionsTemplate,
  grpcBasedPaginationExtension: GrpcBasedPaginationExtensionTemplate,
}

export const pluginTemplatesRegistry: PluginTemplatesRegistry = {
  main: mainTemplate,
  header: headerTemplate,
  imports: importsTemplate,
  extensions: extensionsTemplate,
  rxjsBasedExtensions: rxjsBasedExtensionsTemplate,
  rxjsBasedPaginationExtension: rxjsBasedPaginationExtensionTemplate,
  grpcBasedExtensions: grpcBasedExtensionsTemplate,
  grpcBasedPaginationExtension: grpcBasedPaginationExtensionTemplate
}

export const buildTemplates = <TTemplatesRegistry extends PluginTemplatesRegistry>(opts: PluginOptions, registry: TTemplatesRegistry) => {
  return new TemplatesRenderer(opts, registry)
}
