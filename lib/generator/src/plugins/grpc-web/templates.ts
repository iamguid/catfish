import { Import } from "../../ProjectContext";
import { TemplatesRegistry } from "../../Templates";
import { PluginContextFlatOut } from "./context";
import { PluginOptions } from "./plugin";

export type PluginTemplatesRegistry = {
  main: { file: PluginContextFlatOut['file'], imports: Import[] },
  services: { services: PluginContextFlatOut['file.service'][] },
  serviceDefinition: { service: PluginContextFlatOut['file.service'] },
  clientStubClass: { service: PluginContextFlatOut['file.service'] },
  clientStubClassMethod: { service: PluginContextFlatOut['file.service'], method: PluginContextFlatOut['file.service.method'] },
  methodStreamType: { method: PluginContextFlatOut['file.service.method'] },
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
      result += `// #region ${service.desc.fullpath}`
      result += t.render('serviceDefinition', { service })
      result += t.render('clientStubClass', { service })
      result += `// #endregion`
    }

    return result;
  })

  t.register('serviceDefinition', ({ service }) => `
    export const ${service.serviceDefinitionThing.name} = {
      ${service.methods.map(method => {
        return `${method.methodDesc.name}: new grpc.MethodDescriptor(
          "${method.path}",
          ${t.render('methodStreamType', { method })},
          ${method.request.requestTypeInfo.thing!.usagename},
          ${method.response.responseTypeInfo.thing!.usagename},
          (message: ${method.request.requestTypeInfo.thing!.usagename}) => message.serialize(),
          (bytes: Uint8Array) => new ${method.response.responseTypeInfo.thing!.usagename}().deserialize(bytes),
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
    ${method.methodName}(
      request: ${method.request.requestTypeInfo.thing!.usagename},
      metadata: grpc.Metadata | null,
    ): ${method.methodDesc.isServerStreaming ? `grpc.ClientReadableStream<${method.response.responseTypeInfo.thing!.usagename}>` : `Promise<${method.response.responseTypeInfo.thing!.usagename}>`} {
      return this.client.${method.methodDesc.isServerStreaming ? 'serverStreaming' : 'unaryCall'}(
        this.hostname + "${method.path}",
        request,
        metadata ?? {},
        ${service.serviceDefinitionThing!.fullname}.${method.methodName},
      );
    }
  `);

  t.register('methodStreamType', ({ method }) => {
    if (method.methodDesc.isServerStreaming) {
      return 'grpc.MethodType.SERVER_STREAMING'
    }

    return 'grpc.MethodType.UNARY'
  })
}