import { ClientStubClassTemplate, ClientStubClassMethodTemplate, MainTemplate, MethodStreamTypeTemplate, ServiceDefinitionTemplate, ServicesTemplate } from "./templates";

export const mainTemplate: MainTemplate = (render, opts, ctx) => `
  ${render('header', {
    packageName: ctx.file.package,
    fileName: ctx.file.filePath,
  })}

  ${render('imports', {
    imports: ctx.imports,
  })}

  import * as runtime from "@catfish/runtime"
  import * as grpc from 'grpc-web';

  ${render('services', { services: ctx.file.services })} 
`;

export const servicesTemplate: ServicesTemplate = (render, opts, ctx) => {
  let result = '';

  for (const service of ctx.services) {
    result += `// #region ${service.serviceRawFullname}`

    result += render('serviceDefinition', { service })
    result += render('clientStubClass', { service })

    result += `// #endregion`
  }

  return result;
}

export const serviceDefinitionTemplate: ServiceDefinitionTemplate = (render, opts, ctx) => `
  export const ${ctx.service.serviceDefinitionName} = {
    ${ctx.service.methods.map(method => {
      return `${method.name}: new grpc.MethodDescriptor(
        "${method.path}",
        ${render('methodStreamType', { method })},
        ${method.requestTypeInfo.fullType},
        ${method.responseTypeInfo.fullType},
        (message: ${method.requestTypeInfo.fullType}) => message.serialize(),
        (bytes: Uint8Array) => new ${method.responseTypeInfo.fullType}().deserialize(bytes),
      ),`
    }).join('\n')}
  } as const
`;

export const clientStubClassTemplate: ClientStubClassTemplate = (render, opts, ctx) => `
  export class ${ctx.service.clientClassName} {
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

    ${ctx.service.methods.map(method => render('clientStubClassMethod', { method, service: ctx.service })).join('\n')}
  }
`;

export const clientStubClassMethodTemplate: ClientStubClassMethodTemplate = (render, opts, ctx) => `
  ${ctx.method.name}(
    request: ${ctx.method.requestTypeInfo.fullType},
    metadata: grpc.Metadata | null,
  ): ${ctx.method.serverStreaming ? `grpc.ClientReadableStream<${ctx.method.responseTypeInfo.fullType}>` : `Promise<${ctx.method.responseTypeInfo.fullType}>`} {
    return this.client.${ctx.method.serverStreaming ? 'serverStreaming' : 'unaryCall'}(
      this.hostname + "${ctx.method.path}",
      request,
      metadata ?? {},
      ${ctx.service.serviceDefinitionName}.${ctx.method.name},
    );
  }
`;

export const methodStreamTypeTemplate: MethodStreamTypeTemplate = (render, opts, ctx) => {
  if (ctx.method.serverStreaming) {
    return 'grpc.MethodType.SERVER_STREAMING'
  }

  return 'grpc.MethodType.UNARY'
}