import { PluginOptions } from "./plugin";
import { snakeToCamel, upperCaseFirst } from "../../utils";
import { ExtractFlatContextDefinition, ContextsRegistry, ExtractContextDefinition } from "../../PluginContext";

export type PluginContextFlatDefinition = ExtractFlatContextDefinition<ReturnType<typeof buildPluginContext>>;
export type PluginContextDefinition = ExtractContextDefinition<ReturnType<typeof buildPluginContext>>;

export const buildPluginContext = (registry: ContextsRegistry<PluginOptions>) => {
    return registry
        .extend('typeinfos', async ({ ctx, use }) => {
            const thing = await (ctx.descriptor ? use(['model.class', 'model.enum'], ctx.descriptor) : Promise.resolve(null))

            return {
                ...ctx,
                thing
            }
        })
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
}
