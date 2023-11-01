import { PluginOptions } from "./plugin";
import { ExtractFlatContextDefinition, ExtractContextDefinition, BaseContextDefinition, ContextBuilder, ContextsRegistry } from "../../src/PluginContext";

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
