import path from "node:path";
import * as pjs from "protobufjs";
import Long from "long";
import { generateModels, loadProtoFileByProtobufjs } from "../../../utils";
import { RepeatedTypes, RepeatedTypesJSON, SimpleEnum } from "./repeated-types_models";

pjs.util.Long = Long

const EXPECTED_MESSAGE_OBJ: RepeatedTypesJSON = {
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

const INITIAL_MESSAGE_OBJ: RepeatedTypesJSON = {
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
    const pjsScalarTypes = loadProtoFileByProtobufjs(protoFilePath, 'repeated_types.RepeatedTypes', EXPECTED_MESSAGE_OBJ);

    beforeAll(() => {
        generateModels(__dirname);
    })

    it("initial", () => {
        const cfJson = new RepeatedTypes().toJSON();
        expect(INITIAL_MESSAGE_OBJ).toStrictEqual(cfJson);
    })

    it("constructor", () => {
        const cfMessageA = new RepeatedTypes().fromJSON(EXPECTED_MESSAGE_OBJ);
        const cfJsonB = new RepeatedTypes(cfMessageA).toJSON();
        expect(EXPECTED_MESSAGE_OBJ).toStrictEqual(cfJsonB);
    })

    it("encode", () => {
        const cfBuffer = new RepeatedTypes().fromJSON(EXPECTED_MESSAGE_OBJ).serialize();
        expect(pjsScalarTypes.buffer).toStrictEqual(cfBuffer);
    })

    it("decode", () => {
        const cfJson = new RepeatedTypes().deserialize(pjsScalarTypes.buffer).toJSON();
        expect(EXPECTED_MESSAGE_OBJ).toStrictEqual(cfJson);
    })
    
    it("fromJSON/toJSON", () => {
        const cfJson = new RepeatedTypes().fromJSON(EXPECTED_MESSAGE_OBJ).toJSON();
        expect(pjsScalarTypes.json).toStrictEqual(cfJson);
    })
});