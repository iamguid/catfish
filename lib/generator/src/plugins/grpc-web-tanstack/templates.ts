import { PluginOptions } from "./plugin";
import { Import } from "../../ProjectContext";
import { TemplatesRegistry } from "../../Templates";
import { FileContext, ServiceContext, UseMutationMethodContext, UseQueryMethodContext, isUseMutationMethod, isUseQueryMethod } from "./context";

export type PluginTemplatesRegistry = {
  main: { file: FileContext, imports: Import[] },
  extensions: { file: FileContext },
  extensionsTanStack: { service: ServiceContext },
  useMutatorIfaceMethod: { method: UseMutationMethodContext },
  useMutatorMethod: { service: ServiceContext, method: UseMutationMethodContext },
  useQueryIfaceMethod: { method: UseQueryMethodContext },
  useQueryMethod: { service: ServiceContext, method: UseQueryMethodContext },
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
    declare module '${service.grpcClientImportPath}' {
      export interface ${service.grpcClientName} {
        ${service.methods.map(method => {
          if (isUseMutationMethod(method)) {
            return t.render('useMutatorIfaceMethod', { method })
          }

          if (isUseQueryMethod(method)) {
            return t.render('useQueryIfaceMethod', { method })
          }
        }).join('')}
      }
    }

    ${service.methods.map(method => {
      if (isUseMutationMethod(method)) {
        return t.render('useMutatorMethod', { service, method })
      }

      if (isUseQueryMethod(method)) {
        return t.render('useQueryMethod', { service, method })
      }
    }).join('\n')}
  `)

  t.register('useMutatorIfaceMethod', ({ method }) => `
    ${method.useMutationMethodName}(): rq.UseMutationOptions<
      ${method.responseTypeInfo.thing!.fullImport},
      grpc.RpcError,
    >
  `)

  t.register('useMutatorMethod', ({ service, method }) => `
    ${service.grpcClientFullName}.prototype.${method.useMutationMethodName} = function (
      this: ${service.grpcClientFullName},
      request: ${method.requestTypeInfo.thing!.fullImport}
    ) {
      return {
        mutatorFn: () => this.${method.name}(request),
      }
    }
  `)

  t.register('useQueryIfaceMethod', ({ method }) => `
    ${method.useQueryMethodName}(): rq.UseQueryOptions<
      () => Promise<${method.responseTypeInfo.thing!.fullImport}>,
      grpc.RpcError,
      ${method.responseTypeInfo.thing!.fullImport},
      ['${method.responseTypeInfo.dataFieldTypeInfo.thing!.fullImport}', ${method.responseTypeInfo.dataFieldJsonIfaceThing.fullImport}]
    >
  `)

  t.register('useQueryMethod', ({ service, method }) => `
    ${service.grpcClientFullName}.prototype.${method.useQueryMethodName} = function (
      this: ${service.grpcClientFullName},
      request: ${method.requestTypeInfo.thing!.fullImport}
    ) {
      return {
        queryKey: ['${method.responseTypeInfo.dataFieldTypeInfo.thing!.fullImport}', request.toJSON()],
        queryFn: () => this.${method.name}(request),
      }
    }
  `)
}

