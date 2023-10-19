import path from "node:path";
import { TestMessage, TestMessageJSON } from "./imports_models";
import { generateModels, loadProtoFileByProtobufjs } from "../utils";

const FILLED_MESSAGE_JSON: TestMessageJSON = {
    fImported: { test: 42 }
}

const EMPTY_MESSAGE_JSON: TestMessageJSON = {
    fImported: { test: 0 }
}

describe("Imports", () => {
    const protoFilePath = path.join(__dirname, 'imports.proto');
    const pjsFilled = loadProtoFileByProtobufjs(protoFilePath, 'test.TestMessage', FILLED_MESSAGE_JSON);
    const pjsEmpty = loadProtoFileByProtobufjs(protoFilePath, 'test.TestMessage', EMPTY_MESSAGE_JSON);

    it("constructor filled message", () => {
        const cfMessageA = new TestMessage().fromJSON(FILLED_MESSAGE_JSON);
        const cfJsonB = new TestMessage(cfMessageA).toJSON();
        expect(FILLED_MESSAGE_JSON).toStrictEqual(cfJsonB)
    })

    it("serialize filled message", () => {
        const cfBuffer = new TestMessage().fromJSON(FILLED_MESSAGE_JSON).serialize();
        expect(pjsFilled.buffer).toStrictEqual(cfBuffer)
    })

    it("deserialize filled message", () => {
        const cfJson = new TestMessage().deserialize(pjsFilled.buffer).toJSON();
        expect(FILLED_MESSAGE_JSON).toStrictEqual(cfJson);
    })
    
    it("fromJSON/toJSON filled message", () => {
        const cfJson = new TestMessage().fromJSON(FILLED_MESSAGE_JSON).toJSON();
        expect(pjsFilled.json).toStrictEqual(cfJson);
    })

    it("clone filled message", () => {
        const cfJson = new TestMessage().fromJSON(FILLED_MESSAGE_JSON).clone().toJSON();
        expect(FILLED_MESSAGE_JSON).not.toBe(cfJson);
        expect(FILLED_MESSAGE_JSON).toStrictEqual(cfJson);
    })

    it("constructor empty message", () => {
        const cfJson = new TestMessage().toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson)
    })

    it("serialize empty message", () => {
        const cfBuffer = new TestMessage().serialize();
        expect(pjsEmpty.buffer).toStrictEqual(cfBuffer)
    })

    it("deserialize empty message", () => {
        const cfJson = new TestMessage().deserialize(pjsEmpty.buffer).toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson);
    })

    it("toJSON/fromJSON empty message", () => {
        const cfJson = new TestMessage().fromJSON(EMPTY_MESSAGE_JSON).toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson);
    })

    it("clone empty message", () => {
        const cfJson = new TestMessage().clone().toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson);
    })
});