export type TemplateRegistry = Record<string | number | symbol, TemplateFn<any, any, any>>;
export type TemplateRenderFn<TTemplateRegistry extends TemplateRegistry> = (name: keyof TTemplateRegistry, ctx: TTemplateRegistry[typeof name]) => string;
export type TemplateFn<TTemplatesRegistry extends TemplateRegistry, TOptions, TCtx> = (render: Templates<TTemplatesRegistry, TOptions>['render'], opts: TOptions, ctx: TCtx) => string;

export class Templates<TTemplateRegistry extends TemplateRegistry, TPluginOptions> {
  constructor(private registry: TTemplateRegistry, private opts: TPluginOptions) {}

  render<TName extends keyof TTemplateRegistry>(name: TName, ctx: Parameters<TTemplateRegistry[TName]>[1]): string {
    const template = this.registry[name];
    return template(this.render, this.opts, ctx);
  }
}

