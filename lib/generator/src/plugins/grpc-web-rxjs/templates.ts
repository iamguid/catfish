import { Import } from "../../ProjectContext";
import { TemplatesRegistry } from "../../Templates";
import { FileContext, ServiceContext, ServiceMethodContext } from "./context";
import { PluginOptions } from "./plugin";

export type PluginTemplatesRegistry = {
  main: { file: FileContext, imports: Import[] },
  services: { services: ServiceContext[] },
  clientStubClass: { service: ServiceContext },
  clientStubClassUnaryMethod: { service: ServiceContext, method: ServiceMethodContext },
  clientStubClassServerStreamingMethod: { service: ServiceContext, method: ServiceMethodContext },
}

export const registerPluginTemplates = (t: TemplatesRegistry<PluginTemplatesRegistry, PluginOptions>) => {
  t.register('main', ({ file, imports }) => `
    ${t.renderHeader(file.desc)}

    ${t.renderImports(imports)}

    import * as runtime from "@catfish/runtime"
    import * as rxjs from 'rxjs';
    import * as grpc from 'grpc-web';

    ${t.render('services', { services: file.services })} 
  `);

  t.register('services', ({ services }) => {
    let result = '';

    for (const service of services) {
      result += `// #region ${service.serviceRawFullname}`
      result += t.render('clientStubClass', { service })
      result += `// #endregion`
    }

    return result;
  })

  t.register('clientStubClass', ({ service }) => `
    export class ${service.rxjsClientThing} extends ${service.grpcClientThing} {
      ${service.methods.map(method => method.serverStreaming 
        ? t.render('clientStubClassServerStreamingMethod', { method, service: service }) 
        : t.render('clientStubClassUnaryMethod', { method, service: service })).join('\n')}
    }
  `);

  t.register('clientStubClassUnaryMethod', ({ method }) => `
    ${method.name}(
      request: ${method.requestTypeInfo.thing!.fullImport},
      metadata: grpc.Metadata | null,
    ): rxjs.Observable<${method.responseTypeInfo.thing!.fullImport}> {
      return rxjs.defer(() => rxjs.from(super.${method.name}(request, metadata)));
    }
  `);

  t.register('clientStubClassServerStreamingMethod', ({ method }) => `
    ${method.name}(
      request: ${method.requestTypeInfo.thing!.fullImport},
      metadata: grpc.Metadata | null,
    ): rxjs.Observable<runtime.ClientReadableStreamEvent<${method.responseTypeInfo.thing!.fullImport}>> {
      return runtime.observableWrapClintReadableStream(super.${method.name}(request, metadata));
    }
  `)
}