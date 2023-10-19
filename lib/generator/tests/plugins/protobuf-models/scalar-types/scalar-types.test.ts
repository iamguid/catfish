import path from "node:path";
import * as pjs from "protobufjs";
import { ScalarTypes, ScalarTypesJSON } from "./scalar-types_models";
import { generateModels, loadProtoFileByProtobufjs } from "../utils";

const FILLED_MESSAGE_JSON: ScalarTypesJSON = {
    fInt32: 1,
    fInt64: '2',
    fUint32: 3,
    fUint64: '4',
    fSint32: 5,
    fSint64: '6',
    fFixed32: 7,
    fFixed64: '8',
    fSfixed32: 9,
    fSfixed64: '10',
    fFloat: 11.5,
    fDouble: 12.5,
    fBool: true,
    fString: '14',
    fBytes: pjs.util.base64.encode(Buffer.from([15, 16, 17]), 0, 3),
}

const EMPTY_MESSAGE_JSON: ScalarTypesJSON = {
    fInt32: 0,
    fInt64: '0',
    fUint32: 0,
    fUint64: '0',
    fSint32: 0,
    fSint64: '0',
    fFixed32: 0,
    fFixed64: '0',
    fSfixed32: 0,
    fSfixed64: '0',
    fFloat: 0,
    fDouble: 0,
    fBool: false,
    fString: '',
    fBytes: '',
}

describe("Scalar value types", () => {
    const protoFilePath = path.join(__dirname, 'scalar-types.proto');
    const pjsFilled = loadProtoFileByProtobufjs(protoFilePath, 'scalar_types.ScalarTypes', FILLED_MESSAGE_JSON);
    const pjsEmpty = loadProtoFileByProtobufjs(protoFilePath, 'scalar_types.ScalarTypes', EMPTY_MESSAGE_JSON);

    it("constructor filled message", () => {
        const cfMessageA = new ScalarTypes().fromJSON(FILLED_MESSAGE_JSON);
        const cfJsonB = new ScalarTypes(cfMessageA).toJSON();
        expect(FILLED_MESSAGE_JSON).toStrictEqual(cfJsonB)
    })

    it("serialize filled message", () => {
        const cfBuffer = new ScalarTypes().fromJSON(FILLED_MESSAGE_JSON).serialize();
        expect(pjsFilled.buffer).toStrictEqual(cfBuffer)
    })

    it("deserialize filled message", () => {
        const cfJson = new ScalarTypes().deserialize(pjsFilled.buffer).toJSON();
        expect(FILLED_MESSAGE_JSON).toStrictEqual(cfJson);
    })
    
    it("fromJSON/toJSON filled message", () => {
        const cfJson = new ScalarTypes().fromJSON(FILLED_MESSAGE_JSON).toJSON();
        expect(pjsFilled.json).toStrictEqual(cfJson);
    })

    it("clone filled message", () => {
        const cfJson = new ScalarTypes().fromJSON(FILLED_MESSAGE_JSON).clone().toJSON();
        expect(FILLED_MESSAGE_JSON).not.toBe(cfJson);
        expect(FILLED_MESSAGE_JSON).toStrictEqual(cfJson);
    })

    it("constructor empty message", () => {
        const cfJson = new ScalarTypes().toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson)
    })

    it("serialize empty message", () => {
        const cfBuffer = new ScalarTypes().serialize();
        expect(pjsEmpty.buffer).toStrictEqual(cfBuffer)
    })

    it("deserialize empty message", () => {
        const cfJson = new ScalarTypes().deserialize(pjsEmpty.buffer).toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson);
    })

    it("toJSON/fromJSON empty message", () => {
        const cfJson = new ScalarTypes().fromJSON(EMPTY_MESSAGE_JSON).toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson);
    })

    it("clone empty message", () => {
        const cfJson = new ScalarTypes().clone().toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson);
    })
});