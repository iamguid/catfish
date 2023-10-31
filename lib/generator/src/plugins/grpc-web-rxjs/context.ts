import { PluginOptions } from "./plugin";
import { ContextsRegistry, ExtractFlatContextDefinition } from "../../PluginContext";

export type PluginContextFlatOut = ExtractFlatContextDefinition<ReturnType<typeof buildPluginContext>>;

export const buildPluginContext = (registry: ContextsRegistry<PluginOptions>) => {
    return registry
        .extend('services', async ({ ctx, def, use }) => ({
            ...ctx,
            rxjsClientThing: def('grpcrxjs.client', ctx.desc, `${ctx.desc.name}RxjsClient`),
            grpcClientThing: await use('grpc.client', ctx.desc),
        }))
        .extend('typeinfos', async ({ ctx, use }) => ({
            ...ctx,
            thing: await (ctx.descriptor ? use(['model.class', 'model.enum'], ctx.descriptor) : Promise.resolve(null))
        }))
}
