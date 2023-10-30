import { BaseDescriptor, EnumDescriptor, EnumFieldDescriptor, FileDescriptor, MapFieldDescriptor, MessageDescriptor, MessageFieldDescriptor, MethodDescriptor, OneofDescriptor, ServiceDescriptor } from "@catfish/parser";
import { ProjectContext, TypeInfo } from "./ProjectContext";
import { IResolverV2, ResolvedThing, ResolvedThingImport } from "./ResolverV2";

type ConvertFlat<TPluginContext extends BasePluginContext, TBuilded extends PluginContextBuilded<TPluginContext> = PluginContextBuilded<TPluginContext>> = {
    'file': TBuilded,
    'file.service': TBuilded['services'],
    'file.service.method': TBuilded['services'][0]['methods'][0],
    'file.enum': TBuilded['enums'][0],
    'file.enum.field': TBuilded['enums'][0]['fields'][0],
    'file.message': TBuilded['messages'][0],
    'file.message.field': TPluginContext['messagefields'],
    'file.message.map': TPluginContext['maps'] & { keyTypeInfo: TPluginContext['typeinfos'], valueTypeInfo: TPluginContext['typeinfos'] },
    'file.message.oneof': TPluginContext['oneofs'] & { fields: (TPluginContext['messagefields'] & { typeInfo: TPluginContext['typeinfos'] })[] },
    'file.message.oneof.field': TPluginContext['messagefields'],
    'typeinfo': TPluginContext['typeinfos'],
}

export type ExtractPluginContextFlat<TContextsRegistry extends ContextsRegistry<any>> =
    TContextsRegistry extends ContextsRegistry<infer T1, infer T2, infer TPluginContextO> ? ConvertFlat<TPluginContextO> : unknown;

export type OptionalKey<T, key> = T extends Record<any, any> ? T[key] : unknown

export type ExtendByName<T, TExt, TName> = {
    [key in keyof T]: key extends TName ? (T[key] & TExt) : T[key]
}

export type BasePluginContext<TTypeInfo = TypeInfo> = {
    readonly files: { desc: FileDescriptor }
    readonly services: { desc: ServiceDescriptor }
    readonly methods: { desc: MethodDescriptor, requestTypeInfo: TTypeInfo, responseTypeInfo: TTypeInfo }
    readonly messages: { desc: MessageDescriptor }
    readonly messagefields: { type: 'field', typeInfo: TTypeInfo, msgDesc: MessageDescriptor, msgFieldDesc: MessageFieldDescriptor }
    readonly maps: { type: 'map', keyTypeInfo: TTypeInfo, valueTypeInfo: TTypeInfo, desc: MapFieldDescriptor }
    readonly oneofs: { type: 'oneof', desc: OneofDescriptor }
    readonly enums: { desc: EnumDescriptor }
    readonly enumfields: { enmDesc: EnumDescriptor, enmFieldDesc: EnumFieldDescriptor }
    readonly typeinfos: TTypeInfo
}

export type PluginContextBuildedMessage<TPluginContext extends BasePluginContext> = TPluginContext['messages'] & {
    fields: (
        | (TPluginContext['messagefields'] & { typeInfo: TPluginContext['typeinfos'] })
        | (TPluginContext['maps'] & { keyTypeInfo: TPluginContext['typeinfos'], valueTypeInfo: TPluginContext['typeinfos'] })
        | (TPluginContext['oneofs'] & { fields: (TPluginContext['messagefields'] & { typeInfo: TPluginContext['typeinfos'] })[] } )
    )[]
    messages: (PluginContextBuildedMessage<TPluginContext>)[],
    enums: (TPluginContext['enums'] & {
        fields: (TPluginContext['enumfields'])[]
    })[]
}

export type PluginContextBuilded<TPluginContext extends BasePluginContext> = TPluginContext['files'] & {
    services: (TPluginContext['services'] & {
        methods: (TPluginContext['methods'] & { requestTypeInfo: TPluginContext['typeinfos'], responseTypeInfo: TPluginContext['typeinfos'] })[]
    })[],
    messages: (PluginContextBuildedMessage<TPluginContext>)[],
    enums: (TPluginContext['enums'] & {
        fields: (TPluginContext['enumfields'])[]
    })[]
}

export type BasePluginContextAny = {
    [key in keyof BasePluginContext]: any
}

export type BasePluginContextIO = {
    [key in keyof BasePluginContext]: {
        I: BasePluginContext[key],
        O: BasePluginContext[key],
    }
}

