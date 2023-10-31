import { ContextsRegistry } from "./PluginContext"
import { ProjectContext } from "./ProjectContext";

describe("PluignContext", () => {
    it("basic types should be compiled", async () => {
        const testProjectContext = new ProjectContext({ protoDirPath: 'none', outDirPath: 'none' });
        const testPluginContext = new ContextsRegistry(testProjectContext, {} as any, 'test', {});
        const context = await testPluginContext.build();
        context.messages
    })

    it("extended types should be compiled", async () => {
        const testProjectContext = new ProjectContext({ protoDirPath: 'none', outDirPath: 'none' });
        const testPluginContext = new ContextsRegistry(testProjectContext, {} as any, 'test', {});

        const context = await testPluginContext
            .extend('files', async ({ ctx }) => ({ ...ctx, test: 'test' }))
            .extend('enums', async ({ ctx }) => ({ ...ctx, test3: 'test' }))
            .extend('files', async ({ ctx }) => ({ ...ctx, test2: 'test' }))
            .build()

        context.test
        context.test2
        context.enums[0].test3
    })
})