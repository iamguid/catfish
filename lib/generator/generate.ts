import path from "node:path";
import { globSync } from "glob";

const generateScripts = globSync("**/generate.ts", { cwd: path.join(__dirname, "tests"), withFileTypes: true });

generateScripts.forEach(f => {
    const fullpath = f.fullpath();
    const generatefn = require(fullpath);
    generatefn.default();
})