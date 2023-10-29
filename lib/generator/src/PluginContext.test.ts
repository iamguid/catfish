import { ContextsRegistry } from "./PluginContext"
import { ProjectContext } from "./ProjectContext";

describe("PluignContext", () => {
    it("basic types should be compiled", () => {
        const testProjectContext = new ProjectContext({ protoDirPath: 'none', outDirPath: 'none' });
        const testPluginContext = new ContextsRegistry(testProjectContext, {} as any, 'test', {});
        const context = testPluginContext.build();
        const firstFile = context.files[0]
    })

    it("extended types should be compiled", () => {
        const testProjectContext = new ProjectContext({ protoDirPath: 'none', outDirPath: 'none' });
        const testPluginContext = new ContextsRegistry(testProjectContext, {} as any, 'test', {});

        const context = testPluginContext
            .extend('files', async ({ ctx }) => ({ ...ctx, test: 'test' }))
            .extend('enums', async ({ ctx }) => ({ ...ctx, test3: 'test' }))
            .extend('files', async ({ ctx }) => ({ ...ctx, test2: 'test' }))
            .build()

        context.files[0].test
        context.files[0].test2
        context.files[0].enums[0].test3
    })
})