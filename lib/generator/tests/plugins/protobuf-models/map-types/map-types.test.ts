import path from "node:path";
import * as pjs from "protobufjs";
import Long from "long";
import { generateModels, loadProtoFileByProtobufjs } from "../../../utils";
import { MapTypes, MapTypesJSON, SimpleEnum } from "./map-types_models";

pjs.util.Long = Long

const EXPECTED_MESSAGE_OBJ: MapTypesJSON = {
    mapInt32String: { 1: "2", 3: "4" },
    mapInt32Bytes: { 5: pjs.util.base64.encode(Buffer.from([6, 7, 8]), 0, 3) },
    mapInt32Bool: { 9: true, 10: false },
    mapInt32Message: { 11: { a: 12 }, 13: { a: 14 } },
    mapInt32Enum: { 15: SimpleEnum[SimpleEnum.UNSPECIFIED] },
    mapStringString: { "16": "17" },
    mapUint64Int32: { "18": 19 },
}

const INITIAL_MESSAGE_OBJ: MapTypesJSON = {
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
    const pjsScalarTypes = loadProtoFileByProtobufjs(protoFilePath, 'map_types.MapTypes', EXPECTED_MESSAGE_OBJ);

    beforeAll(() => {
        // generateModels(__dirname);
    })

    it("initial", () => {
        const cfJson = new MapTypes().toJSON();
        expect(INITIAL_MESSAGE_OBJ).toStrictEqual(cfJson);
    })

    it("constructor", () => {
        const cfMessageA = new MapTypes().fromJSON(EXPECTED_MESSAGE_OBJ);
        const cfJsonB = new MapTypes(cfMessageA).toJSON();
        expect(EXPECTED_MESSAGE_OBJ).toStrictEqual(cfJsonB);
    })

    it("encode", () => {
        const cfBuffer = new MapTypes().fromJSON(EXPECTED_MESSAGE_OBJ).serialize();
        expect(pjsScalarTypes.buffer).toStrictEqual(cfBuffer)
    })

    it("decode", () => {
        const cfJson = new MapTypes().deserialize(pjsScalarTypes.buffer).toJSON();
        expect(EXPECTED_MESSAGE_OBJ).toStrictEqual(cfJson);
    })
    
    it("fromJSON/toJSON", () => {
        const cfJson = new MapTypes().fromJSON(EXPECTED_MESSAGE_OBJ).toJSON();
        expect(pjsScalarTypes.json).toStrictEqual(cfJson);
    })
});