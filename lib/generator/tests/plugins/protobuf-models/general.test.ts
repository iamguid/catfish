import { Project, ProtobufModelsPlugin } from "../../../src/index"

describe("General protobuf-models generator test", () => {
    [
        "any_test.proto",
        "map_proto3_unittest.proto",
        "test_messages_proto3.proto",
        "unittest_drop_unknown_fields.proto",
        "unittest_empty.proto",
        "unittest_enormous_descriptor.proto",
        "unittest_import.proto",
        "unittest_import_lite.proto",
        "unittest_import_public.proto",
        "unittest_import_public_lite.proto",
        "unittest_lazy_dependencies_enum.proto",
        "unittest_lite_imports_nonlite.proto",
        "unittest_no_generic_services.proto",
        "unittest_preserve_unknown_enum.proto",
        "unittest_proto3.proto",
        "unittest_proto3_arena.proto",
        "unittest_proto3_arena_lite.proto",
        "unittest_proto3_lite.proto",
        "unittest_proto3_optional.proto",
        "unittest_well_known_types.proto",
        "wrappers.proto",
    ].forEach(protofile => {
        it(`Should generate models for ${protofile}`, async () => {
            const project = new Project({
                protoDirPath: `${__dirname}/../../../../../test-protos`,
                outDirPath: `${__dirname}/generated`,
            });

            project
                .load()
                .resgister(ProtobufModelsPlugin)
                .generate();
        })
    })
})