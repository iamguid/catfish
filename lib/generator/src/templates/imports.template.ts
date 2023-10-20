import { Import } from "../ProjectContext";
import { TemplateFn } from "../Templates";

export type ImportsTemplate = TemplateFn<any, any, { imports: Import[] }>

export const importsTemplate: ImportsTemplate = (render, options, ctx) => (
    ctx.imports.map((imprt) => `
        import * as ${imprt.name} from "${imprt.path}";
    `).join('\n')
);
