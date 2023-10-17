import path from "node:path";
import { EnumMessage, IEnumMessage, TestEnum } from "./enum-types_models";
import { generateModels, loadProtoFileByProtobufjs, traverseByModels } from "../../../utils";

const EXPECTED_MESSAGE_OBJ: IEnumMessage = {
    fEnum: TestEnum.BAR
}

const INITIAL_MESSAGE_OBJ: IEnumMessage = {
    fEnum: TestEnum.ZERO
}

describe("Enum value types", () => {
    const protoFilePath = path.join(__dirname, 'enum-types.proto');
    const pjsScalarTypes = loadProtoFileByProtobufjs(protoFilePath, 'enum_types.EnumMessage', EXPECTED_MESSAGE_OBJ);

    beforeAll(() => {
        generateModels(__dirname);
    })

    it("initial", () => {
        const cfMessage = new EnumMessage();

        traverseByModels(cfMessage, INITIAL_MESSAGE_OBJ, (fieldA, fieldB) => {
            expect(fieldA).toStrictEqual(fieldB);
        })
    })

    it("constructor", () => {
        const cfMessage = new EnumMessage(EXPECTED_MESSAGE_OBJ);

        traverseByModels(cfMessage, EXPECTED_MESSAGE_OBJ, (fieldA, fieldB) => {
            expect(fieldA).toStrictEqual(fieldB);
        })
    })

    it("encode", () => {
        const cfBuffer = EnumMessage.encode(EXPECTED_MESSAGE_OBJ);
        expect(pjsScalarTypes.buffer).toStrictEqual(cfBuffer)
    })

    it("decode", () => {
        const cfMessage = EnumMessage.decode(pjsScalarTypes.buffer);

        traverseByModels(cfMessage, EXPECTED_MESSAGE_OBJ, (fieldA, fieldB) => {
            expect(fieldA).toStrictEqual(fieldB);
        })
    })
    
    it("toJSON", () => {
        const cfJson = EnumMessage.toJSON(EnumMessage.decode(pjsScalarTypes.buffer));
        expect(pjsScalarTypes.json).toStrictEqual(cfJson);
    })
    
    it("fromJSON", () => {
        const cfJson = EnumMessage.toJSON(new EnumMessage(EXPECTED_MESSAGE_OBJ));
        const cfMessage = EnumMessage.fromJSON(cfJson);

        traverseByModels(cfMessage, EXPECTED_MESSAGE_OBJ, (fieldA, fieldB) => {
            expect(fieldA).toStrictEqual(fieldB);
        })
    })
});