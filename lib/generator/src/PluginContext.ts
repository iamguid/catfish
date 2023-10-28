import { BaseDescriptor, EnumDescriptor, EnumFieldDescriptor, FileDescriptor, MapFieldDescriptor, MessageDescriptor, MessageFieldDescriptor, MethodDescriptor, OneofDescriptor, ServiceDescriptor } from "@catfish/parser";
import { Import, ProjectContext, TypeInfo } from "./ProjectContext";
import { ResolvedThing, ResolvedThingImport } from "./ResolverV2";

export type OptionalKey<T, key> = T extends Record<any, any> ? T[key] : unknown

export type PluginContextChainKeys = {
    readonly files: { I: any, O: any }
    readonly services: { I: any, O: any }
    readonly methods: { I: any, O: any }
    readonly messages: { I: any, O: any }
    readonly messagefields: { I: any, O: any }
    readonly maps: { I: any, O: any }
    readonly oneofs: { I: any, O: any }
    readonly enums: { I: any, O: any }
    readonly enumfields: { I: any, O: any }
    readonly typeinfos: { I: any, O: any }
}

export type BasePluginContext = {
    files: { I: FileDescriptor, O: { desc: FileDescriptor, filePath: string } }
    services: { I: ServiceDescriptor, O: { desc: ServiceDescriptor } }
    methods: { I: MethodDescriptor, O: { desc: MethodDescriptor } }
    messages: { I: MessageDescriptor, O: { desc: MessageDescriptor } }
    messagefields: { I: { msgDesc: MessageDescriptor, msgFieldDesc: MessageFieldDescriptor }, O: { msgDesc: MessageDescriptor, msgFieldDesc: MessageFieldDescriptor } }
    maps: { I: MapFieldDescriptor, O: { desc: MapFieldDescriptor } }
    oneofs: { I: OneofDescriptor, O: { desc: OneofDescriptor } }
    enums: { I: EnumDescriptor, O: { desc: EnumDescriptor } }
    enumfields: { I: { enmDesc: EnumDescriptor, enmFieldDesc: EnumFieldDescriptor }, O: { enmDesc: EnumDescriptor, enmFieldDesc: EnumFieldDescriptor } }
    typeinfos: { I: { type: string }, O: TypeInfo }
}

export type PluginContextResult<TPluginContext extends PluginContextChain<any, any>> = {
    [key in keyof TPluginContext]: OptionalKey<TPluginContext[key], 'O'>[]
}

export type PluginContextChain<TInput extends Partial<PluginContextChainKeys>, TOutput extends Partial<PluginContextChainKeys>> = {
    [key in keyof PluginContextChainKeys]: {
        I: TInput[key] extends Record<any, any> ? TInput[key]['I'] : never,
        O: (TInput[key] extends Record<any, any> ? TInput[key]['O'] : never)
            & (TOutput[key] extends Record<any, any> ? TOutput[key]['O'] : never)
    }
}

export type ContextsRegistryCb<
    TPluginOptions extends Record<string, any>,
    TPluginContext extends BasePluginContext = BasePluginContext,
    TName extends keyof TPluginContext = keyof TPluginContext,
> = (
    ctx: OptionalKey<TPluginContext[TName], 'I'>,
    prj: ProjectContext,
    file: FileDescriptor,
    use: (namespace: string, desc: BaseDescriptor, thingName: string) => ResolvedThingImport,
    def: (namespace: string, desc: BaseDescriptor) => Promise<ResolvedThing>,
    opt: TPluginOptions
) => Promise<OptionalKey<TPluginContext[TName], 'O'>>

export class ContextsRegistry<
    TPluginOptions extends Record<string, any>,
    TPluginContext extends BasePluginContext = BasePluginContext,
