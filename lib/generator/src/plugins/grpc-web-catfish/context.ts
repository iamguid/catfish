import { MessageFieldDescriptor, MessageDescriptor } from "@catfish/parser";
import { TypeInfo } from "../../ProjectContext";
import { findOption, snakeToCamel } from "../../utils";
import { PluginOptions } from "./plugin";
import { ContextsRegistry, ExtractFlatContextDefinition, ExtractContextDefinition } from "../../PluginContext";

export type PluginContextFlatDefinition = ExtractFlatContextDefinition<ReturnType<typeof buildPluginContext>>;
export type PluginContextDefinition = ExtractContextDefinition<ReturnType<typeof buildPluginContext>>;

export const buildPluginContext = (registry: ContextsRegistry<PluginOptions>) => {
    return registry
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
            const pageTokenFieldTypeInfo = await type(request.pageTokenFieldDesc.type)
            const pageTokenFieldName = snakeToCamel(request.pageTokenFieldDesc.name)
            const pageSizeFieldTypeInfo = await type(request.pageSizeFieldDesc.type)
            const pageSizeFieldName = snakeToCamel(request.pageSizeFieldDesc.name)

            return {
                ...ctx,
                type: t,
                parametersTypeName: `${ctx.methodDesc.name}Parameters`,
                messageTypeThing, 
                messageJSONTypeThing,
                pageTokenFieldTypeInfo,
                pageTokenFieldName,
                pageSizeFieldTypeInfo,
                pageSizeFieldName,
            }
        })
        .extend('responses', async ({ ctx, use, type }) => {
            const paginatedMethodOption = findOption(ctx.methodDesc.options, 'catfish.mtd_paginated');
            const t = paginatedMethodOption ? 'paginated' : 'basic';

            if (t === 'basic') {
                return { ...ctx, type: t }
            }

            const response = validateResponse(ctx.responseTypeInfo)
            const responseName = snakeToCamel(ctx.responseTypeInfo.descriptor?.name ?? '')
            const messageTypeThing = await use('model.class', ctx.responseTypeInfo.descriptor!)
            const messageJSONTypeThing = await use('model.jsonIface', ctx.responseTypeInfo.descriptor!)
            const dataFieldTypeInfo = await type(response.dataFieldDesc.type);
            const dataFieldTypeThing = await use('model.class', dataFieldTypeInfo.descriptor!)
            const dataFieldName = snakeToCamel(response.dataFieldDesc.name)
            const nextPageTokenFieldTypeInfo = await type(response.nextPageTokenFieldDesc.type)
            const nextPageTokenFieldName = snakeToCamel(response.nextPageTokenFieldDesc.name)

            return {
                ...ctx,
                type: t,
                responseName,
                messageTypeThing,
                messageJSONTypeThing,
                dataFieldTypeInfo,
                dataFieldTypeThing,
                dataFieldName,
                nextPageTokenFieldTypeInfo,
                nextPageTokenFieldName
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
