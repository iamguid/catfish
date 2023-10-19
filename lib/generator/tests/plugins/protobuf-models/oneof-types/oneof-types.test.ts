import path from "node:path";
import { generateModels, loadProtoFileByProtobufjs } from "../utils";
import { OneofTypes, OneofTypesJSON } from "./oneof-types_models";

const FILLED_MESSAGE_JSON: OneofTypesJSON = {
    fInt32: 42,
    testOneof: { oneofString: "test" },
}

const FILLED_MESSAGE_PJS_JSON: any = {
    fInt32: 42,
    oneofString: "test",
}

const EMPTY_MESSAGE_JSON: OneofTypesJSON = {
    fInt32: 0,
}

const EMPTY_MESSAGE_PJS_JSON: any = {
    fInt32: 0,
}

describe("Oneof value types", () => {
    const protoFilePath = path.join(__dirname, 'oneof-types.proto');
    const pjsFilled = loadProtoFileByProtobufjs(protoFilePath, 'oneof_types.OneofTypes', FILLED_MESSAGE_PJS_JSON);
    const pjsEmpty = loadProtoFileByProtobufjs(protoFilePath, 'oneof_types.OneofTypes', EMPTY_MESSAGE_PJS_JSON);

    it("constructor filled message", () => {
        const cfMessageA = new OneofTypes().fromJSON(FILLED_MESSAGE_JSON);
        const cfJsonB = new OneofTypes(cfMessageA).toJSON();
        expect(FILLED_MESSAGE_JSON).toStrictEqual(cfJsonB)
    })

    it("serialize filled message", () => {
        const cfBuffer = new OneofTypes().fromJSON(FILLED_MESSAGE_JSON).serialize();
        expect(pjsFilled.buffer).toStrictEqual(cfBuffer)
    })

    it("deserialize filled message", () => {
        const cfJson = new OneofTypes().deserialize(pjsFilled.buffer).toJSON();
        expect(FILLED_MESSAGE_JSON).toStrictEqual(cfJson);
    })
    
    it("fromJSON/toJSON filled message", () => {
        const cfJson = new OneofTypes().fromJSON(FILLED_MESSAGE_JSON).toJSON();
        expect(FILLED_MESSAGE_JSON).toStrictEqual(cfJson);
    })

    it("clone filled message", () => {
        const cfJson = new OneofTypes().fromJSON(FILLED_MESSAGE_JSON).clone().toJSON();
        expect(FILLED_MESSAGE_JSON).not.toBe(cfJson);
        expect(FILLED_MESSAGE_JSON).toStrictEqual(cfJson);
    })

    it("constructor empty message", () => {
        const cfJson = new OneofTypes().toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson)
    })

    it("serialize empty message", () => {
        const cfBuffer = new OneofTypes().serialize();
        expect(pjsEmpty.buffer).toStrictEqual(cfBuffer)
    })

    it("deserialize empty message", () => {
        const cfJson = new OneofTypes().deserialize(pjsEmpty.buffer).toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson);
    })

    it("toJSON/fromJSON empty message", () => {
        const cfJson = new OneofTypes().fromJSON(EMPTY_MESSAGE_JSON).toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson);
    })

    it("clone empty message", () => {
        const cfJson = new OneofTypes().clone().toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson);
    })
});