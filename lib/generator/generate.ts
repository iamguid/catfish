import { globSync } from "glob";

const generateScripts = globSync(["**/tests/**/generate.ts", "examples/**/generate.ts"], { cwd: __dirname, withFileTypes: true });

generateScripts.forEach(f => {
    const fullpath = f.fullpath();
    const generatefn = require(fullpath);
    generatefn.default();
})