import { Import } from "../../ProjectContext";
import { TemplatesRegistry } from "../../Templates";
import { PluginContextFlatDefinition } from "./context";
import { PluginOptions } from "./plugin";

export type PluginTemplatesRegistry = {
  main: { file: PluginContextFlatDefinition['file'], imports: Import[] },
  services: { services: PluginContextFlatDefinition['file.service'][] },
  clientStubClass: { service: PluginContextFlatDefinition['file.service'] },
  clientStubClassUnaryMethod: { service: PluginContextFlatDefinition['file.service'], method: PluginContextFlatDefinition['file.service.method'] },
  clientStubClassServerStreamingMethod: { service: PluginContextFlatDefinition['file.service'], method: PluginContextFlatDefinition['file.service.method'] },
}

export const registerPluginTemplates = (t: TemplatesRegistry<PluginOptions, PluginTemplatesRegistry>) => {
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
      result += `// #region ${service.desc.fullpath}`
      result += t.render('clientStubClass', { service })
      result += `// #endregion`
    }

    return result;
  })

  t.register('clientStubClass', ({ service }) => `
    export class ${service.rxjsClientThing.name} extends ${service.grpcClientThing.usagename} {
      ${service.methods.map(method => method.methodDesc.isServerStreaming 
        ? t.render('clientStubClassServerStreamingMethod', { method, service: service }) 
        : t.render('clientStubClassUnaryMethod', { method, service: service })).join('\n')}
    }
  `);

  t.register('clientStubClassUnaryMethod', ({ method }) => `
    ${method.methodDesc.name}(
      request: ${method.request.requestTypeInfo.thing!.usagename},
      metadata: grpc.Metadata | null,
    ): rxjs.Observable<${method.response.responseTypeInfo.thing!.usagename}> {
      return rxjs.defer(() => rxjs.from(super.${method.methodDesc.name}(request, metadata)));
    }
  `);

  t.register('clientStubClassServerStreamingMethod', ({ method }) => `
    ${method.methodDesc.name}(
      request: ${method.request.requestTypeInfo.thing!.usagename},
      metadata: grpc.Metadata | null,
    ): rxjs.Observable<runtime.ClientReadableStreamEvent<${method.response.responseTypeInfo.thing!.usagename}>> {
      return runtime.observableWrapClintReadableStream(super.${method.methodDesc.name}(request, metadata));
    }
  `)
}