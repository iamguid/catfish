import { TemplateFn, TemplatesRenderer } from "../../Templates";
import { headerTemplate } from "../../templates/header.template";
import { importsTemplate } from "../../templates/imports.template";
import { FileContext, ServiceContext, ServiceMethodContext } from "./context";
import { PluginOptions } from "./plugin";
import { clientStubClassTemplate, clientStubClassMethodTemplate, mainTemplate, methodStreamTypeTemplate, serviceDefinitionTemplate, servicesTemplate } from "./template";

export type PluginTamplateFn<TCtx> = TemplateFn<PluginTemplatesRegistry, PluginOptions, TCtx>
export type MainTemplate = PluginTamplateFn<{ file: FileContext }>
export type ServicesTemplate = PluginTamplateFn<{ services: ServiceContext[] }>
export type ServiceDefinitionTemplate = PluginTamplateFn<{ service: ServiceContext }>
export type ClientStubClassTemplate = PluginTamplateFn<{ service: ServiceContext }>
export type ClientStubClassMethodTemplate = PluginTamplateFn<{ service: ServiceContext, method: ServiceMethodContext }>
export type MethodStreamTypeTemplate = PluginTamplateFn<{ method: ServiceMethodContext }>

export type PluginTemplatesRegistry = {
  header: typeof headerTemplate,
  imports: typeof importsTemplate,
  main: MainTemplate,
  services: ServicesTemplate,
  serviceDefinition: ServiceDefinitionTemplate,
  clientStubClass: ClientStubClassTemplate,
  clientStubClassMethod: ClientStubClassMethodTemplate,
  methodStreamType: MethodStreamTypeTemplate,
}

export const pluginTemplatesRegistry: PluginTemplatesRegistry = {
  header: headerTemplate,
  imports: importsTemplate,
  main: mainTemplate,
  services: servicesTemplate,
  serviceDefinition: serviceDefinitionTemplate,
  clientStubClass: clientStubClassTemplate,
  clientStubClassMethod: clientStubClassMethodTemplate,
  methodStreamType: methodStreamTypeTemplate,
}

export const buildTemplates = <TTemplatesRegistry extends PluginTemplatesRegistry>(opts: PluginOptions, registry: TTemplatesRegistry) => {
  return new TemplatesRenderer(opts, registry)
}
