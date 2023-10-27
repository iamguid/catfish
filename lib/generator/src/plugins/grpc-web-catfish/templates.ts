import { Import } from "../../ProjectContext";
import { TemplatesRegistry } from "../../Templates";
import { findOption } from "../../utils";
import { FileContext, ServiceContext, ServiceMethodContext } from "./context";
import { PluginOptions } from "./plugin";

export type PluginTemplatesRegistry = {
  main: { file: FileContext, imports: Import[] },
  extensions: { file: FileContext },
  rxjsBasedExtensions: { service: ServiceContext },
  rxjsBasedPaginationExtension: { service: ServiceContext, method: ServiceMethodContext },
  grpcBasedExtensions: { service: ServiceContext },
  grpcBasedPaginationExtension: { service: ServiceContext, method: ServiceMethodContext },
}

export const registerPluginTemplates = (t: TemplatesRegistry<PluginTemplatesRegistry, PluginOptions>) => {
  t.register('main', ({ file, imports }) => `
    ${t.renderHeader(file.desc)}

    ${t.renderImports(imports)}

    import * as rxjs from "rxjs"
    import * as runtime from "@catfish/runtime"

    ${t.render('extensions', { file: file })}
  `);

  t.register('extensions', ({ file }) => {
    let result = '';
    result += `// #region gRPC Based Extensions`
    result += file.services.map(s => t.render('grpcBasedExtensions', { service: s })).join('\n');
    result += `// #endregion\n\n`
    result += `// #region gRPC rxjs Based Extensions`
    result += file.services.map(s => t.render('rxjsBasedExtensions', { service: s })).join('\n');
    result += `// #endregion\n`
    return result;
  })

  t.register('rxjsBasedExtensions', ({ service }) => {
    const paginatedMethods = service.methods
      .filter(method => typeof findOption(method.options, 'catfish.mtd_paginated') !== 'undefined')

    return paginatedMethods
      .map(method => t.render('rxjsBasedPaginationExtension', { service: service, method }))
      .join('\n')
  })

  t.register('rxjsBasedPaginationExtension', ({ service, method }) => {
    return `
      export type ${method.request.requestParametersTypeName} = 
        Omit<${method.request.requestJsonIfaceThing}, '${method.request.pageSizeField.name}' | '${method.request.pageTokenField.name}'>

      declare module '${service.rxjsClientThing.importPath}' {
        export interface ${service.rxjsClientThing.name} {
          ${method.createRxjsPaginatorName}(
            itemsPerPage: number, 
            parameters$: Observable<${method.request.requestParametersTypeName}>,
            nextPage$: Observable<void>,
            reload$: Observable<void>,
          ): rxjs.Observable<runtime.rxjsPaginator.PaginatorData<${method.response.dataField.typeInfo.thing!.fullImport}>>;
        }
      }

      ${service.rxjsClientThing.fullImport}.prototype.${method.createRxjsPaginatorName} = function (
        this: ${service.rxjsClientThing.fullImport},
        itemsPerPage: number, 
        parameters$: Observable<${method.request.requestParametersTypeName}>,
        nextPage$: Observable<void>,
        reload$: Observable<void>,
      ) {
        const fetcher: runtime.rxjsPaginator.PageFetcher<${method.request.requestParametersTypeName}, ${method.responseTypeInfo.thing!.fullImport}> = (itemsPerPage, pageToken, parameters) => {
          return this.${method.name}(new ${method.request.requestTypeInfo.thing!.fullImport}().fromJSON({
            ...parameters,
            ${method.request.pageSizeField.name}: itemsPerPage,
            ${method.request.pageTokenField.name}: pageToken,
          }))
        }

        return runtime.rxjsPaginator.createPaginator(
          itemsPerPage,
          fetcher,
          (resp) => resp.${method.response.nextPageTokenField.name},
          (resp) => resp.${method.response.dataField.name},
          parameters$,
          nextPage$,
          reload$,
        );
      }
    `
  })

  t.register('grpcBasedExtensions', ({ service}) => {
    const paginatedMethods = service.methods
      .filter(method => typeof findOption(method.options, 'catfish.mtd_paginated') !== 'undefined')

    return paginatedMethods
      .map(method => t.render('grpcBasedPaginationExtension', { service: service, method }))
      .join('\n')
  })

  t.register('grpcBasedPaginationExtension', ({ service, method }) => `
    declare module '${service.grpcClientThing.importPath}' {
      export interface ${service.grpcClientThing.name} {
        ${method.createAsyncPaginatorName}(itemsPerPage: number):
          runtime.asyncPaginator.Paginator<
            ${method.response.dataField.typeInfo.thing!.fullImport},
            ${method.request.requestParametersTypeName},
            ${method.response.name},
          >;
      }
    }

    ${service.grpcClientThing.fullImport}.prototype.${method.createAsyncPaginatorName} = function (
      this: ${service.grpcClientThing.fullImport},
      itemsPerPage: number,
    ) {
      const fetcher: runtime.asyncPaginator.PageFetcher<${method.request.requestParametersTypeName}, ${method.responseTypeInfo.thing!.fullImport}> = (itemsPerPage, pageToken, parameters) => {
        return this.${method.name}(new ${method.request.requestTypeInfo.thing!.fullImport}().fromJSON({
          ...parameters,
          ${method.request.pageSizeField.name}: itemsPerPage,
          ${method.request.pageTokenField.name}: pageToken,
        }))
      }

      return runtime.asyncPaginator.createPaginator(
        itemsPerPage,
        fetcher,
        (resp) => resp.${method.response.nextPageTokenField.name},
        (resp) => resp.${method.response.dataField.name},
      );
    }
  `)
}