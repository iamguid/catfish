import { PluginContextBuilder, ProtobufModelsPlugin, Plugin } from "../../src";
import { MapFieldContext, MessageContext, buildFileContext, isMapField } from "../../src/plugins/protobuf-models/context";

export type ExtendedPluginOptions = ProtobufModelsPlugin.PluginOptions & {
    test: string
}

export const extendedModelClassTemplate = (ctx: { message: MessageContext }) => {
    return `
    export class ${ctx.message.className} {
      ${ProtobufModelsPlugin.templates.render('modelClassFields', {
        message: ctx.message
      })}

      public static fields = [${ctx.message.fields.map(f => `'${f.name}'`).join(",")}]

      ${(ctx.message.fields.filter(f => ProtobufModelsPlugin.context.isMapField(f)) as MapFieldContext[]).map(f => {
        return ProtobufModelsPlugin.templates.render('modelClassEncodeMap', { mapField: f })
      }).join('\n')}

      ${(ctx.message.fields.filter(f => ProtobufModelsPlugin.context.isMapField(f)) as MapFieldContext[]).map(f => {
        return ProtobufModelsPlugin.templates.render('modelClassDecodeMap', { mapField: f })
      }).join('\n')}

      public get fields() {
        return ${ctx.message.className}.fields
      }

      ${ProtobufModelsPlugin.templates.render('modelClassCtor', {
        message: ctx.message
      })}

      ${ProtobufModelsPlugin.templates.render('modelClassEncode', {
        message: ctx.message
      })}

      ${ProtobufModelsPlugin.templates.render('modelClassDecode', {
        message: ctx.message
      })}

      ${ProtobufModelsPlugin.templates.render('modelClassToJSON', {
        message: ctx.message
      })}

      ${ProtobufModelsPlugin.templates.render('modelClassFromJSON', {
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

      helloworld(): string {
        return ${ctx.message.}
      }
    }
  `;
}

export const extendedPluginTemplates = ProtobufModelsPlugin.templates
    .register('modelClass', extendedModelClassTemplate)

export type ExtendedPluginContext = ProtobufModelsPlugin.context.PluginContext & {
    helloworld: string
}

export const buildExtendedPluginContext: PluginContextBuilder<ExtendedPluginContext, ExtendedPluginOptions> = (projectContext, projectOptions, pluginOptions) => {
    const basePluginContext = ProtobufModelsPlugin.context.buildPluginContext(projectContext, projectOptions, pluginOptions);

    return {
        ...basePluginContext,
        helloworld: pluginOptions?.test ?? ''
    }
}

export const buildExtendedFileContext = (ctx: ProjectContext, file: FileDescriptor) =>

export const buildExtendedMessageContext: () => 