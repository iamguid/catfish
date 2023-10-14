import { Project, ProtobufModelsPlugin } from "../../../../../src/generator";

describe("Scalar value types", () => {
    it("generation", () => {
        const project = new Project({
            protoDirPath: `${__dirname}`,
            outDirPath: `${__dirname}`,
        });

        project
            .load()
            .resgister(ProtobufModelsPlugin)
            .generate();
    })

    it("encode decode", () => {

    })
});