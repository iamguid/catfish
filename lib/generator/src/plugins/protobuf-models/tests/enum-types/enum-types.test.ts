import path from "node:path";
import { EnumMessage, TestEnum, EnumMessageJSON } from "./enum-types_models";
import { generateModels, loadProtoFileByProtobufjs } from "../utils";

const FILLED_MESSAGE_JSON: EnumMessageJSON = {
    fEnum: TestEnum[TestEnum.BAR]
}

const EMPTY_MESSAGE_JSON: EnumMessageJSON = {
    fEnum: TestEnum[TestEnum.ZERO]
}

describe("Enum value types", () => {
    const protoFilePath = path.join(__dirname, 'enum-types.proto');
    const pjsFilled = loadProtoFileByProtobufjs(protoFilePath, 'enum_types.EnumMessage', FILLED_MESSAGE_JSON);
    const pjsEmpty = loadProtoFileByProtobufjs(protoFilePath, 'enum_types.EnumMessage', EMPTY_MESSAGE_JSON);

    it("constructor filled message", () => {
        const cfMessageA = new EnumMessage().fromJSON(FILLED_MESSAGE_JSON);
        const cfJsonB = new EnumMessage(cfMessageA).toJSON();
        expect(FILLED_MESSAGE_JSON).toStrictEqual(cfJsonB)
    })

    it("serialize filled message", () => {
        const cfBuffer = new EnumMessage().fromJSON(FILLED_MESSAGE_JSON).serialize();
        expect(pjsFilled.buffer).toStrictEqual(cfBuffer)
    })

    it("deserialize filled message", () => {
        const cfJson = new EnumMessage().deserialize(pjsFilled.buffer).toJSON();
        expect(FILLED_MESSAGE_JSON).toStrictEqual(cfJson);
    })
    
    it("fromJSON/toJSON filled message", () => {
        const cfJson = new EnumMessage().fromJSON(FILLED_MESSAGE_JSON).toJSON();
        expect(pjsFilled.json).toStrictEqual(cfJson);
    })

    it("clone filled message", () => {
        const cfJson = new EnumMessage().fromJSON(FILLED_MESSAGE_JSON).clone().toJSON();
        expect(FILLED_MESSAGE_JSON).not.toBe(cfJson);
        expect(FILLED_MESSAGE_JSON).toStrictEqual(cfJson);
    })

    it("constructor empty message", () => {
        const cfJson = new EnumMessage().toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson)
    })

    it("serialize empty message", () => {
        const cfBuffer = new EnumMessage().serialize();
        expect(pjsEmpty.buffer).toStrictEqual(cfBuffer)
    })

    it("deserialize empty message", () => {
        const cfJson = new EnumMessage().deserialize(pjsEmpty.buffer).toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson);
    })

    it("toJSON/fromJSON empty message", () => {
        const cfJson = new EnumMessage().fromJSON(EMPTY_MESSAGE_JSON).toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson);
    })

    it("clone empty message", () => {
        const cfJson = new EnumMessage().clone().toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson);
    })
});