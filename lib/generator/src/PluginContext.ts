import { BaseDescriptor, EnumDescriptor, EnumFieldDescriptor, FileDescriptor, MapFieldDescriptor, MessageDescriptor, MessageFieldDescriptor, MethodDescriptor, OneofDescriptor, ServiceDescriptor } from "@catfish/parser";
import { ProjectContext, TypeInfo } from "./ProjectContext";
import { ResolvedThing, ResolvedThingImport } from "./ResolverV2";

type ConvertFlat<TPluginContext extends BasePluginContext, TBuilded extends PluginContextBuilded<TPluginContext> = PluginContextBuilded<TPluginContext>> = {
    'file': TBuilded['file'],
    'file.service': TBuilded['file']['services'],
    'file.service.method': TBuilded['file']['services'][0]['methods'][0],
    'file.enum': TBuilded['file']['enums'][0],
    'file.enum.field': TBuilded['file']['enums'][0]['fields'][0],
    'file.message': TBuilded['file']['messages'][0],
    'file.message.field': TPluginContext['messagefields'],
    'file.message.map': TPluginContext['maps'],
    'file.message.oneof': TPluginContext['oneofs'] & { fields: (TPluginContext['messagefields'])[] },
    'file.message.oneof.field': TPluginContext['messagefields'],
    'typeinfo': TPluginContext['typeinfos'],
}

export type ExtractPluginContextFlat<TContextsRegistry extends ContextsRegistry<any>> =
    TContextsRegistry extends ContextsRegistry<infer T1, infer T2, infer TPluginContextO> ? ConvertFlat<TPluginContextO> : unknown;

export type OptionalKey<T, key> = T extends Record<any, any> ? T[key] : unknown

export type ExtendByName<T, TExt, TName> = {
    [key in keyof T]: key extends TName ? (T[key] & TExt) : T[key]
}

export type BasePluginContext = {
    readonly files: { desc: FileDescriptor }
    readonly services: { desc: ServiceDescriptor }
    readonly methods: { desc: MethodDescriptor, requestTypeInfo: TypeInfo, responseTypeInfo: TypeInfo }
    readonly messages: { desc: MessageDescriptor }
    readonly messagefields: { type: 'field', msgDesc: MessageDescriptor, msgFieldDesc: MessageFieldDescriptor, typeInfo: TypeInfo }
    readonly maps: { type: 'map', desc: MapFieldDescriptor, keyTypeInfo: TypeInfo, valueTypeInfo: TypeInfo }
    readonly oneofs: { type: 'oneof', desc: OneofDescriptor }
    readonly enums: { desc: EnumDescriptor }
    readonly enumfields: { enmDesc: EnumDescriptor, enmFieldDesc: EnumFieldDescriptor }
    readonly typeinfos: TypeInfo
}

export type PluginContextBuildedMessage<TPluginContext extends BasePluginContext> = TPluginContext['messages'] & {
    fields: (
        | (TPluginContext['messagefields'])
        | (TPluginContext['maps'])
        | (TPluginContext['oneofs'] & { fields: (TPluginContext['messagefields'])[] } )
    )[]
    messages: (PluginContextBuildedMessage<TPluginContext>)[],
    enums: (TPluginContext['enums'] & {
        fields: (TPluginContext['enumfields'])[]
    })[]
}

