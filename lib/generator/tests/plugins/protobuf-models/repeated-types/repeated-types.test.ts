import path from "node:path";
import * as pjs from "protobufjs";
import { generateModels, loadProtoFileByProtobufjs } from "../../../utils";
import { RepeatedTypes, RepeatedTypesJSON, SimpleEnum } from "./repeated-types_models";

const FILLED_MESSAGE_JSON: RepeatedTypesJSON = {
    repeatedInt32: [1, 2, 3],
    repeatedBytes: [
        pjs.util.base64.encode(Buffer.from([4, 5, 6]), 0, 3),
        pjs.util.base64.encode(Buffer.from([7, 8, 9]), 0, 3),
    ],
    repeatedString: ["10", "11", "12"],
    repeatedBool: [true, false, true],
    repeatedUint64: ["13", "14", "15"],
    repeatedEnum: [
        SimpleEnum[SimpleEnum.UNSPECIFIED],
        SimpleEnum[SimpleEnum.BAZ],
        SimpleEnum[SimpleEnum.FOO],
        SimpleEnum[SimpleEnum.BAR]
    ],
    repeatedMessage: [
        { a: 16 },
        { a: 17 },
        { a: 18 },
    ],
}

const EMPTY_MESSAGE_JSON: RepeatedTypesJSON = {
    repeatedInt32: [],
    repeatedBytes: [],
    repeatedString: [],
    repeatedBool: [],
    repeatedUint64: [],
    repeatedEnum: [],
    repeatedMessage: [],
}

describe("Repeated value types", () => {
    const protoFilePath = path.join(__dirname, 'repeated-types.proto');
    const pjsFilled = loadProtoFileByProtobufjs(protoFilePath, 'repeated_types.RepeatedTypes', FILLED_MESSAGE_JSON);
    const pjsEmpty = loadProtoFileByProtobufjs(protoFilePath, 'repeated_types.RepeatedTypes', EMPTY_MESSAGE_JSON);

    beforeAll(() => {
        generateModels(__dirname);
    })

    it("constructor filled message", () => {
        const cfMessageA = new RepeatedTypes().fromJSON(FILLED_MESSAGE_JSON);
        const cfJsonB = new RepeatedTypes(cfMessageA).toJSON();
        expect(FILLED_MESSAGE_JSON).toStrictEqual(cfJsonB)
    })

    it("serialize filled message", () => {
        const cfBuffer = new RepeatedTypes().fromJSON(FILLED_MESSAGE_JSON).serialize();
        expect(pjsFilled.buffer).toStrictEqual(cfBuffer)
    })

    it("deserialize filled message", () => {
        const cfJson = new RepeatedTypes().deserialize(pjsFilled.buffer).toJSON();
        expect(FILLED_MESSAGE_JSON).toStrictEqual(cfJson);
    })
    
    it("fromJSON/toJSON filled message", () => {
        const cfJson = new RepeatedTypes().fromJSON(FILLED_MESSAGE_JSON).toJSON();
        expect(pjsFilled.json).toStrictEqual(cfJson);
    })

    it("clone filled message", () => {
        const cfJson = new RepeatedTypes().fromJSON(FILLED_MESSAGE_JSON).clone().toJSON();
        expect(FILLED_MESSAGE_JSON).not.toBe(cfJson);
        expect(FILLED_MESSAGE_JSON).toStrictEqual(cfJson);
    })

    it("constructor empty message", () => {
        const cfJson = new RepeatedTypes().toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson)
    })

    it("serialize empty message", () => {
        const cfBuffer = new RepeatedTypes().serialize();
        expect(pjsEmpty.buffer).toStrictEqual(cfBuffer)
    })

    it("deserialize empty message", () => {
        const cfJson = new RepeatedTypes().deserialize(pjsEmpty.buffer).toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson);
    })

    it("toJSON/fromJSON empty message", () => {
        const cfJson = new RepeatedTypes().fromJSON(EMPTY_MESSAGE_JSON).toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson);
    })

    it("clone empty message", () => {
        const cfJson = new RepeatedTypes().clone().toJSON();
        expect(EMPTY_MESSAGE_JSON).toStrictEqual(cfJson);
    })
});