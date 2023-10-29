import { BaseDescriptor, EnumDescriptor, EnumFieldDescriptor, FileDescriptor, MapFieldDescriptor, MessageDescriptor, MessageFieldDescriptor, MethodDescriptor, OneofDescriptor, ServiceDescriptor } from "@catfish/parser";
import { Import, ProjectContext, TypeInfo } from "./ProjectContext";
import { ResolvedThing, ResolvedThingImport } from "./ResolverV2";

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

export type PluginContextChain<TPrev extends Partial<BasePluginContextIOAny>, TNext extends Partial<BasePluginContextIOAny>> = {
    [key in keyof BasePluginContext]: {
        I: OptionalKey<TPrev[key], 'O'>,
        O: OptionalKey<TPrev[key], 'O'> & OptionalKey<TNext[key], 'O'>
    }
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
    use: (namespace: string, desc: BaseDescriptor, thingName: string) => ResolvedThingImport,
    def: (namespace: string, desc: BaseDescriptor) => Promise<ResolvedThing>,
    opt: TPluginOptions
}

export type ContextsRegistryCb<
    TName extends keyof BasePluginContext,
    TPluginOptions extends Record<string, any>,
    TPluginContextI extends BasePluginContext,
    TPluginContextO extends BasePluginContext,
> = (
    ctx: TPluginContextI[TName],
    prj: ProjectContext,
    file: FileDescriptor,
    use: (namespace: string, desc: BaseDescriptor, thingName: string) => ResolvedThingImport,
    def: (namespace: string, desc: BaseDescriptor) => Promise<ResolvedThing>,
    opt: TPluginOptions
) => Promise<TPluginContextO[TName]>

export class ContextsRegistry<
    TPluginOptions extends Record<string, any>,
    TPluginContextI extends BasePluginContext = BasePluginContext,
    TPluginContextO extends BasePluginContext = BasePluginContext,
> {
    private registry: Record<string, ContextsRegistryCb<any, any, any, any>[]> = {}

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

    // extend<
    //     TName extends keyof BasePluginContext,
    //     TNextPluginContext extends BasePluginContext = (TPluginContext & { test: string }),
    // >(
    //     this: ContextsRegistry<TPluginOptions, PluginContextChain<TPluginContext, TNextPluginContext>>,
    //     name: TName,
    //     cb: ContextsRegistryCb<TPluginOptions, PluginContextChain<TPluginContext, TNextPluginContext>, TName>
    // ) {
    //     if (!this.registry[name as string]) {
    //         this.registry[name as string] = []
    //     }

    //     this.registry[name as string].push(cb)

    //     return this;
    // }

    extend<
        TCbOut extends TPluginContextO[TName],
        TName extends keyof BasePluginContext = keyof BasePluginContext,
        TExtendedPluginContext extends BasePluginContext = ExtendByName<TPluginContextO, TCbOut, TName>,
    >(
        name: TName,
        cb: (args: ContextsRegistryCbArguments<TName, TPluginOptions, TPluginContextI>) => Promise<TCbOut>,
    ) {
        // if (!this.registry[name as string]) {
        //     this.registry[name as string] = []
        // }

        // this.registry[name as string].push(cb)

        return this as unknown as ContextsRegistry<TPluginOptions, TExtendedPluginContext, TPluginContextO & TExtendedPluginContext>;
    }

    build = <
        TPluginContext extends BasePluginContextIOAny = PluginContextIO<TPluginContextI, TPluginContextO>,
        TPluginContextResult extends BasePluginContextAny = PluginContextResult<TPluginContext>
    > (): TPluginContextResult => {
        const projectFiles = this.projectContext.getFiles();

        const files: TPluginContextResult['services'] = [];
        const services: TPluginContextResult['services'] = [];
        const methods: TPluginContextResult['methods'] = [];
        const messages: TPluginContextResult['messages'] = [];
        const messagefields: TPluginContextResult['messagefields'] = [];
        const maps: TPluginContextResult['maps'] = [];
        const oneofs: TPluginContextResult['oneofs'] = [];
        const enums: TPluginContextResult['enums'] = [];
        const enumfields: TPluginContextResult['enumfields'] = [];
        const typeinfos: TPluginContextResult['typeinfos'] = [];

        for (const prop in this.registry) {
            const cbChanin = this.registry[prop]

            // let lastResult = 
            // for (const cb of cbChanin) {
            //     cb()
            // }

        }

        return { files, services, methods, messages, messagefields, maps, oneofs, enums, enumfields, typeinfos } as TPluginContextResult
    }

    // private buildBasePluginContext = (cr: ContextsRegistry<Record<string, any>, BasePluginContext>) => {
    //     cr.extend('files', async (ctx, prj) => ({ desc: ctx, filePath: prj.getProtoFilePath(ctx) }))
    //     cr.extend('services', async (ctx) => ({ desc: ctx }))
    //     cr.extend('methods', async (ctx) => ({ desc: ctx }))
    //     cr.extend('messages', async (ctx) => ({ desc: ctx }))
    //     cr.extend('messagefields', async (ctx) => ({ msgDesc: ctx.msgDesc, msgFieldDesc: ctx.msgFieldDesc }))
    //     cr.extend('maps', async (ctx) => ({ desc: ctx }))
    //     cr.extend('oneofs', async (ctx) => ({ desc: ctx }))
    //     cr.extend('enums', async (ctx) => ({ desc: ctx }))
    //     cr.extend('enumfields', async (ctx) => ({ enmDesc: ctx.enmDesc, enmFieldDesc: ctx.enmFieldDesc }))
    //     cr.extend('typeinfos', async (ctx, prj, file) => prj.getTypeInfo(file, ctx.type))
    // }
}

// export type ExtendedPluignContext = PluginContextChain<BasePluginContext, {
//     files: { I: BasePluginContext['files']['I'], O: { helloworld: string } }
// }>

// export const buildExtendedPluignContext = (cr: ContextsRegistry<Record<string, any>, ExtendedPluignContext>) => {
//     cr.extend('files', async (ctx, prj) => ({ desc: ctx, filePath: prj.getProtoFilePath(ctx), helloworld: '' }))
// }
