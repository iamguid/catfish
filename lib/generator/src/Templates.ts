import { FileDescriptor } from "@catfish/parser";
import { Import, ProjectContext } from "./ProjectContext";

export class TemplatesRegistry<
  TTemplates,
  TPluginOptions extends Record<string, any>,
> {
  private registry: Record<string, any> = {}

  constructor(
    private projectContext: ProjectContext,
    private opts: TPluginOptions,
  ) {}

  def = (namespace: string) => {
    return namespace;
  }

  use = (namespace: string) => {
    return namespace;
  }

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
      use: (namespace: string) => string,
      def: (namespace: string) => string,
      opt: TPluginOptions
    ) => string
  ): void => {
    this.registry[name as string] = cb
  }
}
