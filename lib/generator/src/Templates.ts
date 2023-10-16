export class Templates<TKeyValue extends Record<string, (args: any[]) => string>> {
  public registry: Record<string, any> = {};

  register<TName extends string, TTemplate>(
    this: Templates<TKeyValue & { [key in TName as key]: TTemplate }>,
    name: TName,
    templ: TTemplate
  ) {
    this.registry[name] = templ;
    return this;
  }

  render<TName extends keyof TKeyValue>(
    this: Templates<TKeyValue>,
    name: TName,
    props: Parameters<TKeyValue[TName]>[0]
  ) {
    const template = this.registry[name as string];
    return template(props);
  }
}