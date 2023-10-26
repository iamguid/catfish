import { findOption } from "../../utils";
import { ExtensionsTemplate, GrpcBasedExtensionsTemplate, GrpcBasedPaginationExtensionTemplate, MainTemplate, RxjsBasedExtensionsTemplate, RxjsBasedPaginationExtensionTemplate } from "./templates";

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

  return paginatedMethods
    .map(method => render('rxjsBasedPaginationExtension', { service: ctx.service, method }))
    .join('\n')
}

export const rxjsBasedPaginationExtensionTemplate: RxjsBasedPaginationExtensionTemplate = (render, opts, ctx) => {
  return `
    export type ${ctx.method.request.requestParametersTypeName} = 
      Omit<${ctx.method.request.requestJsonIfaceThing}, '${ctx.method.request.pageSizeField.name}' | '${ctx.method.request.pageTokenField.name}'>

    declare module '${ctx.service.rxjsClientThing.importPath}' {
      export interface ${ctx.service.rxjsClientThing.name} {
        ${ctx.method.createRxjsPaginatorName}(
          itemsPerPage: number, 
          parameters$: Observable<${ctx.method.request.requestParametersTypeName}>,
          nextPage$: Observable<void>,
          reload$: Observable<void>,
        ): rxjs.Observable<runtime.rxjsPaginator.PaginatorData<${ctx.method.response.dataField.typeInfo.thing!.fullImport}>>;
      }
    }

    ${ctx.service.rxjsClientThing.fullImport}.prototype.${ctx.method.createRxjsPaginatorName} = function (
      this: ${ctx.service.rxjsClientThing.fullImport},
      itemsPerPage: number, 
      parameters$: Observable<${ctx.method.request.requestParametersTypeName}>,
      nextPage$: Observable<void>,
      reload$: Observable<void>,
    ) {
      const fetcher: runtime.rxjsPaginator.PageFetcher<${ctx.method.request.requestParametersTypeName}, ${ctx.method.responseTypeInfo.thing!.fullImport}> = (itemsPerPage, pageToken, parameters) => {
        return this.${ctx.method.name}(new ${ctx.method.request.requestTypeInfo.thing!.fullImport}().fromJSON({
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

export const grpcBasedExtensionsTemplate: GrpcBasedExtensionsTemplate = (render, opts, ctx) => {
  const paginatedMethods = ctx.service.methods
    .filter(method => typeof findOption(method.options, 'catfish.mtd_paginated') !== 'undefined')

  return paginatedMethods
    .map(method => render('grpcBasedPaginationExtension', { service: ctx.service, method }))
    .join('\n')
}

export const grpcBasedPaginationExtensionTemplate: GrpcBasedPaginationExtensionTemplate = (render, opts, ctx) => `
  declare module '${ctx.service.grpcClientThing.importPath}' {
    export interface ${ctx.service.grpcClientThing.name} {
      ${ctx.method.createAsyncPaginatorName}(itemsPerPage: number):
        runtime.asyncPaginator.Paginator<
          ${ctx.method.response.dataField.typeInfo.thing!.fullImport},
          ${ctx.method.request.requestParametersTypeName},
          ${ctx.method.response.name},
        >;
    }
  }

  ${ctx.service.grpcClientThing.fullImport}.prototype.${ctx.method.createAsyncPaginatorName} = function (
    this: ${ctx.service.grpcClientThing.fullImport},
    itemsPerPage: number,
  ) {
    const fetcher: runtime.asyncPaginator.PageFetcher<${ctx.method.request.requestParametersTypeName}, ${ctx.method.responseTypeInfo.thing!.fullImport}> = (itemsPerPage, pageToken, parameters) => {
      return this.${ctx.method.name}(new ${ctx.method.request.requestTypeInfo.thing!.fullImport}().fromJSON({
        ...parameters,
        ${ctx.method.request.pageSizeField.name}: itemsPerPage,
        ${ctx.method.request.pageTokenField.name}: pageToken,
      }))
    }

    return runtime.asyncPaginator.createPaginator(
      itemsPerPage,
      fetcher,
      (resp) => resp.${ctx.method.response.nextPageTokenField.name},
      (resp) => resp.${ctx.method.response.dataField.name},
    );
  }
`
