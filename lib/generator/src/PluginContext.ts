import { BaseDescriptor, EnumDescriptor, EnumFieldDescriptor, FileDescriptor, MapFieldDescriptor, MessageDescriptor, MessageFieldDescriptor, MethodDescriptor, OneofDescriptor, ServiceDescriptor } from "@catfish/parser";
import { ProjectContext, TypeInfo } from "./ProjectContext";
import { IResolverV2, ResolvedThing, ResolvedThingImport } from "./ResolverV2";

export type ContextBuilder<
    TPluginOptions extends Record<string, any>,
    TContextDefinition extends BaseContextDefinition,
> = (c: ContextsRegistry<TPluginOptions, TContextDefinition>) => ContextsRegistry<TPluginOptions, TContextDefinition>

type FlattenContextDefinition<TPluginContext extends BaseContextDefinition, TBuilded extends ContextBuildResult<TPluginContext> = ContextBuildResult<TPluginContext>> = {
    'file': TBuilded,
    'file.service': TBuilded['services'][0],
    'file.service.method': TBuilded['services'][0]['methods'][0],
    'file.service.method.request': TBuilded['services'][0]['methods'][0]['request'],
    'file.service.method.response': TBuilded['services'][0]['methods'][0]['response'],
    'file.enum': TBuilded['enums'][0],
    'file.enum.field': TBuilded['enums'][0]['fields'][0],
    'file.message': TBuilded['messages'][0],
    'file.message.field': TPluginContext['messagefields'],
    'file.message.map': TPluginContext['maps'] & { keyTypeInfo: TPluginContext['typeinfos'], valueTypeInfo: TPluginContext['typeinfos'] },
    'file.message.oneof': TPluginContext['oneofs'] & { fields: (TPluginContext['messagefields'] & { typeInfo: TPluginContext['typeinfos'] })[] },
    'file.message.oneof.field': TPluginContext['messagefields'],
    'typeinfo': TPluginContext['typeinfos'],
}

export type ExtractFlatContextDefinition<TContextsRegistry extends ContextsRegistry<any>> =
    TContextsRegistry extends ContextsRegistry<infer T1, infer TContextDefinition> ? FlattenContextDefinition<TContextDefinition> : unknown;

export type ExtractContextDefinition<TContextsRegistry extends ContextsRegistry<any>> =
    TContextsRegistry extends ContextsRegistry<infer T1, infer TContextDefinition> ? TContextDefinition : unknown;

export type OptionalKey<T, key> = T extends Record<any, any> ? T[key] : unknown

export type ExtendByName<T, TExt, TName> = {
    [key in keyof T]: key extends TName ? (T[key] & TExt) : T[key]
}

export type BaseContextDefinition = {
    readonly files: { desc: FileDescriptor }
    readonly services: { desc: ServiceDescriptor }
    readonly methods: { serviceDesc: ServiceDescriptor, methodDesc: MethodDescriptor }
    readonly requests: { serviceDesc: ServiceDescriptor, methodDesc: MethodDescriptor, requestTypeInfo: TypeInfo }
    readonly responses: { serviceDesc: ServiceDescriptor, methodDesc: MethodDescriptor, responseTypeInfo: TypeInfo }
    readonly messages: { desc: MessageDescriptor }
    readonly messagefields: { type: 'field', typeInfo: TypeInfo, msgDesc: MessageDescriptor, msgFieldDesc: MessageFieldDescriptor }
    readonly maps: { type: 'map', keyTypeInfo: TypeInfo, valueTypeInfo: TypeInfo, desc: MapFieldDescriptor }
    readonly oneofs: { type: 'oneof', desc: OneofDescriptor }
    readonly enums: { desc: EnumDescriptor }
    readonly enumfields: { enmDesc: EnumDescriptor, enmFieldDesc: EnumFieldDescriptor }
    readonly typeinfos: TypeInfo
}

export type ExtendTypeInfo<TContextDefintion extends BaseContextDefinition> = TContextDefintion & {
    requests: { requestTypeInfo: TContextDefintion['typeinfos'] }
    responses: { responseTypeInfo: TContextDefintion['typeinfos'] }
    messagefields: { typeInfo: TContextDefintion['typeinfos'] }
    maps: { keyTypeInfo: TContextDefintion['typeinfos'], valueTypeInfo: TContextDefintion['typeinfos'] }
}

