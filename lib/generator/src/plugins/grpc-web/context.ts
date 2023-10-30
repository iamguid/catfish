import { PluginOptions } from "./plugin";
import { snakeToCamel, upperCaseFirst } from "../../utils";
import { ExtractPluginContextFlat, ContextsRegistry } from "../../PluginContext";

export type PluginContextFlatOut = ExtractPluginContextFlat<ReturnType<typeof buildPluginContext>>;

export const buildPluginContext = (registry: ContextsRegistry<PluginOptions>) => {
    return registry
        .extend('services', async ({ ctx, def }) => ({
            ...ctx,
            serviceDefinitionThing: def('grpc.definition', ctx.desc, `${upperCaseFirst(snakeToCamel(ctx.desc.name))}Definition`),
            clientClassThing: def('grpc.client', ctx.desc, `${upperCaseFirst(snakeToCamel(ctx.desc.name))}Client`),
        }))
        .extend('methods', async ({ ctx }) => ({
            ...ctx,
            methodName: snakeToCamel(ctx.methodDesc.name),
            path: `/${ctx.serviceDesc.fullpath}/${ctx.methodDesc.name}`,
        }))
        .extend('typeinfos', async ({ ctx, use }) => {
            const thing = await (ctx.descriptor ? use(['model.class', 'model.enum'], ctx.descriptor) : Promise.resolve(null))

            return {
                ...ctx,
                thing
            }
        })
}
