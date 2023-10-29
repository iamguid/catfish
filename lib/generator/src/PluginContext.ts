import { BaseDescriptor, EnumDescriptor, EnumFieldDescriptor, FileDescriptor, MapFieldDescriptor, MessageDescriptor, MessageFieldDescriptor, MethodDescriptor, OneofDescriptor, ServiceDescriptor } from "@catfish/parser";
import { Import, ProjectContext, TypeInfo } from "./ProjectContext";
import { ResolvedThing, ResolvedThingImport } from "./ResolverV2";
import { last } from "rxjs";
import { MessageContext } from "./plugins/protobuf-models/context";

export type OptionalKey<T, key> = T extends Record<any, any> ? T[key] : unknown

export type ExtendByName<T, TExt, TName> = {
    [key in keyof T]: key extends TName ? (T[key] & TExt) : T[key]
}

export type BasePluginContext = {
    readonly files: { desc: FileDescriptor }
    readonly services: { desc: ServiceDescriptor }
    readonly methods: { desc: MethodDescriptor }
    readonly messages: { desc: MessageDescriptor }
    readonly messagefields: { msgDesc: MessageDescriptor, msgFieldDesc: MessageFieldDescriptor }
    readonly maps: { desc: MapFieldDescriptor }
    readonly oneofs: { desc: OneofDescriptor }
    readonly enums: { desc: EnumDescriptor }
    readonly enumfields: { enmDesc: EnumDescriptor, enmFieldDesc: EnumFieldDescriptor }
    readonly typeinfos: TypeInfo
}

export type PluginContextBuildedMessage<TPluginContext extends BasePluginContext> = TPluginContext['messages'] & {
    fields: (
        | (TPluginContext['messagefields'] & { typeInfo: TPluginContext['typeinfos'] })
        | (TPluginContext['maps'] & { keyTypeInfo: TPluginContext['typeinfos'], valueTypeInfo: TPluginContext['typeinfos'] })
        | (TPluginContext['oneofs'] & { fields: TPluginContext['messagefields'][] } )
    )[]
    messages: PluginContextBuildedMessage<TPluginContext>[],
    enums: (TPluginContext['enums'] & {
        fields: TPluginContext['enumfields'][]
    })[]
}