export type ContextBuildMessageResult<TContextDefinition extends BaseContextDefinition> = TContextDefinition['messages'] & {
    fields: (
        | (TContextDefinition['messagefields'] & { typeInfo: TContextDefinition['typeinfos'] })
        | (TContextDefinition['maps'] & { keyTypeInfo: TContextDefinition['typeinfos'], valueTypeInfo: TContextDefinition['typeinfos'] })
        | (TContextDefinition['oneofs'] & { fields: (TContextDefinition['messagefields'] & { typeInfo: TContextDefinition['typeinfos'] })[] } )
    )[]
    messages: (ContextBuildMessageResult<TContextDefinition>)[],
    enums: (TContextDefinition['enums'] & {
        fields: (TContextDefinition['enumfields'])[]
    })[]
}

export type ContextBuildResult<TContextDefinition extends BaseContextDefinition> = TContextDefinition['files'] & {
    services: (TContextDefinition['services'] & {
        methods: (TContextDefinition['methods'] & { request: (TContextDefinition['requests'] & { requestTypeInfo: TContextDefinition['typeinfos'] }), response: (TContextDefinition['responses'] & { responseTypeInfo: TContextDefinition['typeinfos'] }) })[]
    })[],
    messages: (ContextBuildMessageResult<TContextDefinition>)[],
    enums: (TContextDefinition['enums'] & {
        fields: (TContextDefinition['enumfields'])[]
    })[]
}

export type ContextExtendFnArguments<
    TDefinitionKey extends keyof BaseContextDefinition,
    TPluginOptions extends Record<string, any>,
    TContextDefinition extends BaseContextDefinition,
> = {
    ctx: TContextDefinition[TDefinitionKey],
    prj: ProjectContext,
    file: FileDescriptor,
    def: (namespace: string, desc: BaseDescriptor, thingName: string) => ResolvedThing,
    use: (namespace: string | string[], desc: BaseDescriptor, protoType?: string) => Promise<ResolvedThingImport & { usagename: string }>,
    type: (protoType: string) => TContextDefinition['typeinfos'],
    opt: TPluginOptions
}

export class ContextsRegistry<
    TPluginOptions extends Record<string, any>,
    TContextDefinition extends BaseContextDefinition = BaseContextDefinition,
