import { MainTemplate } from "./templates";

export const mainTemplate: MainTemplate = (render, opts, ctx) => `
  ${render('header', {
    packageName: ctx.file.package,
    fileName: ctx.file.filePath,
  })}

  ${render('imports', {
    imports: ctx.file.imports,
  })}

  import * as pjs from "protobufjs/minimal"
  import * as runtime from "@catfish/runtime"
`;
