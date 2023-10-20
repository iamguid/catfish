export type TemplatesRegistry = Record<string | number | symbol, TemplateFn<any, any, any>>;
export type TemplateRenderFn<TTemplateRegistry extends TemplatesRegistry> = (name: keyof TTemplateRegistry, ctx: TTemplateRegistry[typeof name]) => string;
export type TemplateFn<TTemplatesRegistry extends TemplatesRegistry, TOptions extends Record<string, any>, TCtx> = (render: TemplatesRenderer<TOptions, TTemplatesRegistry>['render'], opts: TOptions, ctx: TCtx) => string;
export type ExtractCtx<TTemplatesRegistry extends TemplatesRegistry, TName extends keyof TTemplatesRegistry> = Parameters<TTemplatesRegistry[TName]>[2];

export class TemplatesRenderer<TPluginOptions extends Record<string, any>, TTemplatesRegistry extends TemplatesRegistry> {
  constructor(private opts: TPluginOptions, private registry: TTemplatesRegistry) {}

  render = <TName extends keyof TTemplatesRegistry>(name: TName | string, ctx: ExtractCtx<TTemplatesRegistry, TName>): string => {
    const template = this.registry[name];
    return template(this.render, this.opts, ctx);
  }
}
