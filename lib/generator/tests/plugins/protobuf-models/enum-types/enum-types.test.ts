import path from "node:path";
import { EnumMessage, TestEnum, IEnumMessageJSON } from "./enum-types_models";
import { generateModels, loadProtoFileByProtobufjs } from "../../../utils";

const EXPECTED_MESSAGE_OBJ: IEnumMessageJSON = {
    fEnum: TestEnum[TestEnum.BAR]
}

const INITIAL_MESSAGE_OBJ: IEnumMessageJSON = {
    fEnum: TestEnum[TestEnum.ZERO]
}

describe("Enum value types", () => {
    const protoFilePath = path.join(__dirname, 'enum-types.proto');
    const pjsScalarTypes = loadProtoFileByProtobufjs(protoFilePath, 'enum_types.EnumMessage', EXPECTED_MESSAGE_OBJ);

    beforeAll(() => {
        generateModels(__dirname);
    })

    it("initial", () => {
        const cfJson = new EnumMessage().toJSON();
        expect(INITIAL_MESSAGE_OBJ).toStrictEqual(cfJson);
    })

    it("constructor", () => {
        const cfMessageA = new EnumMessage().fromJSON(EXPECTED_MESSAGE_OBJ);
        const cfJsonB = new EnumMessage(cfMessageA).toJSON();
        expect(EXPECTED_MESSAGE_OBJ).toStrictEqual(cfJsonB)
    })

    it("encode", () => {
        const cfBuffer = new EnumMessage().fromJSON(EXPECTED_MESSAGE_OBJ).serialize();
        expect(pjsScalarTypes.buffer).toStrictEqual(cfBuffer)
    })

    it("decode", () => {
        const cfJson = new EnumMessage().deserialize(pjsScalarTypes.buffer).toJSON();
        expect(EXPECTED_MESSAGE_OBJ).toStrictEqual(cfJson);
    })
    
    it("fromJSON/toJSON", () => {
        const cfJson = new EnumMessage().fromJSON(EXPECTED_MESSAGE_OBJ).toJSON();
        expect(pjsScalarTypes.json).toStrictEqual(cfJson);
    })
});