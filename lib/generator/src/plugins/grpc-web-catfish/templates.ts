import { Import } from "../../ProjectContext";
import { TemplatesBuilder, TemplatesRegistry } from "../../Templates";
import { findOption } from "../../utils";
import { PluginContextFlatDefinition } from "./context";
import { PluginOptions } from "./plugin";

export type PluginTemplatesRegistry = {
  main: { file: PluginContextFlatDefinition['file'], imports: Import[] },
  extensions: { file: PluginContextFlatDefinition['file'] },
  rxjsBasedExtensions: { service: PluginContextFlatDefinition['file.service'] },
  rxjsBasedPaginationExtension: { service: PluginContextFlatDefinition['file.service'], method: PluginContextFlatDefinition['file.service.method'] },
  grpcBasedExtensions: { service: PluginContextFlatDefinition['file.service'] },
  grpcBasedPaginationExtension: { service: PluginContextFlatDefinition['file.service'], method: PluginContextFlatDefinition['file.service.method'] },
}

export const registerPluginTemplates: TemplatesBuilder<PluginOptions, PluginTemplatesRegistry> = (t) => {
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
      .filter(method => typeof findOption(method.methodDesc.options, 'catfish.mtd_paginated') !== 'undefined')

    return paginatedMethods
      .map(method => t.render('rxjsBasedPaginationExtension', { service: service, method }))
      .join('\n')
  })

  t.register('rxjsBasedPaginationExtension', ({ service, method }) => {
    if (method.type !== 'paginated' || method.request.type !== 'paginated' || method.response.type !== 'paginated') {
      throw new Error('Method is not valid')
    }

    return `
      export type ${method.request.parametersTypeName} = 
        Omit<${method.request.messageJSONTypeThing.usagename}, '${method.request.pageSizeFieldName}' | '${method.request.pageTokenFieldName}'>

      declare module '${service.rxjsClientThing.importpath}' {
        export interface ${service.rxjsClientThing.name} {
          ${method.createRxjsPaginatorName}(
            itemsPerPage: number, 
            parameters$: Observable<${method.request.parametersTypeName}>,
            nextPage$: Observable<void>,
            reload$: Observable<void>,
          ): rxjs.Observable<runtime.rxjsPaginator.PaginatorData<${method.response.dataFieldTypeThing.usagename}>>;
        }
      }

      ${service.rxjsClientThing.usagename}.prototype.${method.createRxjsPaginatorName} = function (
        this: ${service.rxjsClientThing.usagename},
        itemsPerPage: number, 
        parameters$: Observable<${method.request.parametersTypeName}>,
        nextPage$: Observable<void>,
        reload$: Observable<void>,
      ) {
        const fetcher: runtime.rxjsPaginator.PageFetcher<${method.request.parametersTypeName}, ${method.response.dataFieldTypeThing.usagename}> = (itemsPerPage, pageToken, parameters) => {
          return this.${method.methodDesc.name}(new ${method.request.messageTypeThing.usagename}().fromJSON({
            ...parameters,
            ${method.request.pageSizeFieldName}: itemsPerPage,
            ${method.request.pageTokenFieldName}: pageToken,
          }))
        }

        return runtime.rxjsPaginator.createPaginator(
          itemsPerPage,
          fetcher,
          (resp) => resp.${method.response.nextPageTokenFieldName},
          (resp) => resp.${method.response.dataFieldName},
          parameters$,
          nextPage$,
          reload$,
        );
      }
    `
  })

  t.register('grpcBasedExtensions', ({ service }) => {
    const paginatedMethods = service.methods
      .filter(method => typeof findOption(method.methodDesc.options, 'catfish.mtd_paginated') !== 'undefined')

    return paginatedMethods
      .map(method => t.render('grpcBasedPaginationExtension', { service: service, method }))
      .join('\n')
  })

  t.register('grpcBasedPaginationExtension', ({ service, method }) => {
    if (method.type !== 'paginated' || method.request.type !== 'paginated' || method.response.type !== 'paginated') {
      throw new Error('Method is not valid')
    }

    return `
      declare module '${service.grpcClientThing.importpath}' {
        export interface ${service.grpcClientThing.name} {
          ${method.createAsyncPaginatorName}(itemsPerPage: number):
            runtime.asyncPaginator.Paginator<
              ${method.response.dataFieldTypeThing.usagename},
              ${method.request.parametersTypeName},
              ${method.response.responseName},
            >;
        }
      }

      ${service.grpcClientThing.usagename}.prototype.${method.createAsyncPaginatorName} = function (
        this: ${service.grpcClientThing.usagename},
        itemsPerPage: number,
      ) {
        const fetcher: runtime.asyncPaginator.PageFetcher<${method.request.parametersTypeName}, ${method.response.messageTypeThing.usagename}> = (itemsPerPage, pageToken, parameters) => {
          return this.${method.methodDesc.name}(new ${method.request.messageTypeThing.usagename}().fromJSON({
            ...parameters,
            ${method.request.pageSizeFieldName}: itemsPerPage,
            ${method.request.pageTokenFieldName}: pageToken,
          }))
        }

        return runtime.asyncPaginator.createPaginator(
          itemsPerPage,
          fetcher,
          (resp) => resp.${method.response.nextPageTokenFieldName},
          (resp) => resp.${method.response.dataFieldName},
        );
      }
    `
  })
}