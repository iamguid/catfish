import { FileDescriptor } from "@catfish/parser";
import { Import, ProjectContext } from "./ProjectContext";
import { BasePluginOptions } from "./Plugin";

export interface BaseTemplates {}

export type TemplatesBuilder<TPluginOptions extends BasePluginOptions, TTemplates extends BaseTemplates> = (t: TemplatesRegistry<TPluginOptions, TTemplates>) => void

export class TemplatesRegistry<
  TPluginOptions extends BasePluginOptions,
  TTemplates extends BaseTemplates,
> {
  private registry: Record<string, any> = {}

  constructor(
    private projectContext: ProjectContext,
    private opts: TPluginOptions,
  ) {}

  renderHeader = (file: FileDescriptor) => {
    const filePath = this.projectContext.getProtoFilePath(file);

    return `
      // @ts-nocheck
      //
      // Generated code by catfish
      //
      // DO NOT EDIT!
      //
      // package: ${file.package}
      // file: ${filePath}
    `
  }

  renderImports = (imports: Import[]) => 
    imports.map(imprt => `import * as ${imprt.name} from "${imprt.path}";`).join('\n');

  render = <TName extends keyof TTemplates>(name: TName, ctx: TTemplates[TName]): string => {
    const template = this.registry[name as string];
    return template(ctx, this.opts);
  }

  register = <TName extends keyof TTemplates>(
    name: TName,
    cb: (
      ctx: TTemplates[TName],
      opt: TPluginOptions
    ) => string
  ): void => {
    this.registry[name as string] = cb
  }
}
