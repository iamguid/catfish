import path from "node:path";
import * as pjs from "protobufjs";
import Long from "long";
import { IScalarTypes, ScalarTypes } from "./scalar-types_models";
import { generateModels, loadProtoFileByProtobufjs, traverseByModels } from "../../../utils";

pjs.util.Long = Long

const MESSAGE_OBJ: IScalarTypes = {
    fInt32: 1,
    fInt64: Long.fromValue(2, false),
    fUint32: 3,
    fUint64: Long.fromValue(4, true),
    fSint32: 5,
    fSint64: Long.fromValue(6, false),
    fFixed32: 7,
    fFixed64: Long.fromValue(8, true),
    fSfixed32: 9,
    fSfixed64: Long.fromValue(10, false),
    fFloat: 11.5,
    fDouble: 12.5,
    fBool: true,
    fString: "14",
    fBytes: Buffer.from([15, 16, 17]),
}

describe("Scalar value types", () => {
    const protoFilePath = path.join(__dirname, 'scalar-types.proto');
    const pjsScalarTypes = loadProtoFileByProtobufjs(protoFilePath, 'scalar_types.ScalarTypes', MESSAGE_OBJ);

    beforeAll(() => {
        generateModels(__dirname);
    })

    it("constructor", () => {
        const cfMessage = new ScalarTypes(MESSAGE_OBJ);

        traverseByModels(cfMessage, MESSAGE_OBJ, (fieldA, fieldB) => {
            expect(fieldA).toStrictEqual(fieldB);
        })
    })

    it("encode", () => {
        const cfBuffer = ScalarTypes.encode(MESSAGE_OBJ);
        expect(pjsScalarTypes.buffer).toStrictEqual(cfBuffer)
    })

    it("decode", () => {
        const cfMessage = ScalarTypes.decode(pjsScalarTypes.buffer);

        traverseByModels(cfMessage, MESSAGE_OBJ, (fieldA, fieldB) => {
            expect(fieldA).toStrictEqual(fieldB);
        })
    })
    
    it("toJSON", () => {
        const cfJson = ScalarTypes.toJSON(ScalarTypes.decode(pjsScalarTypes.buffer));
        expect(pjsScalarTypes.json).toStrictEqual(cfJson);
    })
    
    it("fromJSON", () => {
        const cfJson = ScalarTypes.toJSON(new ScalarTypes(MESSAGE_OBJ));
        const cfMessage = ScalarTypes.fromJSON(cfJson);

        traverseByModels(cfMessage, MESSAGE_OBJ, (fieldA, fieldB) => {
            expect(fieldA).toStrictEqual(fieldB);
        })
    })
});