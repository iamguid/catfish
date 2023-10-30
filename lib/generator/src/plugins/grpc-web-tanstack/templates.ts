import { PluginOptions } from "./plugin";
import { Import } from "../../ProjectContext";
import { TemplatesRegistry } from "../../Templates";
import { PluginContextFlatOut } from "./context";

export type PluginTemplatesRegistry = {
  main: { file: PluginContextFlatOut['file'], imports: Import[] },
  extensions: { file: PluginContextFlatOut['file'] },
  extensionsTanStack: { service: PluginContextFlatOut['file.service'] },
  useMutatorIfaceMethod: { method: PluginContextFlatOut['file.service.method'] },
  useMutatorMethod: { service: PluginContextFlatOut['file.service'], method: PluginContextFlatOut['file.service.method'] },
  useQueryIfaceMethod: { method: PluginContextFlatOut['file.service.method'] },
  useQueryMethod: { service: PluginContextFlatOut['file.service'], method: PluginContextFlatOut['file.service.method'] },
}

export const registerPluginTemplates = (t: TemplatesRegistry<PluginTemplatesRegistry, PluginOptions>) => {
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
          ${method.responseTypeInfo.thing!.usagename},
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
          request: ${method.requestTypeInfo.thing!.usagename}
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
    if (method.type === 'query') {
      return `
        ${method.useQueryMethodName}(): rq.UseQueryOptions<
          () => Promise<${method.responseTypeInfo.thing!.usagename}>,
          grpc.RpcError,
          ${method.responseTypeInfo.thing!.usagename},
          ['${method.dataFieldJsonThing.usagename}', ${method.dataFieldJsonThing.usagename}]
        >
      `
    }

    throw new Error('Invalid method type')
  })

  t.register('useQueryMethod', ({ service, method }) => {
    if (method.type === 'query') {
      return `
        ${service.grpcClientThing.usagename}.prototype.${method.useQueryMethodName} = function (
          this: ${service.grpcClientThing.usagename},
          request: ${method.requestTypeInfo.thing!.usagename}
        ) {
          return {
            queryKey: ['${method.dataFieldJsonThing!.usagename}', request.toJSON()],
            queryFn: () => this.${method.methodDesc.name}(request),
          }
        }
      `
    }

    throw new Error('Invalid method type')
  })
}
