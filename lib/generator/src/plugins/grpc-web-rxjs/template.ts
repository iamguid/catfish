import { ClientStubClassServerStreamingMethodTemplate, ClientStubClassTemplate, ClientStubClassUnaryMethodTemplate, MainTemplate, ServicesTemplate } from "./templates";

export const mainTemplate: MainTemplate = (render, opts, ctx) => `
  ${render('header', {
    packageName: ctx.file.package,
    fileName: ctx.file.filePath,
  })}

  ${render('imports', {
    imports: ctx.imports,
  })}

  import * as runtime from "@catfish/runtime"
  import * as rxjs from 'rxjs';
  import * as grpc from 'grpc-web';

  ${render('services', { services: ctx.file.services })} 
`;

export const servicesTemplate: ServicesTemplate = (render, opts, ctx) => {
  let result = '';

  for (const service of ctx.services) {
    result += `// #region ${service.serviceRawFullname}`

    result += render('clientStubClass', { service })

    result += `// #endregion`
  }

  return result;
}

export const clientStubClassTemplate: ClientStubClassTemplate = (render, opts, ctx) => `
  export class ${ctx.service.rxjsClientThing} extends ${ctx.service.grpcClientThing} {
    ${ctx.service.methods.map(method => method.serverStreaming 
      ? render('clientStubClassServerStreamingMethod', { method, service: ctx.service }) 
      : render('clientStubClassUnaryMethod', { method, service: ctx.service })).join('\n')}
  }
`;

export const clientStubClassUnaryMethodTemplate: ClientStubClassUnaryMethodTemplate = (render, opts, ctx) => `
  ${ctx.method.name}(
    request: ${ctx.method.requestTypeInfo.thing!.fullImport},
    metadata: grpc.Metadata | null,
  ): rxjs.Observable<${ctx.method.responseTypeInfo.thing!.fullImport}> {
    return rxjs.defer(() => rxjs.from(super.${ctx.method.name}(request, metadata)));
  }
`;

export const clientStubClassServerStreamingMethodTemplate: ClientStubClassServerStreamingMethodTemplate = (render, opts, ctx) => `
  ${ctx.method.name}(
    request: ${ctx.method.requestTypeInfo.thing!.fullImport},
    metadata: grpc.Metadata | null,
  ): rxjs.Observable<runtime.ClientReadableStreamEvent<${ctx.method.responseTypeInfo.thing!.fullImport}>> {
    return runtime.observableWrapClintReadableStream(super.${ctx.method.name}(request, metadata));
  }
`;