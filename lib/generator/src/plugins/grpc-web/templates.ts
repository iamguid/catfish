import { Import } from "../../ProjectContext";
import { TemplatesRegistry } from "../../Templates";
import { FileContext, ServiceContext, ServiceMethodContext } from "./context";
import { PluginOptions } from "./plugin";

export type PluginTemplatesRegistry = {
  main: { file: FileContext, imports: Import[] },
  services: { services: ServiceContext[] },
  serviceDefinition: { service: ServiceContext },
  clientStubClass: { service: ServiceContext },
  clientStubClassMethod: { service: ServiceContext, method: ServiceMethodContext },
  methodStreamType: { method: ServiceMethodContext },
}

export const registerPluginTemplates = (t: TemplatesRegistry<PluginTemplatesRegistry, PluginOptions>) => {
  t.register('main', ({ file, imports }) => `
    ${t.renderHeader(file.desc)}

    ${t.renderImports(imports)}

    import * as runtime from "@catfish/runtime"
    import * as grpc from 'grpc-web';

    ${t.render('services', { services: file.services })} 
  `)

  t.register('services', ({ services }) => {
    let result = '';

    for (const service of services) {
      result += `// #region ${service.serviceRawFullname}`
      result += t.render('serviceDefinition', { service })
      result += t.render('clientStubClass', { service })
      result += `// #endregion`
    }

    return result;
  })

  t.register('serviceDefinition', ({ service }) => `
    export const ${service.serviceDefinitionThing.name} = {
      ${service.methods.map(method => {
        return `${method.name}: new grpc.MethodDescriptor(
          "${method.path}",
          ${t.render('methodStreamType', { method })},
          ${method.requestTypeInfo.thing!.fullImport},
          ${method.responseTypeInfo.thing!.fullImport},
          (message: ${method.requestTypeInfo.thing!.fullImport}) => message.serialize(),
          (bytes: Uint8Array) => new ${method.responseTypeInfo.thing!.fullImport}().deserialize(bytes),
        ),`
      }).join('\n')}
    } as const
  `);

  t.register('clientStubClass', ({ service }) => `
    export class ${service.clientClassThing.name} {
      private readonly client: grpc.AbstractClientBase;
      private readonly hostname: string;
      private readonly credentials?: null | { [index: string]: string; };
      private readonly options?: null | grpc.GrpcWebClientBaseOptions | { [index: string]: any; };

      constructor(
        hostname: string,
        credentials?: null | { [index: string]: string; },
        options?: null | grpc.GrpcWebClientBaseOptions | { [index: string]: any; },
        client: (new (options?: null | grpc.GrpcWebClientBaseOptions | { [index: string]: any; }) => grpc.AbstractClientBase) = grpc.GrpcWebClientBase,
      ) {
        this.hostname = hostname.replace(/\\/+$/, '');
        this.credentials = credentials ?? {};
        this.options = options ?? {};
        this.options['format'] = 'text';
        this.client = new client(this.options);
      }

      ${service.methods.map(method => t.render('clientStubClassMethod', { method, service: service })).join('\n')}
    }
  `);

  t.register('clientStubClassMethod', ({ service, method }) => `
    ${method.name}(
      request: ${method.requestTypeInfo.thing!.fullImport},
      metadata: grpc.Metadata | null,
    ): ${method.serverStreaming ? `grpc.ClientReadableStream<${method.responseTypeInfo.thing!.fullImport}>` : `Promise<${method.responseTypeInfo.thing!.fullImport}>`} {
      return this.client.${method.serverStreaming ? 'serverStreaming' : 'unaryCall'}(
        this.hostname + "${method.path}",
        request,
        metadata ?? {},
        ${service.serviceDefinitionThing.fullImport}.${method.name},
      );
    }
  `);

  t.register('methodStreamType', ({ method }) => {
    if (method.serverStreaming) {
      return 'grpc.MethodType.SERVER_STREAMING'
    }

    return 'grpc.MethodType.UNARY'
  })
}