> {
    private contextTransformerChains: Record<
        keyof BaseContextDefinition,
        ((args: ContextExtendFnArguments<keyof BaseContextDefinition, TPluginOptions, any>) => Promise<any>)[]
    > = {
        files: [],
        services: [],
        methods: [],
        requests: [],
        responses: [],
        messages: [],
        messagefields: [],
        maps: [],
        oneofs: [],
        enums: [],
        enumfields: [],
        typeinfos: []
    }

    constructor(
        private projectContext: ProjectContext,
        private file: FileDescriptor,
        private fileName: string,
        private opts: TPluginOptions,
    ) {}

    extend<
        TContextDefinitionByKeyOut extends TContextDefinition[TDefinitionKey],
        TDefinitionKey extends keyof BaseContextDefinition = keyof BaseContextDefinition,
        TContextDefinitionNext extends TContextDefinition = ExtendByName<TContextDefinition, TContextDefinitionByKeyOut, TDefinitionKey>,
    >(
        name: TDefinitionKey,
        cb: (args: ContextExtendFnArguments<TDefinitionKey, TPluginOptions, TContextDefinition>) => Promise<TContextDefinitionByKeyOut>,
    ) {
        if (!this.contextTransformerChains[name]) {
            this.contextTransformerChains[name] = []
        }

        this.contextTransformerChains[name].push(cb as any)

        // return this as unknown as ContextsRegistry<TPluginOptions, ExtendTypeInfo<TContextDefinition & TContextDefinitionNext>>;
        return this as unknown as ContextsRegistry<TPluginOptions, TContextDefinition & TContextDefinitionNext>;
    }

    build = async <TContextBuildResult extends ContextBuildResult<TContextDefinition> = ContextBuildResult<TContextDefinition>>(resolver?: IResolverV2): Promise<TContextBuildResult> => {
        const resolver_ = resolver ?? this.projectContext.resolverV2;

        const buildField = async (message: MessageDescriptor, field: BaseDescriptor): Promise<TContextBuildResult['messages'][0]['fields'][0]> => {
            if (field instanceof OneofDescriptor) {
                const oneofBaseCtx = await this.buildOneof(resolver_, field);
                const fields = await Promise.all(field.fields.map(async f => {
                    return await this.buildMessageField(resolver_, message, f);
                }));

                return { ...oneofBaseCtx, fields }
            }

            if (field instanceof MapFieldDescriptor) {
                return await this.buildMap(resolver_, field);
            }

            if (field instanceof MessageFieldDescriptor) {
                return await this.buildMessageField(resolver_, message, field)
            }

            throw new Error(`Cannot build message field '${field.fullpath}' context`)
        }

        const buildEnum = async (enm: EnumDescriptor) => {
            const baseCtx = await this.buildEnum(resolver_, enm)
            const fields = await Promise.all(enm.fields.map(fld => this.buildEnumField(resolver_, enm, fld)))

            return {
                ...baseCtx,
                fields
            }
        }

        const buildMessage = async (message: MessageDescriptor): Promise<TContextBuildResult['messages'][0]> => {
            const baseCtx = await this.buildMessage(resolver_, message)
            const messages = await Promise.all(message.messages.map(msg => buildMessage(msg)))
            const enums = await Promise.all(message.enums.map(enm => buildEnum(enm)))
            const fields = await Promise.all(message.fields.map(field => buildField(message, field)))

            return {
                ...baseCtx,
                messages,
                enums,
                fields,
            }
        }

        const buildService = async (service: ServiceDescriptor): Promise<TContextBuildResult['services'][0]> => {
            const baseCtx = await this.buildService(resolver_, service)
            const methods = await Promise.all(service.methods.map(async (method) => {
                const baseCtx = await this.buildMethod(resolver_, service, method)
                const request = await this.buildRequest(resolver_, service, method)
                const response = await this.buildResponse(resolver_, service, method)

                return {
                    ...baseCtx,
                    request,
                    response,
                }
            }))

            return {
                ...baseCtx,
                methods
            }
        }

        const buildFile = async (file: FileDescriptor): Promise<TContextBuildResult> => {
            const baseCtx = await this.buildFile(resolver_, file)
            const enums = await Promise.all(file.enums.map(enm => buildEnum(enm)))
            const messages = await Promise.all(file.messages.map(msg => buildMessage(msg)))
            const services = await Promise.all(file.services.map((service) => buildService(service)))

            return {
                ...baseCtx,
                enums,
                messages,
                services,
            } as any
        }

        return await buildFile(this.file) as any
    }

    private buildFile = async (resolver: IResolverV2, desc: FileDescriptor): Promise<BaseContextDefinition['files']> => {
        const cbChanin = this.contextTransformerChains['files']
        return this.executeAsyncMethodsChain(resolver, { desc }, cbChanin)
    }

    private buildService = async (resolver: IResolverV2, desc: ServiceDescriptor): Promise<BaseContextDefinition['services']> => {
        const cbChanin = this.contextTransformerChains['services']
        return this.executeAsyncMethodsChain(resolver, { desc }, cbChanin)
    }

    private buildMethod = async (resolver: IResolverV2, serviceDesc: ServiceDescriptor, methodDesc: MethodDescriptor): Promise<BaseContextDefinition['methods']> => {
        const cbChanin = this.contextTransformerChains['methods']
        return this.executeAsyncMethodsChain(resolver, { serviceDesc, methodDesc }, cbChanin)
    }

    private buildRequest = async (resolver: IResolverV2, serviceDesc: ServiceDescriptor, methodDesc: MethodDescriptor): Promise<BaseContextDefinition['requests']> => {
        const requestTypeInfo = await this.buildTypeInfo(resolver, methodDesc.inputMessageType)
        const cbChanin = this.contextTransformerChains['requests']
        return this.executeAsyncMethodsChain(resolver, { serviceDesc, methodDesc, requestTypeInfo }, cbChanin)
    }

    private buildResponse = async (resolver: IResolverV2, serviceDesc: ServiceDescriptor, methodDesc: MethodDescriptor): Promise<BaseContextDefinition['responses']> => {
        const responseTypeInfo = await this.buildTypeInfo(resolver, methodDesc.outputMessageType)
        const cbChanin = this.contextTransformerChains['responses']
        return this.executeAsyncMethodsChain(resolver, { serviceDesc, methodDesc, responseTypeInfo }, cbChanin)
    }

    private buildMessage = async (resolver: IResolverV2, desc: MessageDescriptor): Promise<BaseContextDefinition['messages']> => {
        const cbChanin = this.contextTransformerChains['messages']
        return this.executeAsyncMethodsChain(resolver, { desc }, cbChanin)
    }

    private buildMessageField = async (resolver: IResolverV2, msgDesc: MessageDescriptor, msgFieldDesc: MessageFieldDescriptor): Promise<BaseContextDefinition['messagefields']> => {
        const typeInfo = await this.buildTypeInfo(resolver, msgFieldDesc.type);
        const cbChanin = this.contextTransformerChains['messagefields']
        return this.executeAsyncMethodsChain(resolver, { msgDesc, type: 'field', msgFieldDesc, typeInfo }, cbChanin)
    }

    private buildMap = async (resolver: IResolverV2, desc: MapFieldDescriptor): Promise<BaseContextDefinition['maps']> => {
        const keyTypeInfo = await this.buildTypeInfo(resolver, desc.keyType);
        const valueTypeInfo = await this.buildTypeInfo(resolver, desc.valueType);
        const cbChanin = this.contextTransformerChains['maps']
        return this.executeAsyncMethodsChain(resolver, { desc, type: 'map', keyTypeInfo, valueTypeInfo }, cbChanin)
    }

    private buildOneof = async (resolver: IResolverV2, desc: OneofDescriptor): Promise<BaseContextDefinition['oneofs']> => {
        const cbChanin = this.contextTransformerChains['oneofs']
        return this.executeAsyncMethodsChain(resolver, { desc, type: 'oneof' }, cbChanin)
    }

    private buildEnum = async (resolver: IResolverV2, desc: EnumDescriptor): Promise<BaseContextDefinition['enums']> => {
        const cbChanin = this.contextTransformerChains['enums']
        return this.executeAsyncMethodsChain(resolver, { desc }, cbChanin)
    }

    private buildEnumField = async (resolver: IResolverV2, enmDesc: EnumDescriptor, enmFieldDesc: EnumFieldDescriptor): Promise<BaseContextDefinition['enumfields']> => {
        const cbChanin = this.contextTransformerChains['enumfields']
        return this.executeAsyncMethodsChain(resolver, { enmDesc, enmFieldDesc }, cbChanin)
    }

    private buildTypeInfo = async (resolver: IResolverV2, protoType: string): Promise<BaseContextDefinition['typeinfos']> => {
        const typeInfo = this.projectContext.getTypeInfo(this.file, protoType);
        const cbChanin = this.contextTransformerChains['typeinfos']
        return this.executeAsyncMethodsChain(resolver, typeInfo, cbChanin)
    }

    private executeAsyncMethodsChain = async (resolver: IResolverV2, intialResult: any, chain: ((...args: any[]) => Promise<any>)[]): Promise<any> => {
        const def = (namespace: string, desc: BaseDescriptor, thingName: string): ResolvedThing => {
            return resolver.define(namespace, desc, thingName, this.fileName)
        }
    
        const use = async (namespace: string | string[], desc: BaseDescriptor, protoType?: string): Promise<ResolvedThingImport & { usagename: string }> => {
            const thing = await resolver.resolveByNamespace(namespace, desc, this.file, protoType)
            return {
                ...thing,
                usagename: resolver.getRelativeTypeName(thing, this.file, this.fileName)
            }
        }

        const type = (protoType: string) => {
            return this.buildTypeInfo(resolver, protoType)
        }

        let lastResult = intialResult
        for (const method of chain) {
            lastResult = await method({ctx: lastResult as any, prj: this.projectContext, file: this.file, use, def, type, opt: this.opts})
        }
        return lastResult
    }
}
