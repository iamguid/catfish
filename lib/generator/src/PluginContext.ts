import { BaseDescriptor, EnumDescriptor, EnumFieldDescriptor, FileDescriptor, MapFieldDescriptor, MessageDescriptor, MessageFieldDescriptor, MethodDescriptor, OneofDescriptor, ServiceDescriptor } from "@catfish/parser";
import { Import, ProjectContext, TypeInfo } from "./ProjectContext";
import { ResolvedThing, ResolvedThingImport } from "./ResolverV2";

export type OptionalKey<T, key> = T extends Record<any, any> ? T[key] : unknown

export type BasePluginContext = {
    readonly files: { I: { desc: FileDescriptor }, O: { desc: FileDescriptor, filePath: string } }
    readonly services: { I: { desc: ServiceDescriptor }, O: { desc: ServiceDescriptor } }
    readonly methods: { I: { desc: MethodDescriptor }, O: { desc: MethodDescriptor } }
    readonly messages: { I: { desc: MessageDescriptor }, O: { desc: MessageDescriptor } }
    readonly messagefields: { I: { msgDesc: MessageDescriptor, msgFieldDesc: MessageFieldDescriptor }, O: { msgDesc: MessageDescriptor, msgFieldDesc: MessageFieldDescriptor } }
    readonly maps: { I: { desc: MapFieldDescriptor }, O: { desc: MapFieldDescriptor } }
    readonly oneofs: { I: { desc: OneofDescriptor }, O: { desc: OneofDescriptor } }
    readonly enums: { I: { desc: EnumDescriptor }, O: { desc: EnumDescriptor } }
    readonly enumfields: { I: { enmDesc: EnumDescriptor, enmFieldDesc: EnumFieldDescriptor }, O: { enmDesc: EnumDescriptor, enmFieldDesc: EnumFieldDescriptor } }
    readonly typeinfos: { I: TypeInfo, O: TypeInfo }
}

export type BasePluginContextAny = {
    [key in keyof BasePluginContext]: {
        I: any,
        O: any,
    }
}

export type BasePluginContextKeys = {
    [key in keyof BasePluginContext]: any
}

export type PluginContextResult<TPluginContext extends BasePluginContextAny> = {
    [key in keyof TPluginContext]: OptionalKey<TPluginContext[key], 'O'>[]
}

export type PluginContextChain<TPrev extends Partial<BasePluginContext>, TNext extends Partial<BasePluginContext>> = {
    [key in keyof BasePluginContext]: {
        I: OptionalKey<TPrev[key], 'O'>,
        O: OptionalKey<TPrev[key], 'O'> & OptionalKey<TNext[key], 'O'>
    }
}

export type PluginContextIO<TPluginContextI extends Record<string, any>, TPluginContextO extends Record<string, any>> = {
    [key in keyof TPluginContextI]: {
        I: TPluginContextI[key],
        O: OptionalKey<TPluginContextO, key>
    }
}

export type PluginContextO<TPluginContext extends BasePluginContextAny> = {
    [key in keyof TPluginContext]: OptionalKey<TPluginContext[key], 'O'>
}

export type PluginContextI<TPluginContext extends BasePluginContextAny> = {
    [key in keyof TPluginContext]: OptionalKey<TPluginContext[key], 'I'>
}

export type ContextsRegistryCb<
    TPluginOptions extends Record<string, any>,
    TPluginContextI extends PluginContextI<BasePluginContext> = PluginContextI<BasePluginContext>,
    TPluginContextO extends PluginContextO<BasePluginContext> = PluginContextO<BasePluginContext>,
    TName extends keyof BasePluginContext = keyof BasePluginContext,
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
    TPluginContextI extends PluginContextI<BasePluginContextAny> = PluginContextI<BasePluginContext>,
    TPluginContextO extends PluginContextO<BasePluginContext> = PluginContextO<BasePluginContext>,
> {
    private registry: Record<string, ContextsRegistryCb<any, any, any>[]> = {}

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

    extend<TExtendedPluginContext extends PluginContextO<BasePluginContext>>(
        this: ContextsRegistry<TPluginOptions, TExtendedPluginContext, TPluginContextO & TExtendedPluginContext>,
        extendedContext: { [key in keyof BasePluginContextKeys]?: ContextsRegistryCb<TPluginOptions, TPluginContextO, TPluginContextO & TExtendedPluginContext, key> },
    ) {
        // if (!this.registry[name as string]) {
        //     this.registry[name as string] = []
        // }

        // this.registry[name as string].push(cb)

        return this;
    }

    build = <
        TPluginContext extends BasePluginContextAny = PluginContextIO<TPluginContextI, TPluginContextO>,
        TPluginContextResult extends BasePluginContextKeys = PluginContextResult<TPluginContext>
    > (): TPluginContextResult => {
        const projectFiles = this.projectContext.getFiles();

        const files: PluginContextResult<TPluginContext>['services'] = [];
        const services: PluginContextResult<TPluginContext>['services'] = [];
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
