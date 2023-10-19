import path from "node:path";
import { TestEnum, SimpleMessage, OptionalMessage, OptionalMessageJSON } from "./optional-types_models";
import { generateModels, loadProtoFileByProtobufjs } from "../utils";

const FILLED_MESSAGE_JSON: OptionalMessageJSON = {
    oInt32: 42,
    oString: "test",
}

const EMPTY_MESSAGE_JSON: OptionalMessageJSON = {}

describe("Optional value types", () => {
    const protoFilePath = path.join(__dirname, 'optional-types.proto');
    const pjsFilled = loadProtoFileByProtobufjs(protoFilePath, 'optional_types.OptionalMessage', FILLED_MESSAGE_JSON);
    const pjsEmpty = loadProtoFileByProtobufjs(protoFilePath, 'optional_types.OptionalMessage', EMPTY_MESSAGE_JSON);

    it("constructor filled message", () => {
        const cfMessageA = new OptionalMessage().fromJSON(FILLED_MESSAGE_JSON);
        const cfJsonB = new OptionalMessage(cfMessageA).toJSON();
        expect(FILLED_MESSAGE_JSON).toStrictEqual(cfJsonB)
    })

    it("serialize filled message", () => {
        const cfBuffer = new OptionalMessage().fromJSON(FILLED_MESSAGE_JSON).serialize();
        expect(pjsFilled.buffer).toStrictEqual(cfBuffer)
    })

    it("deserialize filled message", () => {
        const cfJson = new OptionalMessage().deserialize(pjsFilled.buffer).toJSON();
        expect(FILLED_MESSAGE_JSON).toStrictEqual(cfJson);
    })
    
    it("fromJSON/toJSON filled message", () => {
        const cfJson = new OptionalMessage().fromJSON(FILLED_MESSAGE_JSON).toJSON();
        expect(pjsFilled.json).toStrictEqual(cfJson);
    })

    it("clone filled message", () => {
        const cfJson = new OptionalMessage().fromJSON(FILLED_MESSAGE_JSON).clone().toJSON();
        expect(FILLED_MESSAGE_JSON).not.toBe(cfJson);
        expect(FILLED_MESSAGE_JSON).toStrictEqual(cfJson);
    })

    it("constructor empty message", () => {
        const cfJson = new OptionalMessage().toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson)
    })

    it("serialize empty message", () => {
        const cfBuffer = new OptionalMessage().serialize();
        expect(pjsEmpty.buffer).toStrictEqual(cfBuffer)
    })

    it("deserialize empty message", () => {
        const cfJson = new OptionalMessage().deserialize(pjsEmpty.buffer).toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson);
    })

    it("toJSON/fromJSON empty message", () => {
        const cfJson = new OptionalMessage().fromJSON(EMPTY_MESSAGE_JSON).toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson);
    })

    it("clone empty message", () => {
        const cfJson = new OptionalMessage().clone().toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson);
    })
});
