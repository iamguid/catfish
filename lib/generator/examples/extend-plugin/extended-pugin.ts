import { ProtobufModelsPlugin, TemplatesBuilder } from "../../src";
import { ContextsRegistry, ExtractContextDefinition, ExtractFlatContextDefinition } from "../../src/PluginContext";

export type ExtendedPluginContextFlatDefinition = ExtractFlatContextDefinition<ReturnType<typeof buildExtendedPluginContext>>;
export type ExtendedPluginContextDefinition = ExtractContextDefinition<ReturnType<typeof buildExtendedPluginContext>>;

export type ExtendedPluginOptions = ProtobufModelsPlugin.PluginOptions & {
    enableHelloWorld: boolean
}

export type ExtendedPluginTemplatesRegistry = ProtobufModelsPlugin.PluginTemplates & {
  modelClass: { message: ExtendedPluginContextFlatDefinition['file.message'] }
  helloworld: { message: ExtendedPluginContextFlatDefinition['file.message'] }
}

export const buildExtendedPluginContext = (cr: ContextsRegistry<ExtendedPluginOptions>) => {
  return ProtobufModelsPlugin.context.buildPluginContext(cr)
    .extend('messages', async ({ ctx }) => ({
      ...ctx,
      helloMessage: `Hello, ${ctx.classThing.fullname}`
    }))
}

export const registerExtendedPluginTemplates: TemplatesBuilder<ExtendedPluginOptions, ExtendedPluginTemplatesRegistry> = (tr) => {
  ProtobufModelsPlugin.registerPluginTemplates(tr as any)

  tr.register('helloworld', ({ message }, opts) => {
    return opts.enableHelloWorld ? `
      hello(): string {
        return '${message.helloMessage}'
      }
    ` : ''
  })

  tr.register('modelClass', ({ message }) => {
    const maps = message.fields.filter(f => f.type === 'map') as ExtendedPluginContextFlatDefinition['file.message.map'][]

    return `
      export class ${message.classThing.name} {
        ${tr.render('modelClassFields', { message })}
  
        public static fields = [${message.fields.map(f => `'${f.fieldName}'`).join(",")}]
  
        ${maps.map(mapField => tr.render('modelClassEncodeMap', { mapField })).join('\n')}
  
        ${maps.map(mapField => tr.render('modelClassDecodeMap', { mapField })).join('\n')}
  
        public get fields() {
          return ${message.classThing.name}.fields
        }
  
        ${tr.render('modelClassCtor', { message })}
  
        ${tr.render('modelClassEncode', { message })}
  
        ${tr.render('modelClassDecode', { message })}
  
        ${tr.render('modelClassToJSON', { message })}
  
        ${tr.render('modelClassFromJSON', { message })}
  
        serialize(): Uint8Array | Buffer {
          const w = pjs.Writer.create();
          return ${message.classThing.name}.encode(this, w).finish();
        }
  
        deserialize(buffer: Uint8Array | Buffer): ${message.classThing.name} {
          const r = new pjs.Reader(buffer);
          return ${message.classThing.name}.decode(this, r, r.len);
        }
  
        toJSON(): ${message.jsonIfaceThing.name} {
          return ${message.classThing.name}.toJSON(this);
        }
  
        fromJSON(obj: ${message.jsonIfaceThing.name}): ${message.classThing.name} {
          return ${message.classThing.name}.fromJSON(this, obj);
        }
  
        clone(): ${message.classThing.name} {
          return new ${message.classThing.name}(this);
        }

        ${tr.render('helloworld', { message })}
      }
    `;
  })
}
