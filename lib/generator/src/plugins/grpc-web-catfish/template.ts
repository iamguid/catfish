import { findOption } from "../../utils";
import { ExtensionsTemplate, GrpcBasedExtensionsTemplate, MainTemplate, RxjsBasedExtensionsTemplate, RxjsBasedPaginationExtensionTemplate } from "./templates";

export const mainTemplate: MainTemplate = (render, opts, ctx) => `
  ${render('header', {
    packageName: ctx.file.package,
    fileName: ctx.file.filePath,
  })}

  ${render('imports', {
    imports: ctx.file.imports,
  })}

  import * as runtime from "@catfish/runtime"

  ${render('extensions', { file: ctx.file })}
`;

export const extensionsTemplate: ExtensionsTemplate = (render, opts, ctx) => {
  let result = '';
  result += `// #region gRPC Based Extensions\n`
  result += ctx.file.services.map(s => render('grpcBasedExtensions', { service: s })).join('\n');
  result += `// #endregion\n\n`
  result += `// #region gRPC rxjs Based Extensions\n`
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
    declare module '${ctx.service.rxjsClientImportPath}' {
      export interface ${ctx.service.rxjsClientName} {
        ${ctx.method.createPaginatorName}(): rxjs.Observable<runtime.rxjsPaginator.PaginatorData<${ctx.method.response.dataField.typeInfo.fullType}>>;
      }
    }

    ${ctx.service.rxjsClientFullName}.prototype.${ctx.method.createPaginatorName} = function (this: ${ctx.service.rxjsClientFullName}, test: string) {
      return test;
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