export type PluginContextBuilded<TPluginContext extends BasePluginContext> = {
    file: (TPluginContext['files'] & {
        services: (TPluginContext['services'] & {
            methods: (TPluginContext['methods'])[]
        })[],
        messages: (PluginContextBuildedMessage<TPluginContext>)[],
        enums: (TPluginContext['enums'] & {
            fields: (TPluginContext['enumfields'])[]
        })[]
    }),
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
    use: (namespace: string, desc: BaseDescriptor, protoType?: string) => Promise<ResolvedThingImport>,
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

    def = (namespace: string, desc: BaseDescriptor, thingName: string): ResolvedThing => {
        return this.projectContext.resolverV2.define(namespace, desc, thingName, this.fileName)
    }

    use = (namespace: string, desc: BaseDescriptor, protoType?: string): Promise<ResolvedThingImport> => {
        return this.projectContext.resolverV2.resolveByNamespace(namespace, desc, this.file, protoType)
    }

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

    build = async <TPluginContextBuilded extends PluginContextBuilded<TPluginContextO> = PluginContextBuilded<TPluginContextO>>(): Promise<TPluginContextBuilded> => {
        const buildField = async (message: MessageDescriptor, field: BaseDescriptor): Promise<TPluginContextBuilded['file']['messages'][0]['fields'][0]> => {
            if (field instanceof OneofDescriptor) {
                const oneofBaseCtx = await this.buildOneof(field);
                const fields = await Promise.all(field.fields.map(async f => {
                    return await this.buildMessageField(message, f);
                }));

                return { ...oneofBaseCtx, fields }
            }

            if (field instanceof MapFieldDescriptor) {
                return await this.buildMap(field);
            }

            if (field instanceof MessageFieldDescriptor) {
                return await this.buildMessageField(message, field)
            }

            throw new Error(`Cannot build message field '${field.fullpath}' context`)
        }

        const buildEnum = async (enm: EnumDescriptor) => {
            const baseCtx = await this.buildEnum(enm)
            const fields = await Promise.all(enm.fields.map(fld => this.buildEnumField(enm, fld)))

            return {
                ...baseCtx,
                fields
            }
        }

        const buildMessage = async (message: MessageDescriptor): Promise<TPluginContextBuilded['file']['messages'][0]> => {
            const baseCtx = await this.buildMessage(message)
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

        const buildFile = async (file: FileDescriptor): Promise<TPluginContextBuilded['file']> => {
            const baseCtx = await this.buildFile(file)
            const enums = await Promise.all(file.enums.map(enm => buildEnum(enm)))
            const messages = await Promise.all(file.messages.map(msg => buildMessage(msg)))
            const services = await Promise.all(file.services.map(async (service) => {
                const baseCtx = await this.buildService(service)
                const methods = await Promise.all(service.methods.map((method) => this.buildMethod(method)))

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
            }
        }

        return await buildFile(this.file) as any
    }

    private buildFile = async (desc: FileDescriptor): Promise<BasePluginContext['files']> => {
        const cbChanin = this.contextTransformerChains['files']
        return this.executeAsyncMethodsChain({ desc }, cbChanin)
    }

    private buildService = async (desc: ServiceDescriptor): Promise<BasePluginContext['services']> => {
        const cbChanin = this.contextTransformerChains['services']
        return this.executeAsyncMethodsChain({ desc }, cbChanin)
    }

    private buildMethod = async (desc: MethodDescriptor): Promise<BasePluginContext['methods']> => {
        const requestTypeInfo = this.projectContext.getTypeInfo(this.file, desc.inputMessageType)
        const responseTypeInfo = this.projectContext.getTypeInfo(this.file, desc.outputMessageType)
        const cbChanin = this.contextTransformerChains['methods']
        return this.executeAsyncMethodsChain({ desc, requestTypeInfo, responseTypeInfo }, cbChanin)
    }

    private buildMessage = async (desc: MessageDescriptor): Promise<BasePluginContext['messages']> => {
        const cbChanin = this.contextTransformerChains['messages']
        return this.executeAsyncMethodsChain({ desc }, cbChanin)
    }

    private buildMessageField = async (msgDesc: MessageDescriptor, msgFieldDesc: MessageFieldDescriptor): Promise<BasePluginContext['messagefields']> => {
        const typeInfo = this.projectContext.getTypeInfo(this.file, msgFieldDesc.type);
        const cbChanin = this.contextTransformerChains['messagefields']
        return this.executeAsyncMethodsChain({ msgDesc, type: 'field', msgFieldDesc, typeInfo }, cbChanin)
    }

    private buildMap = async (desc: MapFieldDescriptor): Promise<BasePluginContext['maps']> => {
        const keyTypeInfo = this.projectContext.getTypeInfo(this.file, desc.keyType)
        const valueTypeInfo = this.projectContext.getTypeInfo(this.file, desc.valueType)
        const cbChanin = this.contextTransformerChains['maps']
        return this.executeAsyncMethodsChain({ desc, type: 'map', keyTypeInfo, valueTypeInfo }, cbChanin)
    }

    private buildOneof = async (desc: OneofDescriptor): Promise<BasePluginContext['oneofs']> => {
        const cbChanin = this.contextTransformerChains['oneofs']
        return this.executeAsyncMethodsChain({ desc, type: 'oneof' }, cbChanin)
    }

    private buildEnum = async (desc: EnumDescriptor): Promise<BasePluginContext['enums']> => {
        const cbChanin = this.contextTransformerChains['enums']
        return this.executeAsyncMethodsChain({ desc }, cbChanin)
    }

    private buildEnumField = async (enmDesc: EnumDescriptor, enmFieldDesc: EnumFieldDescriptor): Promise<BasePluginContext['enumfields']> => {
        const cbChanin = this.contextTransformerChains['enumfields']
        return this.executeAsyncMethodsChain({ enmDesc, enmFieldDesc }, cbChanin)
    }

    private buildTypeInfo = async (protoType: string): Promise<BasePluginContext['typeinfos']> => {
        const typeInfo = this.projectContext.getTypeInfo(this.file, protoType);
        const cbChanin = this.contextTransformerChains['typeinfos']
        return this.executeAsyncMethodsChain({ typeInfo }, cbChanin)
    }

    private executeAsyncMethodsChain = async (intialResult: any, chain: ((...args: any[]) => Promise<any>)[]): Promise<any> => {
        let lastResult = intialResult
        for (const method of chain) {
            lastResult = await method({ctx: lastResult as any, prj: this.projectContext, file: this.file, use: this.use, def: this.def, opt: this.opts})
        }
        return lastResult
    }
}
