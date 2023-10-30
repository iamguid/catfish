import { MessageDescriptor, MessageFieldDescriptor } from "@catfish/parser";
import { PluginOptions } from "./plugin";
import { findOption } from "../../utils";
import { ContextsRegistry, ExtractPluginContextFlat } from "../../PluginContext";

export type PluginContextFlatOut = ExtractPluginContextFlat<ReturnType<typeof buildPluginContext>>;

export const buildPluginContext = (registry: ContextsRegistry<PluginOptions>) => {
    return registry
        .extend('services', async ({ ctx, def, use }) => ({
            ...ctx,
            grpcClientThing: await use('grpc.client', ctx.desc),
        }))
        .extend('methods', async ({ ctx, use, prj, file }) => {
            const queryMethodOption = findOption(ctx.methodDesc.options, 'catfish.tanstack.query_method');
            const mutationMethodOption = findOption(ctx.methodDesc.options, 'catfish.tanstack.mutation_method');

            const isQueryMethod = queryMethodOption ?? false;
            const isMutationMethod = mutationMethodOption ?? false;
            const isBasicMethod = !isQueryMethod && !isMutationMethod;
            const type = isBasicMethod ? 'basic' : (isMutationMethod ? 'mutation' : 'query')

            if (type === 'basic') {
                return {
                    ...ctx,
                    type
                } 
            }

            if (!ctx.requestTypeInfo.descriptor || !(ctx.requestTypeInfo.descriptor instanceof MessageDescriptor)) {
                throw new Error(`TanStack method ${ctx.requestTypeInfo.descriptor?.fullpath} should accept message`)
            }
        
            if (!ctx.responseTypeInfo.descriptor || !(ctx.responseTypeInfo.descriptor instanceof MessageDescriptor)) {
                throw new Error(`TanStack method ${ctx.responseTypeInfo.descriptor?.fullpath} should return message`)
            }
        
            const dataFieldDesc = ctx.responseTypeInfo.descriptor.fields
                .filter(field => field instanceof MessageFieldDescriptor)
                .find((field) => {
                    const f = field as MessageFieldDescriptor;
                    return typeof findOption(f.options, 'catfish.tanstack.data_marker') !== 'undefined'
                }) as MessageFieldDescriptor;
        
            if (!dataFieldDesc) {
                throw new Error(`Cannot find 'catfish.tanstack.data_marker' option in message ${ctx.responseTypeInfo.descriptor.fullpath}`)
            }
        
            const dataFieldTypeInfo = prj.getTypeInfo(file, dataFieldDesc.type)
        
            if (!dataFieldTypeInfo.descriptor) {
                throw new Error(`TanStack data field ${dataFieldDesc.fullpath} should be message`)
            }
        
            const dataFieldJsonThing = await use('model.jsonIface', dataFieldTypeInfo.descriptor);

            if (type === 'query') {
                return {
                    ...ctx,
                    type,
                    useQueryMethodName: `get${ctx.methodDesc.name}QueryOpts`,
                    dataFieldJsonThing,
                }
            }

            if (type === 'mutation') {
                return {
                    ...ctx,
                    type,
                    useMutationMethodName: `get${ctx.methodDesc.name}MutationOpts`,
                    dataFieldJsonThing,
                }
            }

            return {
                ...ctx,
                type
            }
        })
        .extend('typeinfos', async ({ ctx, use }) => ({
            ...ctx,
            thing: await (ctx.descriptor ? use(['model.class', 'model.enum'], ctx.descriptor) : Promise.resolve(null))
        }))
}
