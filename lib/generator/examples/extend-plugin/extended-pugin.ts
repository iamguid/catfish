import { ProtobufModelsPlugin, TemplatesRegistry } from "../../src";
import { ContextsRegistry, ExtractFlatContextDefinition } from "../../src/PluginContext";
import { PluginTemplates, registerPluginTemplates } from "../../src/plugins/protobuf-models";

export type ExtendedPluginContextFlatDefinition = ExtractFlatContextDefinition<ReturnType<typeof buildExtendedPluginContext>>;

export type ExtendedPluginOptions = ProtobufModelsPlugin.PluginOptions & {
    enableHelloWorld: boolean
}

export type ExtendedPluginTemplatesRegistry = Omit<PluginTemplates, 'modelClass'> & {
  modelClass: { message: ExtendedPluginContextFlatDefinition['file.message'] }
  helloworld: { message: ExtendedPluginContextFlatDefinition['file.message'] }
}

export const buildExtendedPluginContext = <TPluginOptions extends ExtendedPluginOptions>(registry: ContextsRegistry<TPluginOptions>) => {
  return ProtobufModelsPlugin.context.buildPluginContext(registry)
    .extend('messages', async ({ ctx }) => ({
      ...ctx,
      helloMessage: `Hello, ${ctx.classThing.fullname}`
    }))
}

export const registerExtendedPluginTemplates = <TPluginOptions extends ExtendedPluginOptions, TPluginTemplatesRegistry extends ExtendedPluginTemplatesRegistry>(r: TemplatesRegistry<TPluginOptions, TPluginTemplatesRegistry>) => {
  registerPluginTemplates(r)

  r.register('helloworld', ({ message }, opts) => {
    return opts.enableHelloWorld ? `
      hello(): string {
        return '${message.helloMessage}'
      }
    ` : ''
  })

  r.register('modelClass', ({ message }) => {
    const maps = message.fields.filter(f => f.type === 'map') as ExtendedPluginContextFlatDefinition['file.message.map'][]

    return `
      export class ${message.classThing.name} {
        ${r.render('modelClassFields', { message })}
  
        public static fields = [${message.fields.map(f => `'${f.fieldName}'`).join(",")}]
  
        ${maps.map(mapField => r.render('modelClassEncodeMap', { mapField })).join('\n')}
  
        ${maps.map(mapField => r.render('modelClassDecodeMap', { mapField })).join('\n')}
  
        public get fields() {
          return ${message.classThing.name}.fields
        }
  
        ${r.render('modelClassCtor', { message })}
  
        ${r.render('modelClassEncode', { message })}
  
        ${r.render('modelClassDecode', { message })}
  
        ${r.render('modelClassToJSON', { message })}
  
        ${r.render('modelClassFromJSON', { message })}
  
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

        ${r.render('helloworld', { message })}
      }
    `;
  })
}