> {
    private registry: Record<string, ContextsRegistryCb<TPluginOptions, TPluginContext, keyof TPluginContext>[]> = {}

    constructor(
        private projectContext: ProjectContext,
        private file: FileDescriptor,
        private fileName: string,
        private opts: TPluginOptions,
    ) {
        this.buildBasePluginContext(this)
     }

    def = (namespace: string, desc: BaseDescriptor, thingName: string): ResolvedThing => {
        return this.projectContext.resolverV2.define(namespace, desc, thingName, this.fileName)
    }

    use = async (namespace: string, desc: BaseDescriptor, protoType?: string): Promise<ResolvedThingImport> => {
        return this.projectContext.resolverV2.resolveByNamespace(namespace, desc, this.file, protoType)
    }

    // extend = <
    //     TNextPluginContext,
    //     TName extends keyof TPluginContext
    // >(
    //     name: TName,
    //     cb: ContextsRegistryCb<TPluginOptions, TPluginContext, TName>
    // ): ContextsRegistry<PluginContextChain<TPluginContext, TNextPluginContext>> => {
    //     if (!this.registry[name as string]) {
    //         this.registry[name as string] = []
    //     }

    //     this.registry[name as string].push(cb)

    //     return this as ContextsRegistry<PluginContextChain<TPluginContext, TNextPluginContext>>
    // }

    extDesc <TName extends keyof TPluginContext>(
        name: TName,
        cb: ContextsRegistryCb<TPluginOptions, TPluginContext, TName>
    ) {
        if (!this.registry[name as string]) {
            this.registry[name as string] = []
        }

        this.registry[name as string].push(cb)

        return this;
    }


    build = <TResult = PluginContextResult<TPluginContext>, TF = TResult['files']>(): TResult => {
        const projectFiles = this.projectContext.getFiles();

        const files: TResult['files'] = [];
        const services: TResult['services'] = [];
        const methods: PluginContextResult<TPluginContext>['methods'] = [];
        const messages: PluginContextResult<TPluginContext>['messages'] = [];
        const messagefields: PluginContextResult<TPluginContext>['messagefields'] = [];
        const maps: PluginContextResult<TPluginContext>['maps'] = [];
        const oneofs: PluginContextResult<TPluginContext>['oneofs'] = [];
        const enums: PluginContextResult<TPluginContext>['enums'] = [];
        const enumfields: PluginContextResult<TPluginContext>['enumfields'] = [];
        const typeinfos: PluginContextResult<TPluginContext>['typeinfos'] = [];

        for (const prop in this.registry) {
            const cbChanin = this.registry[prop]

            // let lastResult = 
            // for (const cb of cbChanin) {
            //     cb()
            // }

        }

        return { files, services, methods, messages, messagefields, maps, oneofs, enums, enumfields, typeinfos }
    }

    private buildBasePluginContext = (cr: ContextsRegistry<BasePluginContext, Record<string, any>>) => {
        cr.extDesc('files', async (ctx, prj) => ({ desc: ctx, filePath: prj.getProtoFilePath(ctx) }))
        cr.extDesc('services', async (ctx) => ({ desc: ctx }))
        cr.extDesc('methods', async (ctx) => ({ desc: ctx }))
        cr.extDesc('messages', async (ctx) => ({ desc: ctx }))
        cr.extDesc('messagefields', async (ctx) => ({ msgDesc: ctx.msgDesc, msgFieldDesc: ctx.msgFieldDesc }))
        cr.extDesc('maps', async (ctx) => ({ desc: ctx }))
        cr.extDesc('oneofs', async (ctx) => ({ desc: ctx }))
        cr.extDesc('enums', async (ctx) => ({ desc: ctx }))
        cr.extDesc('enumfields', async (ctx) => ({ enmDesc: ctx.enmDesc, enmFieldDesc: ctx.enmFieldDesc }))
        cr.extDesc('typeinfos', async (ctx, prj, file) => prj.getTypeInfo(file, ctx.type))
    }
}

export type ExtendedPluignContext = PluginContextChain<BasePluginContext, {
    files: { I: BasePluginContext['files']['I'], O: { helloworld: string } }
}>

export const buildExtendedPluignContext = (cr: ContextsRegistry<Record<string, any>, ExtendedPluignContext>) => {
    cr.extDesc('files', async (ctx, prj) => ({ desc: ctx, filePath: prj.getProtoFilePath(ctx), helloworld: '' }))
}
