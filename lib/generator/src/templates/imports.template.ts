import { Import } from "../ProjectContext";

export const importsTemplate = (render: any, opts: any, ctx: { imports: Import[] }) => (
    ctx.imports.map((imprt) => `import * as ${imprt.name} from "${imprt.path}";`).join('\n')
);