export type BasePluginContextIOAny = {
    [key in keyof BasePluginContext]: {
        I: any,
        O: any,
    }
}

export type PluginContextResult<TPluginContext extends BasePluginContextIOAny> = {
    [key in keyof TPluginContext]: OptionalKey<TPluginContext[key], 'O'>[]
}

export type PluginContextIO<TPluginContextI extends BasePluginContext, TPluginContextO extends BasePluginContext> = {
    [key in keyof TPluginContextI]: {
        I: TPluginContextI[key],
        O: OptionalKey<TPluginContextO, key>
    }
}

export type PluginContextO<TPluginContext extends BasePluginContextIOAny> = {
    [key in keyof TPluginContext]: OptionalKey<TPluginContext[key], 'O'>
}

export type PluginContextI<TPluginContext extends BasePluginContextIOAny> = {
    [key in keyof TPluginContext]: OptionalKey<TPluginContext[key], 'I'>
}

export type ContextsRegistryCbArguments<
    TName extends keyof BasePluginContext,
    TPluginOptions extends Record<string, any>,
    TPluginContextI extends BasePluginContext,
> = { 
    ctx: TPluginContextI[TName],
    prj: ProjectContext,
    file: FileDescriptor,
    def: (namespace: string, desc: BaseDescriptor, thingName: string) => ResolvedThing,
    use: (namespace: string | string[], desc: BaseDescriptor, protoType?: string) => Promise<ResolvedThingImport>,
    opt: TPluginOptions
}

export class ContextsRegistry<
    TPluginOptions extends Record<string, any>,
    TPluginContextI extends BasePluginContext = BasePluginContext,
    TPluginContextO extends BasePluginContext = BasePluginContext,
