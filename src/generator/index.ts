import protobufModelsPlugin from "./plugins/protobuf-models";
import { Project } from "./Project"

const main = () => {
    const project = new Project({
        protoDirPath: './tests/protos',
        outDirPath: './generated_test',
    });

    project
        .load()
        .resgister(protobufModelsPlugin)
        .generate();
}

main();