import { FileDescriptor, MessageDescriptor } from "@catfish/parser";
import { PluginContextBuilder, ProjectContext, ProtobufModelsPlugin, TemplateFn } from "../../src";
import { PluginTemplatesRegistry } from "../../src/plugins/protobuf-models";
import { FileContext, MapFieldContext, MessageContext, buildFileContext, buildMessageContext } from "../../src/plugins/protobuf-models/context";

export type ExtendedPluginOptions = ProtobufModelsPlugin.PluginOptions & {
    enableHelloWorld: boolean
}

export type ExtendedModelClassTemplate = TemplateFn<ExtendedPluginTemplatesRegistry, ExtendedPluginOptions, { message: ExtendedMessageContext }>
export type HelloWorldTemplate = TemplateFn<ExtendedPluginTemplatesRegistry, ExtendedPluginOptions, { text: string }>;

export type ExtendedPluginTemplatesRegistry = Omit<PluginTemplatesRegistry, "modelClass"> & {
  modelClass: ExtendedModelClassTemplate
  helloworld: HelloWorldTemplate
}

export const helloWorldTemplate: HelloWorldTemplate = (render, opts, ctx) => {
  return opts.enableHelloWorld ? `
    helloworld(): string {
      return ${ctx.text}
    }
  ` : ''
}

export const extendedModelClassTemplate: ExtendedModelClassTemplate = (render, opts, ctx) => `
  export class ${ctx.message.className} {
    ${render('modelClassFields', {
      message: ctx.message
    })}

    public static fields = [${ctx.message.fields.map(f => `'${f.name}'`).join(",")}]

    ${(ctx.message.fields.filter(f => ProtobufModelsPlugin.context.isMapField(f)) as MapFieldContext[]).map(f => {
      return render('modelClassEncodeMap', { mapField: f })
    }).join('\n')}

    ${(ctx.message.fields.filter(f => ProtobufModelsPlugin.context.isMapField(f)) as MapFieldContext[]).map(f => {
      return render('modelClassDecodeMap', { mapField: f })
    }).join('\n')}

    public get fields() {
      return ${ctx.message.className}.fields
    }

    ${render('modelClassCtor', {
      message: ctx.message
    })}

    ${render('modelClassEncode', {
      message: ctx.message
    })}

    ${render('modelClassDecode', {
      message: ctx.message
    })}

    ${render('modelClassToJSON', {
      message: ctx.message
    })}

    ${render('modelClassFromJSON', {
      message: ctx.message
    })}

    serialize(): Uint8Array | Buffer {
      const w = pjs.Writer.create();
      return ${ctx.message.className}.encode(this, w).finish();
    }

    deserialize(buffer: Uint8Array | Buffer): ${ctx.message.className} {
      const r = new pjs.Reader(buffer);
      return ${ctx.message.className}.decode(this, r, r.len);
    }

    toJSON(): ${ctx.message.jsonIfaceName} {
      return ${ctx.message.className}.toJSON(this);
    }

    fromJSON(obj: ${ctx.message.jsonIfaceName}): ${ctx.message.className} {
      return ${ctx.message.className}.fromJSON(this, obj);
    }

    clone(): ${ctx.message.className} {
      return new ${ctx.message.className}(this);
    }

    ${render('helloworld', {
      text: ctx.message.someProp
    })}
  }
`;

export const extendedPluginTemplatesRegistry: ExtendedPluginTemplatesRegistry = {
  ...ProtobufModelsPlugin.pluginTemplatesRegistry,
  modelClass: extendedModelClassTemplate,
  helloworld: helloWorldTemplate,
}

export type ExtendedPluginContext = ProtobufModelsPlugin.context.PluginContext & {
  files: ExtendedFileContext[]
}

export type ExtendedFileContext = FileContext & {
  messages: ExtendedMessageContext[]
}

export type ExtendedMessageContext = MessageContext & {
  someProp: string
}

export const buildExtendedPluginContext: PluginContextBuilder<ExtendedPluginContext, ExtendedPluginOptions> = (projectContext, projectOptions, pluginOptions) => {
  const files = projectContext.getFiles();

  return {
    files: files.map(f => buildExtendedFileContext(projectContext, f))
  }
}

export const buildExtendedFileContext = (ctx: ProjectContext, file: FileDescriptor): ExtendedFileContext => {
  const baseFileContext = buildFileContext(ctx, file);
  
  return {
    ...baseFileContext,
    messages: file.messages.map(m => buildExtendedMessageContext(ctx, file, m)),
  }
}

export const buildExtendedMessageContext = (ctx: ProjectContext, file: FileDescriptor, desc: MessageDescriptor): ExtendedMessageContext => {
  const baseMessageContext = buildMessageContext(ctx, file, desc);

  return {
    ...baseMessageContext,
    someProp: "test",
  }
}