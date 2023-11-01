import { PluginOptions } from "./plugin";
import { ExtractFlatContextDefinition, ExtractContextDefinition, BaseContextDefinition, ContextBuilder, ContextsRegistry } from "../../src/PluginContext";

export type PluginContextFlatDefinition = ExtractFlatContextDefinition<ReturnType<typeof buildPluginContext>>;
export type PluginContextDefinition = ExtractContextDefinition<ReturnType<typeof buildPluginContext>>;

export const buildPluginContext = (cr: ContextsRegistry<PluginOptions>) => {
    return cr
        .extend('messages', async ({ ctx, use }) => ({
            ...ctx,
            thing: await use('model.class', ctx.desc),
            path: ctx.desc.fullpath
        }))
}