export type PluginContextBuilded<TPluginContext extends BasePluginContext> = {
    files: (TPluginContext['files'] & {
        services: (TPluginContext['services'] & {
            methods: (TPluginContext['methods'] & { requestTypeInfo: TPluginContext['typeinfos'], responseTypeInfo: TPluginContext['typeinfos'] })[]
        })[],
        messages: PluginContextBuildedMessage<TPluginContext>[],
        enums: (TPluginContext['enums'] & {
            fields: TPluginContext['enumfields'][]
        })[]
    })[],
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
        ((args: ContextsRegistryCbArguments<keyof BasePluginContext, TPluginOptions, TPluginContextI>) => Promise<TPluginContextO>)[]
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

    build = <
        TPluginContextBuilded extends PluginContextBuilded<TPluginContextO> = PluginContextBuilded<TPluginContextO>
    >(): TPluginContextBuilded => {
        const projectFiles = this.projectContext.getFiles();

        const buildMessage = (message: MessageDescriptor): TPluginContextBuilded['files'][0]['messages'][0] => ({
            ...this.buildMessage(message),
            fields: message.fields.map(fld => {
                if (fld instanceof OneofDescriptor) {
                    return {
                        ...this.buildOneof(fld),
                        fields: fld.fields.map(f => ({
                            ...this.buildMessageField(message, f),
                            typeInfo: this.buildTypeInfo(f.type)
                        }))
                    }
                }

                if (fld instanceof MapFieldDescriptor) {
                    return {
                        ...this.buildMap(fld),
                        keyTypeInfo: this.buildTypeInfo(fld.keyType),
                        valueTypeInfo: this.buildTypeInfo(fld.valueType),
                    }
                }

                if (fld instanceof MessageFieldDescriptor) {
                    return {
                        ...this.buildMessageField(message, fld),
                        typeInfo: this.buildTypeInfo(fld.type)
                    }
                }

                throw new Error(`Cannot build message field '${fld.fullpath}' context`)
            }),
            messages: message.messages.map(msg => buildMessage(msg)),
            enums: message.enums.map(enm => ({
                ...this.buildEnum(enm),
                fields: enm.fields.map(f => ({
                    ...this.buildEnumField(enm, f)
                }))
            }))
        })

        const result: TPluginContextBuilded['files'] = projectFiles.map(file => ({
            ...this.buildFile(file),
            services: file.services.map(service => ({
                ...this.buildService(service),
                methods: service.methods.map(method => ({
                    ...this.buildMethod(method),
                    requestTypeInfo: this.buildTypeInfo(method.inputMessageType),
                    responseTypeInfo: this.buildTypeInfo(method.outputMessageType),
                }))
            })),
            messages: file.messages.map(message => buildMessage(message)),
            enums: file.enums.map(enm => ({
                ...this.buildEnum(enm),
                fields: enm.fields.map(f => ({
                    ...this.buildEnumField(enm, f)
                }))
            }))
        }))

        return { files: result } as any
    }

    private buildFile = (desc: FileDescriptor): BasePluginContext['files'] => {
        const cbChanin = this.contextTransformerChains['files']
        let lastResult: BasePluginContext['files'] = { desc }
        for (const cb of cbChanin) {
            lastResult = cb({ ctx: lastResult as any, prj: this.projectContext, file: this.file, use: this.use, def: this.def, opt: this.opts }) as any
        }
        return lastResult
    }

    private buildService = (desc: ServiceDescriptor) => {
        const cbChanin = this.contextTransformerChains['services']
        let lastResult: BasePluginContext['services'] = { desc }
        for (const cb of cbChanin) {
            lastResult = cb({ ctx: lastResult as any, prj: this.projectContext, file: this.file, use: this.use, def: this.def, opt: this.opts }) as any
        }
        return lastResult
    }

    private buildMethod = (desc: MethodDescriptor) => {
        const cbChanin = this.contextTransformerChains['methods']
        let lastResult: BasePluginContext['methods'] = { desc }
        for (const cb of cbChanin) {
            lastResult = cb({ ctx: lastResult as any, prj: this.projectContext, file: this.file, use: this.use, def: this.def, opt: this.opts }) as any
        }
        return lastResult
    }

    private buildMessage = (desc: MessageDescriptor) => {
        const cbChanin = this.contextTransformerChains['messages']
        let lastResult: BasePluginContext['messages'] = { desc }
        for (const cb of cbChanin) {
            lastResult = cb({ ctx: lastResult as any, prj: this.projectContext, file: this.file, use: this.use, def: this.def, opt: this.opts }) as any
        }
        return lastResult
    }

    private buildMessageField = (msgDesc: MessageDescriptor, msgFieldDesc: MessageFieldDescriptor) => {
        const cbChanin = this.contextTransformerChains['messagefields']
        let lastResult: BasePluginContext['messagefields'] = { msgDesc, msgFieldDesc }
        for (const cb of cbChanin) {
            lastResult = cb({ ctx: lastResult as any, prj: this.projectContext, file: this.file, use: this.use, def: this.def, opt: this.opts }) as any
        }
        return lastResult
    }

    private buildMap = (desc: MapFieldDescriptor) => {
        const cbChanin = this.contextTransformerChains['maps']
        let lastResult: BasePluginContext['maps'] = { desc }
        for (const cb of cbChanin) {
            lastResult = cb({ ctx: lastResult as any, prj: this.projectContext, file: this.file, use: this.use, def: this.def, opt: this.opts }) as any
        }
        return lastResult
    }

    private buildOneof = (desc: OneofDescriptor) => {
        const cbChanin = this.contextTransformerChains['oneofs']
        let lastResult: BasePluginContext['oneofs'] = { desc }
        for (const cb of cbChanin) {
            lastResult = cb({ ctx: lastResult as any, prj: this.projectContext, file: this.file, use: this.use, def: this.def, opt: this.opts }) as any
        }
        return lastResult
    }

    private buildEnum = (desc: EnumDescriptor) => {
        const cbChanin = this.contextTransformerChains['enums']
        let lastResult: BasePluginContext['enums'] = { desc }
        for (const cb of cbChanin) {
            lastResult = cb({ ctx: lastResult as any, prj: this.projectContext, file: this.file, use: this.use, def: this.def, opt: this.opts }) as any
        }
        return lastResult
    }

    private buildEnumField = (enmDesc: EnumDescriptor, enmFieldDesc: EnumFieldDescriptor) => {
        const cbChanin = this.contextTransformerChains['enumfields']
        let lastResult: BasePluginContext['enumfields'] = { enmDesc, enmFieldDesc }
        for (const cb of cbChanin) {
            lastResult = cb({ ctx: lastResult as any, prj: this.projectContext, file: this.file, use: this.use, def: this.def, opt: this.opts }) as any
        }
        return lastResult
    }

    private buildTypeInfo = (protoType: string) => {
        const typeInfo = this.projectContext.getTypeInfo(this.file, protoType);
        const cbChanin = this.contextTransformerChains['typeinfos']
        let lastResult: BasePluginContext['typeinfos'] = typeInfo
        for (const cb of cbChanin) {
            lastResult = cb({ ctx: lastResult as any, prj: this.projectContext, file: this.file, use: this.use, def: this.def, opt: this.opts }) as any
        }
        return lastResult
    }
}
