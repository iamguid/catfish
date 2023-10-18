import path from "node:path";
import * as pjs from "protobufjs";
import Long from "long";
import { ScalarTypes, ScalarTypesJSON } from "./scalar-types_models";
import { generateModels, loadProtoFileByProtobufjs } from "../../../utils";

pjs.util.Long = Long

const EXPECTED_MESSAGE_OBJ: ScalarTypesJSON = {
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

const INITIAL_MESSAGE_OBJ: ScalarTypesJSON = {
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
    const pjsScalarTypes = loadProtoFileByProtobufjs(protoFilePath, 'scalar_types.ScalarTypes', EXPECTED_MESSAGE_OBJ);

    beforeAll(() => {
        generateModels(__dirname);
    })

    it("initial", () => {
        const cfJson = new ScalarTypes().toJSON();
        expect(INITIAL_MESSAGE_OBJ).toStrictEqual(cfJson);
    })

    it("constructor", () => {
        const cfMessageA = new ScalarTypes().fromJSON(EXPECTED_MESSAGE_OBJ);
        const cfJsonB = new ScalarTypes(cfMessageA).toJSON();
        expect(EXPECTED_MESSAGE_OBJ).toStrictEqual(cfJsonB);
    })

    it("encode", () => {
        const cfBuffer = new ScalarTypes().fromJSON(EXPECTED_MESSAGE_OBJ).serialize();
        expect(pjsScalarTypes.buffer).toStrictEqual(cfBuffer)
    })

    it("decode", () => {
        const cfJson = new ScalarTypes().deserialize(pjsScalarTypes.buffer).toJSON();
        expect(EXPECTED_MESSAGE_OBJ).toStrictEqual(cfJson);
    })
    
    it("fromJSON/toJSON", () => {
        const cfJson = new ScalarTypes().fromJSON(EXPECTED_MESSAGE_OBJ).toJSON();
        expect(pjsScalarTypes.json).toStrictEqual(cfJson);
    })
});