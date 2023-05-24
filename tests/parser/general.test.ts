import fs from "node:fs"
import { parse } from "../../src/parser"

describe("General proto parser test", () => {
    [
        "any_test.proto",
        "any.proto",
        "api.proto",
        "duration.proto",
        "empty.proto",
        "field_mask.proto",
        "map_proto3_unittest.proto",
        "map_unittest.proto",
        "struct.proto",
        "test_messages_proto3.proto",
        "timestamp.proto",
        "type.proto",
        "unittest_drop_unknown_fields.proto",
        "unittest_no_field_presence.proto",
        "unittest_preserve_unknown_enum.proto",
        "unittest_proto3_arena_lite.proto",
        "unittest_proto3_arena.proto",
        "unittest_proto3_lite.proto",
        "unittest_proto3_optional.proto",
        "unittest_proto3.proto",
        "unittest_well_known_types.proto",
        "wrappers.proto",
    ].forEach(protofile => {
        it(`Should parse ${protofile}`, async () => {
            const content = fs.readFileSync(`./tests/protos/${protofile}`);
            const tree = parse(content.toString());
            expect(tree.toObject()).toMatchSnapshot();
        })
    })
})