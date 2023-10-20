import { TemplateFn, TemplateRegistry } from "../Templates";

export type HeaderTemplate = TemplateFn<any, any, { packageName: string, fileName: string }>

export const headerTemplate: HeaderTemplate = (render, opts, ctx) => `
    // @ts-nocheck
    //
    // Generated code by catfish
    //
    // DO NOT EDIT!
    //
    // package: ${ctx.packageName}
    // file: ${ctx.fileName}

`;