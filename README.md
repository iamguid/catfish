# Catfish

️:warning: Experimental ️:warning:

## What is Catfish ?

Catfish is first fully customizable client side (TypeScript) code generation tool for gRPC.

With Catfish you can:
- Extend every code generation plugin using very friendly, simple and powerfull syntax
- Write your own code generation plugins without pain
- Use library without dependencies like protoc, buf or java
- Use with protoc or buf (in progress)

Catfish packages:
- Parser - Based on ANTL4 .proto files parser (currently works only with protobuf V3)
- Generator - Basic classes & types for code generation and many ready to use plugins
- Runtime - Some logic that you might need in generated fiels

Catfish plugins:
- protobuf - generates protobuf messages
- grpc-web - generates grpc-web compatible clients
- grpc-web-rxjs - generates grpc-web compatible clients based on rxjs library
- grpc-web-catfish - generates extensions for grpc-web clients that you can use to reduce boilerplate (currently implemented only paginators)
- grpc-web-tanstack - generates extensions for grpc-web clients that you can use with reqct-query library

## How Plugins Works ?
Plugin contains at least 4 main files: `plugin.ts`, `context.ts`, `templates.ts` and `index.ts`


### `plugin.ts`
`plugin.ts` - the main entry point of plugin. That file should export only one method `plugin` and method should return result files.

There is an example of typical plugin structure:

```typescript
export const plugin: Plugin<PluginOptions, PluginTemplatesRegistry, PluginContextDefinition> = async (projectContext, projectOptions, pluginOptions, registerTemplates, buildContext) = {
    const result: PluginOutputFile[] = []

    const pluginOptions_ = pluginOptions ?? ({} as PluginOptions);
    const registerTemplates_ = registerTemplates ?? registerPluginTemplates
    const buildContext_ = buildContext ?? buildPluginContext

    // Initialize templates
    const templatesRegistry = new TemplatesRegistry<PluginOptions, PluginTemplatesRegistry>(projectContext, pluginOptions_)
    registerTemplates_(templatesRegistry)

    const files = projectContext.getFiles();

    // For each file
    await Promise.all(files.map(async (file) => {
        // Build context
        const contextsRegistry = new ContextsRegistry(projectContext, file, fileNameBuilder(file, projectContext), pluginOptions_)
        const context = buildContext_(contextsRegistry);

        // Capture usages for imports generation
        const captureContext = projectContext.resolver.getCaptureContext()
        const fileContext = await context.build(captureContext)
        const usedThings = captureContext.stopCapture();

        // Render main template
        const resultFilePath = fileNameBuilder(file, projectContext);
        const imports = projectContext.resolver.getImports(usedThings, file, resultFilePath)
        const resultFileContent = templatesRegistry.render('main', { file: fileContext, imports });

        result.push({ path: resultFilePath, content: resultFileContent });
    }))

    // Return generated files
    return { files: result }
}
```

### `context.ts`
`context.ts` - context is prepared data for templates

There is an example how you can easily extend context:

```typescript
// Special types to define result context, that you can use in templates
export type PluginContextFlatDefinition = ExtractFlatContextDefinition<ReturnType<typeof buildPluginContext>>;
export type PluginContextDefinition = ExtractContextDefinition<ReturnType<typeof buildPluginContext>>;

// Method for extending context
export const buildPluginContext = (registry: ContextsRegistry<PluginOptions>) => {
    return registry
        // Expose fields serviceDefinitionThing and clientClassThing to all services in templates
        .extend('services', async ({ ctx, def }) => ({
            ...ctx,
            serviceDefinitionThing: def('grpc.definition', ctx.desc, `${upperCaseFirst(snakeToCamel(ctx.desc.name))}Definition`),
            clientClassThing: def('grpc.client', ctx.desc, `${upperCaseFirst(snakeToCamel(ctx.desc.name))}Client`),
        }))
        // Expose fields methodName and path to all services methods in templates
        .extend('methods', async ({ ctx }) => ({
            ...ctx,
            methodName: snakeToCamel(ctx.methodDesc.name),
            path: `/${ctx.serviceDesc.fullpath}/${ctx.methodDesc.name}`,
        }))
}
```

### `templates.ts`
`templates.ts` - templates is just templates that plugin use to get file content from context

There is an example of templates:

```typescript
// Special type that will use in TemplatesRegistry to define which template which context will use
export type PluginTemplatesRegistry = {
  main: { file: PluginContextFlatDefinition['file'], imports: Import[] },
  services: { services: PluginContextFlatDefinition['file.service'][] },
}

// Method for templates registration
export const registerPluginTemplates = (t: TemplatesRegistry<PluginOptions, PluginTemplatesRegistry>) => {
  t.register('main', ({ file, imports }) => `
    ${t.renderHeader(file.desc)}

    ${t.renderImports(imports)}

    import * as runtime from "@catfish/runtime"
    import * as rxjs from 'rxjs';
    import * as grpc from 'grpc-web';

    ${t.render('services', { services: file.services })}
  `);

  t.register('services', ({ services }) => {
    let result = '';

    for (const service of services) {
      result += `// #region ${service.desc.fullpath}`
      result += t.render('clientStubClass', { service })
      result += `// #endregion`
    }

    return result;
  })
```

Everything that you define in `context.ts` will be propagated to templates context
