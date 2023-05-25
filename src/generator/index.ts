import { simplePlugin } from "./plugins/SimplePlugin";
import { Project } from "./Project"

const main = () => {
    const project = new Project({
        protoDirPath: './tests/protos',
        outDirPath: './generated_test',
    });

    project
        .load()
        .resgister(simplePlugin)
        .generate();
}

main();