import { ContextsRegistry } from "./PluginContext"
import { ProjectContext } from "./ProjectContext";

describe("PluignContext", () => {
    it("types should compiled", () => {
        const testProjectContext = new ProjectContext({ protoDirPath: 'none', outDirPath: 'none' });
        const testPluginContext = new ContextsRegistry(testProjectContext, {} as any, 'test', {});
    })
})