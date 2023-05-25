import { Plugin } from "../Plugin";

export const simplePlugin: Plugin<void> = (context, projectOptions) => {
        return {
            files: [
                { path: 'test.txt', content: 'Hello, world' }
            ]
        }
}
