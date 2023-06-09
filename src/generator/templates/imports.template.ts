import { Import } from "../Context";

export const importsTemplate = (ctx: { imports: Import[] }) => (
    ctx.imports.map((imprt) => `
        import * as ${imprt.name} from "${imprt.path}";
    `).join('\n')
);
