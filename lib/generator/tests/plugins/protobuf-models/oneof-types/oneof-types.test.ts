import path from "node:path";
import { generateModels, loadProtoFileByProtobufjs } from "../../../utils";
import { OneofTypes, OneofTypesJSON } from "./oneof-types_models";

const EXPECTED_MESSAGE_OBJ: OneofTypesJSON = {
    fInt32: 42,
    testOneof: { oneofString: "test" },
}

const EXPECTED_MESSAGE_OBJ_PJS: any = {
    fInt32: 42,
    oneofString: "test",
}

const INITIAL_MESSAGE_OBJ: OneofTypesJSON = {
    fInt32: 0,
    testOneof: undefined,
}

describe("Oneof value types", () => {
    const protoFilePath = path.join(__dirname, 'oneof-types.proto');
    const pjsScalarTypes = loadProtoFileByProtobufjs(protoFilePath, 'oneof_types.OneofTypes', EXPECTED_MESSAGE_OBJ_PJS);

    beforeAll(() => {
        generateModels(__dirname);
    })

    it("initial", () => {
        const cfJson = new OneofTypes().toJSON();
        expect(INITIAL_MESSAGE_OBJ).toStrictEqual(cfJson);
    })

    it("constructor", () => {
        const cfMessageA = new OneofTypes().fromJSON(EXPECTED_MESSAGE_OBJ);
        const cfJsonB = new OneofTypes(cfMessageA).toJSON();
        expect(EXPECTED_MESSAGE_OBJ).toStrictEqual(cfJsonB)
    })

    it("encode", () => {
        const cfBuffer = new OneofTypes().fromJSON(EXPECTED_MESSAGE_OBJ).serialize();
        expect(pjsScalarTypes.buffer).toStrictEqual(cfBuffer)
    })

    it("decode", () => {
        const cfJson = new OneofTypes().deserialize(pjsScalarTypes.buffer).toJSON();
        expect(EXPECTED_MESSAGE_OBJ).toStrictEqual(cfJson);
    })
    
    it("fromJSON/toJSON", () => {
        const cfJson = new OneofTypes().fromJSON(EXPECTED_MESSAGE_OBJ).toJSON();
        expect(EXPECTED_MESSAGE_OBJ).toStrictEqual(cfJson);
    })
});