> {
    private contextTransformerChains: Record<
        keyof BasePluginContext,
        ((args: ContextsRegistryCbArguments<keyof BasePluginContext, TPluginOptions, any>) => Promise<any>)[]
    > = {
        files: [],
        services: [],
        methods: [],
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
        TCbOut extends TPluginContextO[TName],
        TName extends keyof BasePluginContext = keyof BasePluginContext,
        TExtendedPluginContext extends BasePluginContext = ExtendByName<TPluginContextO, TCbOut, TName>,
    >(
        name: TName,
        cb: (args: ContextsRegistryCbArguments<TName, TPluginOptions, TPluginContextI>) => Promise<TCbOut>,
    ) {
        if (!this.contextTransformerChains[name]) {
            this.contextTransformerChains[name] = []
        }

        this.contextTransformerChains[name].push(cb as any)

        return this as unknown as ContextsRegistry<TPluginOptions, TExtendedPluginContext, TPluginContextO & TExtendedPluginContext>;
    }

    build = async <TPluginContextBuilded extends PluginContextBuilded<TPluginContextO> = PluginContextBuilded<TPluginContextO>>(resolver?: IResolverV2): Promise<TPluginContextBuilded> => {
        const resolver_ = resolver ?? this.projectContext.resolverV2;

        const buildField = async (message: MessageDescriptor, field: BaseDescriptor): Promise<TPluginContextBuilded['messages'][0]['fields'][0]> => {
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

        const buildMessage = async (message: MessageDescriptor): Promise<TPluginContextBuilded['messages'][0]> => {
            const baseCtx = await this.buildMessage(resolver_, message)
            const enums = await Promise.all(message.enums.map(enm => buildEnum(enm)))
            const fields = await Promise.all(message.fields.map(field => buildField(message, field)))
            const messages = await Promise.all(message.messages.map(msg => buildMessage(msg)))

            return {
                ...baseCtx,
                enums,
                fields,
                messages
            }
        }

        const buildFile = async (file: FileDescriptor): Promise<TPluginContextBuilded> => {
            const baseCtx = await this.buildFile(resolver_, file)
            const enums = await Promise.all(file.enums.map(enm => buildEnum(enm)))
            const messages = await Promise.all(file.messages.map(msg => buildMessage(msg)))
            const services = await Promise.all(file.services.map(async (service) => {
                const baseCtx = await this.buildService(resolver_, service)
                const methods = await Promise.all(service.methods.map((method) => this.buildMethod(resolver_, method)))

                return {
                    ...baseCtx,
                    methods
                }
            }))

            return {
                ...baseCtx,
                enums,
                messages,
                services,
            } as any
        }

        return await buildFile(this.file) as any
    }

    private buildFile = async (resolver: IResolverV2, desc: FileDescriptor): Promise<BasePluginContext['files']> => {
        const cbChanin = this.contextTransformerChains['files']
        return this.executeAsyncMethodsChain(resolver, { desc }, cbChanin)
    }

    private buildService = async (resolver: IResolverV2, desc: ServiceDescriptor): Promise<BasePluginContext['services']> => {
        const cbChanin = this.contextTransformerChains['services']
        return this.executeAsyncMethodsChain(resolver, { desc }, cbChanin)
    }

    private buildMethod = async (resolver: IResolverV2, desc: MethodDescriptor): Promise<BasePluginContext['methods']> => {
        const requestTypeInfo = await this.buildTypeInfo(resolver, desc.inputMessageType)
        const responseTypeInfo = await this.buildTypeInfo(resolver, desc.outputMessageType)
        const cbChanin = this.contextTransformerChains['methods']
        return this.executeAsyncMethodsChain(resolver, { desc, requestTypeInfo, responseTypeInfo }, cbChanin)
    }

    private buildMessage = async (resolver: IResolverV2, desc: MessageDescriptor): Promise<BasePluginContext['messages']> => {
        const cbChanin = this.contextTransformerChains['messages']
        return this.executeAsyncMethodsChain(resolver, { desc }, cbChanin)
    }

    private buildMessageField = async (resolver: IResolverV2, msgDesc: MessageDescriptor, msgFieldDesc: MessageFieldDescriptor): Promise<BasePluginContext['messagefields']> => {
        const typeInfo = await this.buildTypeInfo(resolver, msgFieldDesc.type);
        const cbChanin = this.contextTransformerChains['messagefields']
        return this.executeAsyncMethodsChain(resolver, { msgDesc, type: 'field', msgFieldDesc, typeInfo }, cbChanin)
    }

    private buildMap = async (resolver: IResolverV2, desc: MapFieldDescriptor): Promise<BasePluginContext['maps']> => {
        const keyTypeInfo = await this.buildTypeInfo(resolver, desc.keyType);
        const valueTypeInfo = await this.buildTypeInfo(resolver, desc.valueType);
        const cbChanin = this.contextTransformerChains['maps']
        return this.executeAsyncMethodsChain(resolver, { desc, type: 'map', keyTypeInfo, valueTypeInfo }, cbChanin)
    }

    private buildOneof = async (resolver: IResolverV2, desc: OneofDescriptor): Promise<BasePluginContext['oneofs']> => {
        const cbChanin = this.contextTransformerChains['oneofs']
        return this.executeAsyncMethodsChain(resolver, { desc, type: 'oneof' }, cbChanin)
    }

    private buildEnum = async (resolver: IResolverV2, desc: EnumDescriptor): Promise<BasePluginContext['enums']> => {
        const cbChanin = this.contextTransformerChains['enums']
        return this.executeAsyncMethodsChain(resolver, { desc }, cbChanin)
    }

    private buildEnumField = async (resolver: IResolverV2, enmDesc: EnumDescriptor, enmFieldDesc: EnumFieldDescriptor): Promise<BasePluginContext['enumfields']> => {
        const cbChanin = this.contextTransformerChains['enumfields']
        return this.executeAsyncMethodsChain(resolver, { enmDesc, enmFieldDesc }, cbChanin)
    }

    private buildTypeInfo = async (resolver: IResolverV2, protoType: string): Promise<BasePluginContext['typeinfos']> => {
        const typeInfo = this.projectContext.getTypeInfo(this.file, protoType);
        const cbChanin = this.contextTransformerChains['typeinfos']
        return this.executeAsyncMethodsChain(resolver, typeInfo, cbChanin)
    }

    private executeAsyncMethodsChain = async (resolver: IResolverV2, intialResult: any, chain: ((...args: any[]) => Promise<any>)[]): Promise<any> => {
        const def = (namespace: string, desc: BaseDescriptor, thingName: string): ResolvedThing => {
            return resolver.define(namespace, desc, thingName, this.fileName)
        }
    
        const use = (namespace: string | string[], desc: BaseDescriptor, protoType?: string): Promise<ResolvedThingImport> => {
            return resolver.resolveByNamespace(namespace, desc, this.file, protoType)
        }

        let lastResult = intialResult
        for (const method of chain) {
            lastResult = await method({ctx: lastResult as any, prj: this.projectContext, file: this.file, use, def, opt: this.opts})
        }
        return lastResult
    }
}
