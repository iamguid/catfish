import { findOption } from "../../utils";
import { ExtensionsTemplate, GrpcBasedExtensionsTemplate, MainTemplate, RxjsBasedExtensionsTemplate, RxjsBasedPaginationExtensionTemplate } from "./templates";

export const mainTemplate: MainTemplate = (render, opts, ctx) => `
  ${render('header', {
    packageName: ctx.file.package,
    fileName: ctx.file.filePath,
  })}

  ${render('imports', {
    imports: ctx.imports,
  })}

  import * as rxjs from "rxjs"
  import * as runtime from "@catfish/runtime"

  ${render('extensions', { file: ctx.file })}
`;

export const extensionsTemplate: ExtensionsTemplate = (render, opts, ctx) => {
  let result = '';
  result += `// #region gRPC Based Extensions`
  result += ctx.file.services.map(s => render('grpcBasedExtensions', { service: s })).join('\n');
  result += `// #endregion\n\n`
  result += `// #region gRPC rxjs Based Extensions`
  result += ctx.file.services.map(s => render('rxjsBasedExtensions', { service: s })).join('\n');
  result += `// #endregion\n`
  return result;
}

export const rxjsBasedExtensionsTemplate: RxjsBasedExtensionsTemplate = (render, opts, ctx) => {
  const paginatedMethods = ctx.service.methods
    .filter(method => typeof findOption(method.options, 'catfish.mtd_paginated') !== 'undefined')

  return `
    ${
      paginatedMethods
        .map(method => render('rxjsBasedPaginationExtension', { service: ctx.service, method }))
        .join('\n')
    }
  `
}

export const rxjsBasedPaginationExtensionTemplate: RxjsBasedPaginationExtensionTemplate = (render, opts, ctx) => {
  return `
    export type ${ctx.method.request.requestParametersTypeName} = 
      Omit<${ctx.method.request.requestJsonType}, '${ctx.method.request.pageSizeField.name}' | '${ctx.method.request.pageTokenField.name}'>

    declare module '${ctx.service.rxjsClientImportPath}' {
      export interface ${ctx.service.rxjsClientName} {
        ${ctx.method.createPaginatorName}(
          itemsPerPage: number, 
          parameters$: Observable<${ctx.method.request.requestParametersTypeName}>,
          nextPage$: Observable<void>,
          reload$: Observable<void>,
        ): rxjs.Observable<runtime.rxjsPaginator.PaginatorData<${ctx.method.response.dataField.typeInfo.fullType}>>;
      }
    }

    ${ctx.service.rxjsClientFullName}.prototype.${ctx.method.createPaginatorName} = function (
      this: ${ctx.service.rxjsClientFullName},
      itemsPerPage: number, 
      parameters$: Observable<${ctx.method.request.requestParametersTypeName}>,
      nextPage$: Observable<void>,
      reload$: Observable<void>,
    ): Observable {
      const fetcher = (itemsPerPage, pageToken, parameters) => {
        return this.${ctx.method.name}(new ${ctx.method.request.requestTypeInfo.fullType}().fromJSON({
          ...parameters,
          ${ctx.method.request.pageSizeField.name}: itemsPerPage,
          ${ctx.method.request.pageTokenField.name}: pageToken,
        }))
      }

      return runtime.rxjsPaginator.createPaginator(
        itemsPerPage,
        fetcher,
        (resp) => resp.${ctx.method.response.nextPageTokenField.name},
        (resp) => resp.${ctx.method.response.dataField.name},
        parameters$,
        nextPage$,
        reload$,
      );
    }
  `
}

export const grpcBasedExtensionsTemplate: GrpcBasedExtensionsTemplate = (render, opts, ctx) => `
  declare module '${ctx.service.grpcClientImportPath}' {
    export interface ${ctx.service.grpcClientName} {
      helloworld(): string;
    }
  }
`
