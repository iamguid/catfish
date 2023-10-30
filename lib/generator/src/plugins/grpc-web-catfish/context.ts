import { MessageFieldDescriptor, MessageDescriptor, BaseDescriptor } from "@catfish/parser";
import { ProjectContext, TypeInfo } from "../../ProjectContext";
import { findOption, snakeToCamel } from "../../utils";
import { PluginOptions } from "./plugin";
import { BasePluginContext, ContextsRegistry, ContextsRegistryCbArguments, ExtractPluginContextFlat, ExtractPluginContextI } from "../../PluginContext";

export type PluginContextFlatOut = ExtractPluginContextFlat<ReturnType<typeof buildPluginContext>>;
export type PluginContextI = ExtractPluginContextI<ReturnType<typeof buildPluginContext>>;

export const buildPluginContext = (registry: ContextsRegistry<PluginOptions>) => {
    return registry
        .extend('typeinfos', async ({ ctx }) => ({
            ...ctx,
            name: snakeToCamel(ctx.descriptor?.name ?? ''),
        }))
        .extend('services', async ({ ctx, use }) => ({
            ...ctx,
            rxjsClientThing: await use('grpcrxjs.client', ctx.desc),
            grpcClientThing: await use('grpc.client', ctx.desc),
        }))
        .extend('methods', async ({ ctx }) => {
            const paginatedMethodOption = findOption(ctx.methodDesc.options, 'catfish.mtd_paginated');
            const type = paginatedMethodOption ? 'paginated' : 'basic';

            if (type === 'basic') {
                return { ...ctx, type }
            }

            return {
                ...ctx,
                type,
                createRxjsPaginatorName: `create${snakeToCamel(ctx.methodDesc.name)}RxjsPaginator`,
                createAsyncPaginatorName: `create${snakeToCamel(ctx.methodDesc.name)}AsyncPaginator`,
            }
        })
        .extend('requests', async ({ ctx, use, type }) => {
            const paginatedMethodOption = findOption(ctx.methodDesc.options, 'catfish.mtd_paginated');
            const t = paginatedMethodOption ? 'paginated' : 'basic';

            if (t === 'basic') {
                return { ...ctx, type: t }
            }

            const request = validateRequest(ctx.requestTypeInfo)
            const messageTypeThing = await use('model.class', ctx.requestTypeInfo.descriptor!)
            const messageJSONTypeThing = await use('model.jsonIface', ctx.requestTypeInfo.descriptor!)

            return {
                ...ctx,
                type: t,
                parametersTypeName: `${ctx.methodDesc.name}Parameters`,
                messageTypeThing, 
                messageJSONTypeThing,
                pageTokenFieldTypeInfo: type(request.pageTokenFieldDesc.type),
                pageSizeFieldTypeInfo: type(request.pageSizeFieldDesc.type),
            }
        })
        .extend('responses', async ({ ctx, use, type }) => {
            const paginatedMethodOption = findOption(ctx.methodDesc.options, 'catfish.mtd_paginated');
            const t = paginatedMethodOption ? 'paginated' : 'basic';

            if (t === 'basic') {
                return { ...ctx, type: t }
            }

            const response = validateResponse(ctx.responseTypeInfo)
            const messageTypeThing = await use('model.class', ctx.responseTypeInfo.descriptor!)
            const messageJSONTypeThing = await use('model.jsonIface', ctx.responseTypeInfo.descriptor!)
            const dataFieldTypeThing = await use('model.class', response.dataFieldDesc)

            return {
                ...ctx,
                type: t,
                messageTypeThing,
                messageJSONTypeThing,
                dataFieldTypeInfo: type(response.dataFieldDesc.type),
                dataFieldTypeThing,
                nextPageTokenFieldTypeInfo: type(response.nextPageTokenFieldDesc.type)
            }
        })
}

const validateRequest = (typeInfo: TypeInfo) => {
    if (!(typeInfo.descriptor instanceof MessageDescriptor)) {
        throw new Error(`Pagination RPC Request should be message`)
    }

    const pageSizeFieldDesc = typeInfo.descriptor.fields
        .filter(field => field instanceof MessageFieldDescriptor)
        .find((field) => {
            const f = field as MessageFieldDescriptor;
            const hasOption = typeof findOption(f.options, 'catfish.fld_page_size') !== 'undefined'
            const hasName = f.name === 'page_size'
            return hasOption || hasName
        }) as MessageFieldDescriptor;

    if (!pageSizeFieldDesc) {
        throw new Error(`Cannot find 'page_size' field or 'catfish.fld_page_size' option in message ${typeInfo.descriptor.fullpath}`)
    }

    if (!(pageSizeFieldDesc instanceof MessageFieldDescriptor)) {
        throw new Error(`Pagination RPC request page token field should be message field`)
    }
    
    const pageTokenFieldDesc = typeInfo.descriptor.fields
        .filter(field => field instanceof MessageFieldDescriptor)
        .find((field) => {
            const f = field as MessageFieldDescriptor;
            const hasOption = typeof findOption(f.options, 'catfish.fld_page_token') !== 'undefined'
            const hasName = f.name === 'page_token'
            return hasOption || hasName
        }) as MessageFieldDescriptor;

    if (!pageTokenFieldDesc) {
        throw new Error(`Cannot find 'page_token' field or 'catfish.fld_page_token' option in message ${typeInfo.descriptor.fullpath}`)
    }

    if (!(pageTokenFieldDesc instanceof MessageFieldDescriptor)) {
        throw new Error(`Pagination RPC request page token field should be message field`)
    }

    return {
        pageSizeFieldDesc,
        pageTokenFieldDesc,
    }
}

const validateResponse = (typeInfo: TypeInfo) => {
    if (!(typeInfo.descriptor instanceof MessageDescriptor)) {
        throw new Error(`Pagination RPC response should be message`)
    }

    const dataFieldDesc = typeInfo.descriptor.fields
        .filter(field => field instanceof MessageFieldDescriptor)
        .find((field) => {
            const f = field as MessageFieldDescriptor;
            const hasOption = typeof findOption(f.options, 'catfish.fld_page_data') !== 'undefined'
            const hasName = f.name === 'page_data'
            return hasOption || hasName
        }) as MessageFieldDescriptor;

    if (!dataFieldDesc) {
        throw new Error(`Cannot find 'page_data' field or 'catfish.fld_page_data' option in message ${typeInfo.descriptor.fullpath}`)
    }

    if (!(dataFieldDesc instanceof MessageFieldDescriptor)) {
        throw new Error(`Pagination RPC response page data field should be message field`)
    }
    
    const nextPageTokenFieldDesc = typeInfo.descriptor.fields
        .filter(field => field instanceof MessageFieldDescriptor)
        .find((field) => {
            const f = field as MessageFieldDescriptor;
            const hasOption = typeof findOption(f.options, 'catfish.fld_next_page_token') !== 'undefined'
            const hasName = f.name === 'next_page_token'
            return hasOption || hasName
        }) as MessageFieldDescriptor;

    if (!nextPageTokenFieldDesc) {
        throw new Error(`Cannot find 'next_page_token' field or 'catfish.fld_next_page_token' option in message ${typeInfo.descriptor.fullpath}`)
    }

    if (!(nextPageTokenFieldDesc instanceof MessageFieldDescriptor)) {
        throw new Error(`Pagination RPC response next page token field should be message field`)
    }

    return {
        dataFieldDesc,
        nextPageTokenFieldDesc,
    }
}
