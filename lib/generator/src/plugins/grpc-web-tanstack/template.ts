import { isUseMutationMethod, isUseQueryMethod } from "./context";
import { ExtensionsTanStackTemplate, ExtensionsTemplate, MainTemplate, UseMutatorIfaceMethodTemplate, UseMutatorMethodTemplate, UseQueryIfaceMethodTemplate, UseQueryMethodTemplate } from "./templates";

export const mainTemplate: MainTemplate = (render, opts, ctx) => `
  ${render('header', {
    packageName: ctx.file.package,
    fileName: ctx.file.filePath,
  })}

  ${render('imports', {
    imports: ctx.imports,
  })}

  import * as grpc from 'grpc-web';
  import * as rq from '@tanstack/react-query';

  ${render('extensions', { file: ctx.file })} 
`;

export const extensionsTemplate: ExtensionsTemplate = (render, opts, ctx) => {
  let result = '';
  result += `// #region TanStack extensions`
  result += ctx.file.services.map(s => render('extensionsTanStack', { service: s })).join('\n');
  result += `// #endregion\n\n`
  return result;
}

export const extensionsTanStackTemplate: ExtensionsTanStackTemplate = (render, opts, ctx) => `
  declare module '${ctx.service.grpcClientImportPath}' {
    export interface ${ctx.service.grpcClientName} {
      ${ctx.service.methods.map(method => {
        if (isUseMutationMethod(method)) {
          return render('useMutatorIfaceMethod', { method })
        }

        if (isUseQueryMethod(method)) {
          return render('useQueryIfaceMethod', { method })
        }
      }).join('')}
    }
  }

  ${ctx.service.methods.map(method => {
    if (isUseMutationMethod(method)) {
      return render('useMutatorMethod', { service: ctx.service, method })
    }

    if (isUseQueryMethod(method)) {
      return render('useQueryMethod', { service: ctx.service, method })
    }
  }).join('\n')}
`

export const useMutatorIfaceMethodTemplate: UseMutatorIfaceMethodTemplate = (render, opts, ctx) => `
  ${ctx.method.useMutationMethodName}(): rq.UseMutationOptions<
    ${ctx.method.responseTypeInfo.thing!.fullImport},
    grpc.RpcError,
  >
`

export const useMutatorMethodTemplate: UseMutatorMethodTemplate = (render, opts, ctx) => `
  ${ctx.service.grpcClientFullName}.prototype.${ctx.method.useMutationMethodName} = function (
    this: ${ctx.service.grpcClientFullName},
    request: ${ctx.method.requestTypeInfo.thing!.fullImport}
  ) {
    return {
      mutatorFn: () => this.${ctx.method.name}(request),
    }
  }
`

export const useQueryIfaceMethodTemplate: UseQueryIfaceMethodTemplate = (render, opts, ctx) => `
  ${ctx.method.useQueryMethodName}(): rq.UseQueryOptions<
    () => Promise<${ctx.method.responseTypeInfo.thing!.fullImport}>,
    grpc.RpcError,
    ${ctx.method.responseTypeInfo.thing!.fullImport},
    ['${ctx.method.responseTypeInfo.dataFieldTypeInfo.thing!.fullImport}', ${ctx.method.responseTypeInfo.dataFieldJsonIfaceThing.fullImport}]
  >
`

export const useQueryMethodTemplate: UseQueryMethodTemplate = (render, opts, ctx) => `
  ${ctx.service.grpcClientFullName}.prototype.${ctx.method.useQueryMethodName} = function (
    this: ${ctx.service.grpcClientFullName},
    request: ${ctx.method.requestTypeInfo.thing!.fullImport}
  ) {
    return {
      queryKey: ['${ctx.method.responseTypeInfo.dataFieldTypeInfo.thing!.fullImport}', request.toJSON()],
      queryFn: () => this.${ctx.method.name}(request),
    }
  }
`