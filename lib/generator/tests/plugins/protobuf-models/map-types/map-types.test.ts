import path from "node:path";
import * as pjs from "protobufjs";
import { generateModels, loadProtoFileByProtobufjs } from "../utils";
import { MapTypes, MapTypesJSON, SimpleEnum } from "./map-types_models";

const FILLED_MESSAGE_JSON: MapTypesJSON = {
    mapInt32String: { 1: "2", 3: "4" },
    mapInt32Bytes: { 5: pjs.util.base64.encode(Buffer.from([6, 7, 8]), 0, 3) },
    mapInt32Bool: { 9: true, 10: false },
    mapInt32Message: { 11: { a: 12 }, 13: { a: 14 } },
    mapInt32Enum: { 15: SimpleEnum[SimpleEnum.UNSPECIFIED] },
    mapStringString: { "16": "17" },
    mapUint64Int32: { "18": 19 },
}

const EMPTY_MESSAGE_JSON: MapTypesJSON = {
    mapInt32String: { },
    mapInt32Bytes: { },
    mapInt32Bool: { },
    mapInt32Message: { },
    mapInt32Enum: { },
    mapStringString: { },
    mapUint64Int32: { },
}

describe("Map value types", () => {
    const protoFilePath = path.join(__dirname, 'map-types.proto');
    const pjsFilled = loadProtoFileByProtobufjs(protoFilePath, 'map_types.MapTypes', FILLED_MESSAGE_JSON);
    const pjsEmpty = loadProtoFileByProtobufjs(protoFilePath, 'map_types.MapTypes', EMPTY_MESSAGE_JSON);

    it("constructor filled message", () => {
        const cfMessageA = new MapTypes().fromJSON(FILLED_MESSAGE_JSON);
        const cfJsonB = new MapTypes(cfMessageA).toJSON();
        expect(FILLED_MESSAGE_JSON).toStrictEqual(cfJsonB)
    })

    it("serialize filled message", () => {
        const cfBuffer = new MapTypes().fromJSON(FILLED_MESSAGE_JSON).serialize();
        expect(pjsFilled.buffer).toStrictEqual(cfBuffer)
    })

    it("deserialize filled message", () => {
        const cfJson = new MapTypes().deserialize(pjsFilled.buffer).toJSON();
        expect(FILLED_MESSAGE_JSON).toStrictEqual(cfJson);
    })
    
    it("fromJSON/toJSON filled message", () => {
        const cfJson = new MapTypes().fromJSON(FILLED_MESSAGE_JSON).toJSON();
        expect(pjsFilled.json).toStrictEqual(cfJson);
    })

    it("clone filled message", () => {
        const cfJson = new MapTypes().fromJSON(FILLED_MESSAGE_JSON).clone().toJSON();
        expect(FILLED_MESSAGE_JSON).not.toBe(cfJson);
        expect(FILLED_MESSAGE_JSON).toStrictEqual(cfJson);
    })

    it("constructor empty message", () => {
        const cfJson = new MapTypes().toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson)
    })

    it("serialize empty message", () => {
        const cfBuffer = new MapTypes().serialize();
        expect(pjsEmpty.buffer).toStrictEqual(cfBuffer)
    })

    it("deserialize empty message", () => {
        const cfJson = new MapTypes().deserialize(pjsEmpty.buffer).toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson);
    })

    it("toJSON/fromJSON empty message", () => {
        const cfJson = new MapTypes().fromJSON(EMPTY_MESSAGE_JSON).toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson);
    })

    it("clone empty message", () => {
        const cfJson = new MapTypes().clone().toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson);
    })
});