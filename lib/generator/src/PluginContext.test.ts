import { BasePluginContext, ContextsRegistry, ContextsRegistryCb, PluginContextI, PluginContextO } from "./PluginContext"
import { ProjectContext } from "./ProjectContext";

describe("PluignContext", () => {
    it("basic types should compiled", () => {
        const testProjectContext = new ProjectContext({ protoDirPath: 'none', outDirPath: 'none' });
        const testPluginContext = new ContextsRegistry(testProjectContext, {} as any, 'test', {});
        const context = testPluginContext.build();
        const firstFile = context.files[0]
    })

    it("extended types should compiled", () => {
        const testProjectContext = new ProjectContext({ protoDirPath: 'none', outDirPath: 'none' });
        const testPluginContext = new ContextsRegistry(testProjectContext, {} as any, 'test', {});

        const context = testPluginContext
            .extend('files', async ({ ctx }) => ({ ...ctx, test: 'test' }))

        const context2 = context
            .extend('files', async ({ ctx }) => ({ ...ctx, test2: 'test' }))

        context2.build().files[0].test
        context2.build().files[0].test2
    })
})