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
// File name builder function that we will use for output file path
export const fileNameBuilder = (file: FileDescriptor, ctx: ProjectContext) => replaceProtoSuffix(ctx.getProtoFilePath(file), 'list.ts');

// Plugin options
export interface PluginOptions extends BasePluginOptions {}

export const plugin: Plugin<PluginOptions, PluginTemplatesRegistry, PluginContextDefinition> = async (projectContext, projectOptions, pluginOptions, registerTemplates, buildContext) => {
    // Define result variable with result files array
    const result: PluginOutputFile[] = []

    // Define defaults
    const pluginOptions_ = pluginOptions ?? ({} as PluginOptions );
    const registerTemplates_ = registerTemplates ?? registerPluginTemplates
    const buildContext_ = buildContext ?? buildPluginContext

    // Register templates in templates registry
    const templatesRegistry = new TemplatesRegistry<PluginOptions, PluginTemplatesRegistry>(projectContext, pluginOptions_)
    registerTemplates_(templatesRegistry)

    // Get all files descriptors from project context
    const files = projectContext.getFiles();

    // We use await because context build is async operation, it is needed for type resolution
    await Promise.all(files.map(async (file) => {
        // Create context registry and build context
        const contextsRegistry = new ContextsRegistry(projectContext, file, fileNameBuilder(file, projectContext), pluginOptions_)
        const context = buildContext_(contextsRegistry);

        // Capture usages for generate imports, that we will put in top of the file,
        // all usages in context will be captured per file
        const captureContext = projectContext.resolver.getCaptureContext()
        const fileContext = await context.build(captureContext)
        const usedThings = captureContext.stopCapture();

        // Render file template
        const resultFilePath = fileNameBuilder(file, projectContext);
        const imports = projectContext.resolver.getImports(usedThings, file, resultFilePath)
        const messages = extractAllMessages(fileContext);
        const resultFileContent = templatesRegistry.render('main', { file: fileContext, imports, messages });

        // Store result file to output files
        result.push({ path: resultFilePath, content: resultFileContent });
    }))

    // Return result
    return { files: result }
}

// ...
```

### `context.ts`
`context.ts` - context is prepared data for templates

There is an example how you can easily extend context:

```typescript
// Special types to define result context, that you can use in templates
export type PluginContextFlatDefinition = ExtractFlatContextDefinition<ReturnType<typeof buildPluginContext>>;
export type PluginContextDefinition = ExtractContextDefinition<ReturnType<typeof buildPluginContext>>;

// Method for extending context
export const buildPluginContext = (cr: ContextsRegistry<PluginOptions>) => {
    return cr
        // Expose fields thing and path to all messages
        .extend('messages', async ({ ctx, use }) => ({
            ...ctx,
            thing: await use('model.class', ctx.desc),
            path: ctx.desc.fullpath
        }))
}

```

### `templates.ts`
`templates.ts` - templates is just templates that plugin use to get file content from context

There is an example of templates:

```typescript
// Templates types (name and context that will be propogated to template function)
export type PluginTemplatesRegistry = {
  main: { file: PluginContextFlatDefinition['file'], imports: Import[], messages: PluginContextDefinition['messages'][] },
  listType: { messages: PluginContextDefinition['messages'][] },
}

export const registerPluginTemplates: TemplatesBuilder<PluginOptions, PluginTemplatesRegistry> = (t) => {
  // Template function main
  t.register('main', ({ file, imports, messages }) => `
    ${t.renderHeader(file.desc)}

    ${t.renderImports(imports)}

    ${t.render('listType', { messages })} 
  `)

  // Template function listType
  t.register('listType', ({ messages }) => `
    type Messages = {
      ${messages.map(message => `'${message.path}': ${message.thing.usagename}`)}
    }
  `)
}
```

Everything that you define in `context.ts` will be propagated to templates context

See full [example](https://github.com/iamguid/catfish/tree/main/lib/generator/examples/messages-list) for more details