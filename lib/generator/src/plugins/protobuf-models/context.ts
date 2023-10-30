import { EnumDescriptor, MessageFieldDescriptor } from "@catfish/parser";
import { getJsonTypeByTypeInfo, getTsTypeByTypeInfo, getWireTypeByTypeInfo, getPjsFnNameByTypeInfo, getScalarDefaultValue, getTag } from "./utils";
import { TypeInfo } from "../../ProjectContext";
import { TypeMarker, snakeToCamel, upperCaseFirst } from "../../utils";
import { PluginOptions } from "./plugin";
import { ResolvedThingImport } from "../../ResolverV2";
import { ContextsRegistry, ExtractPluginContextFlat, PluginContextBuilded } from "../../PluginContext";

export type PluginContextFlatOut = ExtractPluginContextFlat<ReturnType<typeof buildPluginContext>>;

export const buildPluginContext = (registry: ContextsRegistry<PluginOptions>) => {
    return registry
        .extend('messages', async ({ ctx, def }) => ({
            ...ctx,
            classThing: def('model.class', ctx.desc, `${ctx.desc.name}`),
            jsonIfaceThing: def('model.jsonIface', ctx.desc, `${ctx.desc.name}JSON`),
        }))
        .extend('enums', async ({ ctx, def }) => ({
            ...ctx,
            enmType: def('model.enum', ctx.desc, ctx.desc.name)
        }))
        .extend('messagefields', async ({ ctx, use }) => {
            const fieldThing = await (ctx.typeInfo.descriptor ? use(['model.class', 'model.enum'], ctx.typeInfo.descriptor) : Promise.resolve(null))

            return {
                ...ctx,
                fieldThing,
                fieldName: snakeToCamel(ctx.msgFieldDesc.name),
                fieldTag: getTag(ctx.msgFieldDesc.fieldNumber, ctx.msgFieldDesc.repeated ? 2 : getWireTypeByTypeInfo(ctx.typeInfo))
            }
        })
        .extend('oneofs', async ({ ctx, def }) => ({
            ...ctx,
            fieldName: snakeToCamel(ctx.desc.name),
            typeThing: def('model.oneof.type', ctx.desc, `${snakeToCamel(ctx.desc.name)}OneofJSONType`),
            jsonTypeThing: def('model.oneof.jsonType', ctx.desc, `${snakeToCamel(ctx.desc.name)}OneofType`),
        }))
        .extend('maps', async ({ ctx, use }) => ({
            ...ctx,
            fieldName: snakeToCamel(ctx.desc.name),
            encodeMethodName: `encode${upperCaseFirst(snakeToCamel(ctx.desc.name))}`,
            decodeMethodName: `decode${upperCaseFirst(snakeToCamel(ctx.desc.name))}`,
            keyThing: await use(['model.class', 'model.enum'], ctx.desc, ctx.desc.keyType),
            valueThing: await use(['model.class', 'model.enum'], ctx.desc, ctx.desc.valueType),
            tag: getTag(ctx.desc.fieldNumber, 2),
            keyTag: getTag(1, getWireTypeByTypeInfo(ctx.keyTypeInfo)),
            valueTag: getTag(2, getWireTypeByTypeInfo(ctx.valueTypeInfo)),
        }))
        .extend('typeinfos', async ({ ctx, use }) => {
            const enumThing = await (ctx.descriptor && ctx.descriptor instanceof EnumDescriptor ? use('model.enum', ctx.descriptor, ctx.protoType) ?? Promise.resolve(null) : Promise.resolve(null));
            const tsTypeThing = await (ctx.descriptor ? use('model.class', ctx.descriptor, ctx.protoType) ?? Promise.resolve(null) : Promise.resolve(null));
            const jsonTypeThing = await( ctx.descriptor ? use('model.jsonIface', ctx.descriptor, ctx.protoType) ?? Promise.resolve(null) : Promise.resolve(null));
            const tsType = getTsTypeByTypeInfo(ctx) ?? tsTypeThing?.usagename ?? '';
            const jsonType = getJsonTypeByTypeInfo(ctx) ?? jsonTypeThing?.usagename ?? '';

            return {
                ...ctx,
                defaultValue: getDefaultValue(ctx, tsType, ctx.typeMarker, ctx.protoType),
                pjsFn: getPjsFnNameByTypeInfo(ctx),
                tsType,
                jsonType,
                enumType: enumThing?.usagename,
            }
        })
}

export const getDefaultValue = (typeInfo: TypeInfo, tsType: string, typeMarker: TypeMarker, fullType: string | null) => {
    if (typeInfo.descriptor instanceof MessageFieldDescriptor && typeInfo.descriptor.repeated) {
        return "[]";
    }

    if (typeMarker === "Message") {
        return `new ${tsType}()`;
    }

    if (typeMarker === "Enum") {
        const enm = typeInfo.descriptor as EnumDescriptor;
        return `${fullType}.${enm.fields[0].fieldName}`;
    }

    const primitive = getScalarDefaultValue(typeInfo)

    if (primitive) {
        return primitive;
    }

    throw new Error(`Cannot get default value for ${typeMarker} ${typeInfo.protoType}`)
}
