import { PluginOptions } from "./plugin";
import { Import } from "../../ProjectContext";
import { TemplatesRegistry } from "../../Templates";
import { PluginContextFlatDefinition } from "./context";

export type PluginTemplatesRegistry = {
  main: { file: PluginContextFlatDefinition['file'], imports: Import[] },
  extensions: { file: PluginContextFlatDefinition['file'] },
  extensionsTanStack: { service: PluginContextFlatDefinition['file.service'] },
  useMutatorIfaceMethod: { method: PluginContextFlatDefinition['file.service.method'] },
  useMutatorMethod: { service: PluginContextFlatDefinition['file.service'], method: PluginContextFlatDefinition['file.service.method'] },
  useQueryIfaceMethod: { method: PluginContextFlatDefinition['file.service.method'] },
  useQueryMethod: { service: PluginContextFlatDefinition['file.service'], method: PluginContextFlatDefinition['file.service.method'] },
}

export const registerPluginTemplates = (t: TemplatesRegistry<PluginOptions, PluginTemplatesRegistry>) => {
  t.register('main', ({ file, imports }) => `
    ${t.renderHeader(file.desc)}

    ${t.renderImports(imports)}

    import * as grpc from 'grpc-web';
    import * as rq from '@tanstack/react-query';

    ${t.render('extensions', { file })} 
  `);

  t.register('extensions', ({ file }) => {
    let result = '';
    result += `// #region TanStack extensions`
    result += file.services.map(s => t.render('extensionsTanStack', { service: s })).join('\n');
    result += `// #endregion\n\n`
    return result;
  })

  t.register('extensionsTanStack', ({ service }) => `
    declare module '${service.grpcClientThing.importpath}' {
      export interface ${service.grpcClientThing.name} {
        ${service.methods.map(method => {
          if (method.type === 'mutation') {
            return t.render('useMutatorIfaceMethod', { method })
          }

          if (method.type === 'query') {
            return t.render('useQueryIfaceMethod', { method })
          }
        }).join('')}
      }
    }

    ${service.methods.map(method => {
      if (method.type === 'mutation') {
        return t.render('useMutatorMethod', { service, method })
      }

      if (method.type === 'query') {
        return t.render('useQueryMethod', { service, method })
      }
    }).join('\n')}
  `)

  t.register('useMutatorIfaceMethod', ({ method }) => {
    if (method.type === 'mutation') {
      return `
        ${method.useMutationMethodName}(): rq.UseMutationOptions<
          ${method.response.responseTypeInfo.thing!.usagename},
          grpc.RpcError,
        >
      `
    }

    throw new Error('Invalid method type')
  })

  t.register('useMutatorMethod', ({ service, method }) => {
    if (method.type === 'mutation') {
      return `
        ${service.grpcClientThing.usagename}.prototype.${method.useMutationMethodName} = function (
          this: ${service.grpcClientThing.usagename},
          request: ${method.request.requestTypeInfo.thing!.usagename}
        ) {
          return {
            mutatorFn: () => this.${method.methodDesc.name}(request),
          }
        }
      `
    }

    throw new Error('Invalid method type')
  })

  t.register('useQueryIfaceMethod', ({ method }) => {
    if (method.type !== 'query') {
      throw new Error('Invalid method type')
    }

    return `
      ${method.useQueryMethodName}(): rq.UseQueryOptions<
        () => Promise<${method.response.responseTypeInfo.thing!.usagename}>,
        grpc.RpcError,
        ${method.response.responseTypeInfo.thing!.usagename},
        ['${method.response.dataFieldJsonThing.usagename}', ${method.response.dataFieldJsonThing.usagename}]
      >
    `
  })

  t.register('useQueryMethod', ({ service, method }) => {
    if (method.type !== 'query') {
      throw new Error('Invalid method type')
    }

    return `
      ${service.grpcClientThing.usagename}.prototype.${method.useQueryMethodName} = function (
        this: ${service.grpcClientThing.usagename},
        request: ${method.request.requestTypeInfo.thing!.usagename}
      ) {
        return {
          queryKey: ['${method.response.dataFieldJsonThing!.usagename}', request.toJSON()],
          queryFn: () => this.${method.methodDesc.name}(request),
        }
      }
    `
  })
}
