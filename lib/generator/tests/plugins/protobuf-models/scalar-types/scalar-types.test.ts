import path from "node:path";
import protobuf from "protobufjs";
import { Project, ProtobufModelsPlugin } from "../../../../src/index";
import { IScalarTypes, ScalarTypes } from "./scalar-types_models";

const MESSAGE_OBJ: IScalarTypes = {
    fInt32: 1,
    fInt64: new protobuf.util.Long(2),
    fUint32: 3,
    fUint64: new protobuf.util.Long(4),
    fSint32: 5,
    fSint64: new protobuf.util.Long(6),
    fFixed32: 7,
    fFixed64: new protobuf.util.Long(8),
    fSfixed32: 9,
    fSfixed64: new protobuf.util.Long(10),
    fFloat: 11.5,
    fDouble: 12.5,
    fBool: true,
    fString: "14",
    fBytes: new Uint8Array([15, 16, 17]),
}

const PROTO_FILE = path.join(__dirname, 'scalar-types.proto');
const PJS_PROTO_ROOT = protobuf.loadSync(PROTO_FILE);
const PJS_SCALAR_TYPES = PJS_PROTO_ROOT.lookupType("scalar_types.ScalarTypes");
const PJS_SCALAR_TYPES_MESSAGE = PJS_SCALAR_TYPES.create(MESSAGE_OBJ);
const PJS_SCALAR_TYPES_BUFFER = PJS_SCALAR_TYPES.encode(PJS_SCALAR_TYPES_MESSAGE).finish();
const PJS_SCALAR_TYPES_JSON = PJS_SCALAR_TYPES_MESSAGE.toJSON();

// fs.writeFileSync(BIN_FILE, PJS_BUFFER)

describe("Scalar value types", () => {
    it("generation", () => {
        const project = new Project({
            protoDirPath: __dirname,
            outDirPath: __dirname,
        });

        project
            .load()
            .resgister(ProtobufModelsPlugin)
            .generate();
    })

    it("encode", () => {
        const cfBuffer = ScalarTypes.encode(MESSAGE_OBJ);
        expect(PJS_SCALAR_TYPES_BUFFER).toStrictEqual(cfBuffer)
    })

    it("decode", () => {
        const cfJson = ScalarTypes.toJSON(ScalarTypes.decode(PJS_SCALAR_TYPES_BUFFER));
        expect(PJS_SCALAR_TYPES_JSON).toStrictEqual(cfJson);
    })
});