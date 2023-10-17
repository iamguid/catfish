import path from "node:path";
import * as pjs from "protobufjs";
import Long from "long";
// import { IScalarTypes, ScalarTypes } from "./scalar-types_models";
import { generateModels, loadProtoFileByProtobufjs, traverseByModels } from "../../../utils";

pjs.util.Long = Long

// const EXPECTED_MESSAGE_OBJ: IScalarTypes = {
//     fInt32: 1,
//     fInt64: Long.fromValue(2, false),
//     fUint32: 3,
//     fUint64: Long.fromValue(4, true),
//     fSint32: 5,
//     fSint64: Long.fromValue(6, false),
//     fFixed32: 7,
//     fFixed64: Long.fromValue(8, true),
//     fSfixed32: 9,
//     fSfixed64: Long.fromValue(10, false),
//     fFloat: 11.5,
//     fDouble: 12.5,
//     fBool: true,
//     fString: "14",
//     fBytes: Buffer.from([15, 16, 17]),
// }

// const INITIAL_MESSAGE_OBJ: IScalarTypes = {
//     fInt32: 0,
//     fInt64: Long.fromValue(0, false),
//     fUint32: 0,
//     fUint64: Long.fromValue(0, true),
//     fSint32: 0,
//     fSint64: Long.fromValue(0, false),
//     fFixed32: 0,
//     fFixed64: Long.fromValue(0, true),
//     fSfixed32: 0,
//     fSfixed64: Long.fromValue(0, false),
//     fFloat: 0,
//     fDouble: 0,
//     fBool: false,
//     fString: "",
//     fBytes: Buffer.from([]),
// }

describe("Map value types", () => {
    // const protoFilePath = path.join(__dirname, 'scalar-types.proto');
    // const pjsScalarTypes = loadProtoFileByProtobufjs(protoFilePath, 'scalar_types.ScalarTypes', EXPECTED_MESSAGE_OBJ);

    beforeAll(() => {
        generateModels(__dirname);
    })

    // it("initial", () => {
    //     const cfMessage = new ScalarTypes();

    //     traverseByModels(cfMessage, INITIAL_MESSAGE_OBJ, (fieldA, fieldB) => {
    //         expect(fieldA).toStrictEqual(fieldB);
    //     })
    // })

    // it("constructor", () => {
    //     const cfMessage = new ScalarTypes(EXPECTED_MESSAGE_OBJ);

    //     traverseByModels(cfMessage, EXPECTED_MESSAGE_OBJ, (fieldA, fieldB) => {
    //         expect(fieldA).toStrictEqual(fieldB);
    //     })
    // })

    // it("encode", () => {
    //     const cfBuffer = ScalarTypes.encode(EXPECTED_MESSAGE_OBJ);
    //     expect(pjsScalarTypes.buffer).toStrictEqual(cfBuffer)
    // })

    // it("decode", () => {
    //     const cfMessage = ScalarTypes.decode(pjsScalarTypes.buffer);

    //     traverseByModels(cfMessage, EXPECTED_MESSAGE_OBJ, (fieldA, fieldB) => {
    //         expect(fieldA).toStrictEqual(fieldB);
    //     })
    // })
    
    // it("toJSON", () => {
    //     const cfJson = ScalarTypes.toJSON(ScalarTypes.decode(pjsScalarTypes.buffer));
    //     expect(pjsScalarTypes.json).toStrictEqual(cfJson);
    // })
    
    // it("fromJSON", () => {
    //     const cfJson = ScalarTypes.toJSON(new ScalarTypes(EXPECTED_MESSAGE_OBJ));
    //     const cfMessage = ScalarTypes.fromJSON(cfJson);

    //     traverseByModels(cfMessage, EXPECTED_MESSAGE_OBJ, (fieldA, fieldB) => {
    //         expect(fieldA).toStrictEqual(fieldB);
    //     })
    // })

    it("Simple", () => {
        expect(true).toBeTruthy()
    })
});