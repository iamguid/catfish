import { ParseTreeVisitor } from "antlr4";

import { ProtoContext, ImportStatementContext, ServiceDefContext, RpcContext, MessageDefContext, MessageElementContext, FieldContext, MapFieldContext, OneofFieldContext, EnumDefContext, EnumFieldContext } from "./generated/Protobuf3Parser";
import Protobuf3Visitor from "./generated/Protobuf3Visitor";
import Protobuf3Parser from "./generated/Protobuf3Parser";
import { EnumDescriptor } from "./reflection/EnumDescriptor";
import { EnumFieldDescriptor } from "./reflection/EnumFieldDescriptor";
import { FieldDescriptor, MapField } from "./reflection/FieldDescriptor";
import { FileDescriptor, FileImport } from "./reflection/FileDescriptor";
import { IDescriptor } from "./reflection/IDescriptor";
import { MessageDescriptor } from "./reflection/MessageDescriptor";
import { MethodDescriptor } from "./reflection/MethodDescriptor";
import { ServiceDescriptor } from "./reflection/ServiceDescriptor";
import { extractOptions, normalizeTypeName, trimChar } from "./utils";

export class Visitor extends ParseTreeVisitor<IDescriptor> implements Protobuf3Visitor<IDescriptor> {
    public fileDescriptor: FileDescriptor;

    private namespace: string[] = [];

    constructor() {
        super();
        this.fileDescriptor = new FileDescriptor()
    }

    defaultResult() {
        return this.fileDescriptor;
    }

    visitProto(ctx: ProtoContext): FileDescriptor {
        const topLevelDefs = ctx.topLevelDef_list();

        const packge = ctx.packageStatement(0).fullIdent().getText() || "";
        this.fileDescriptor.package = packge;

        ctx.importStatement_list().forEach(importStatement => {
            this.visitImportStatement(importStatement);
        });

        const options = ctx.optionStatement_list()
            .map(optionStatement => extractOptions(optionStatement));

        const services = topLevelDefs
            .filter(topLevelDef => Boolean(topLevelDef.serviceDef()))
            .map((topLevelDef, index) => this.visitServiceDef(topLevelDef.serviceDef()!, index));

        const messages = topLevelDefs
            .filter(topLevelDef => Boolean(topLevelDef.messageDef()))
            .map((topLevelDef, index) => this.visitMessageDef(topLevelDef.messageDef()!, index))

        const enums = topLevelDefs
            .filter(topLevelDef => Boolean(topLevelDef.enumDef()))
            .map((topLevelDef, index) => this.visitEnumDef(topLevelDef.enumDef()!, index))

        this.fileDescriptor.options.push(...options);
        this.fileDescriptor.services.push(...services);
        this.fileDescriptor.messages.push(...messages);
        this.fileDescriptor.enums.push(...enums);

        return this.fileDescriptor;
    }

    visitImportStatement(ctx: ImportStatementContext): FileDescriptor {
        const importType = ctx.getToken(Protobuf3Parser.WEAK, 0).getText();
        const importPath = trimChar(ctx.strLit().getText(), "\"");

        let imprt: FileImport = {
            type: 'public',
            path: importPath,
        }

        switch (importType) {
            case 'weak': imprt.type = 'weak'; break;
            case 'public': imprt.type = 'public'; break;
        }

        this.fileDescriptor.imports.push(imprt);

        return this.fileDescriptor;
    }

    visitServiceDef(ctx: ServiceDefContext, index = 0): ServiceDescriptor {
        const serviceName = ctx.serviceName().getText()
        const serviceElements = ctx.serviceElement_list();

        this.namespace.push(serviceName);
        const methods = serviceElements
            .filter(serviceElement => Boolean(serviceElement.rpc()))
            .map((serviceElement, index) => this.visitRpc(serviceElement.rpc()!, index))
        this.namespace.pop();

        const options = serviceElements
            .filter(serviceElement => Boolean(serviceElement.optionStatement()))
            .map(serviceElement => extractOptions(serviceElement.optionStatement()!));

        return new ServiceDescriptor({
            index,
            name: serviceName,
            namespace: this.namespace.join('.'),
            fileDescriptor: this.fileDescriptor,
            options,
            methods
        });
    }

    visitRpc(ctx: RpcContext, index = 0): MethodDescriptor {
        const options = ctx.optionStatement_list()
            .map(optionStatement => extractOptions(optionStatement));

        return new MethodDescriptor({
            index,
            name: ctx.rpcName().getText(),
            namespace: this.namespace.join('.'),
            fileDescriptor: this.fileDescriptor,
            options,
            isClientStreaming: Boolean(ctx.getToken(Protobuf3Parser.STREAM, 0)),
            isServerStreaming: Boolean(ctx.getToken(Protobuf3Parser.STREAM, 1)),
            inputMessageType: ctx.messageType(0).getText(),
            outputMessageType: ctx.messageType(1).getText(),
        });
    }

    visitMessageDef(ctx: MessageDefContext, index = 0): MessageDescriptor {
        const messageBody = ctx.messageBody();
        const messageElements = messageBody.messageElement_list();
        const messageName = ctx.messageName().getText();
        this.namespace.push(messageName);

        const nestedMessages = messageElements
            .filter(messageElement => Boolean(messageElement.messageDef()))
            .map((messageElement, index) => this.visitMessageDef(messageElement.messageDef()!, index));

        const nestedEnums = messageElements
            .filter(messageElement => Boolean(messageElement.enumDef()))
            .map((messageElement, index) => this.visitEnumDef(messageElement.enumDef()!, index));

        const fields = messageElements
            .filter(messageElement => {
                return Boolean(messageElement.field()) 
                    || Boolean(messageElement.oneof()) 
                    || Boolean(messageElement.mapField())
            })
            .reduce((current: FieldDescriptor[], messageElement: MessageElementContext, index) => {
                if (Boolean(messageElement.field())) {
                    current.push(this.visitField(messageElement.field()!, index));
                }

                if (Boolean(messageElement.mapField())) {
                    current.push(this.visitMapField(messageElement.mapField()!, index));
                }

                if (Boolean(messageElement.oneof())) {
                    const oneof = messageElement.oneof();
                    const oneofName = oneof.oneofName().getText();
                    const fields = oneof.oneofField_list();

                    fields.forEach((field, oneofIndex) => {
                        current.push(this.visitOneofField(field, index + oneofIndex, oneofName)) 
                    });
                }

                return current;
            }, [])

        this.namespace.pop();

        const options = messageElements
            .filter(messageElement => Boolean(messageElement.optionStatement()))
            .map(messageElement => extractOptions(messageElement.optionStatement()!))

        return new MessageDescriptor({
            index,
            name: messageName,
            namespace: this.namespace.join('.'),
            fileDescriptor: this.fileDescriptor,
            options,
            fields,
            messages: nestedMessages,
            enums: nestedEnums
        });
    }

    visitField(ctx: FieldContext, index = 0): FieldDescriptor {
        const namespace = this.namespace.join('.');
        const fieldName = ctx.fieldName().getText();
        const filedType = normalizeTypeName(ctx.type_().getText(), this.fileDescriptor.registry, namespace);
        const fieldNumber = Number.parseInt(ctx.fieldNumber().getText(), 10);
        const isRepeated = Boolean(ctx.REPEATED().getText());

        const options = ctx.fieldOptions().fieldOption_list()
            .map(fieldOption => extractOptions(fieldOption));

        return new FieldDescriptor({
            index,
            name: fieldName,
            namespace,
            fileDescriptor: this.fileDescriptor,
            options: options || [],
            type: filedType,
            repeated: isRepeated,
            fieldNumber 
        });
    }

    visitMapField(ctx: MapFieldContext, index = 0): FieldDescriptor {
        const namespace = this.namespace.join('.');
        const fieldName = ctx.mapName().getText();
        const fieldNumber = Number.parseInt(ctx.fieldNumber().getText(), 10);
        const keyType = normalizeTypeName(ctx.keyType().getText(), this.fileDescriptor.registry, namespace);
        const valueType = normalizeTypeName(ctx.type_().getText(), this.fileDescriptor.registry, namespace);
        const mapField: MapField = { keyType, valueType }

        const options = ctx.fieldOptions().fieldOption_list()
            .map(fieldOption => extractOptions(fieldOption));

        return new FieldDescriptor({
            index,
            name: fieldName,
            namespace,
            fileDescriptor: this.fileDescriptor,
            options: options || [],
            type: "",
            repeated: false,
            fieldNumber,
            map: mapField
        });
    }

    visitOneofField(ctx: OneofFieldContext, index = 0, oneofName = ''): FieldDescriptor {
        const namespace = this.namespace.join('.');
        const fieldName = ctx.fieldName().getText();
        const filedType = normalizeTypeName(ctx.type_().getText(), this.fileDescriptor.registry, namespace);
        const fieldNumber = Number.parseInt(ctx.fieldNumber().getText(), 10);

        const options = ctx.fieldOptions().fieldOption_list()
            .map(fieldOption => extractOptions(fieldOption));

        return new FieldDescriptor({
            index,
            name: fieldName,
            namespace,
            fileDescriptor: this.fileDescriptor,
            oneofName,
            options: options || [],
            type: filedType,
            repeated: false,
            fieldNumber 
        });
    }

    visitEnumDef(ctx: EnumDefContext, index = 0): EnumDescriptor {
        const enumName = ctx.enumName().getText();
        const enumBody = ctx.enumBody();
        const enumElements = enumBody.enumElement_list();

        this.namespace.push(enumName);
        const fields = enumElements
            .filter(enumElement => Boolean(enumElement.enumField()))
            .map((enumElement, index) => this.visitEnumField(enumElement.enumField()!, index))
        this.namespace.pop();

        const options = enumElements
            .filter(enumElement => Boolean(enumElement.optionStatement()))
            .map(enumElement => extractOptions(enumElement.optionStatement()!))

        return new EnumDescriptor({
            index,
            name: enumName,
            namespace: this.namespace.join('.'),
            fileDescriptor: this.fileDescriptor,
            options,
            fields
        });
    }

    visitEnumField(ctx: EnumFieldContext, index = 0): EnumFieldDescriptor {
        const fieldName = ctx.ident().getText();
        const fieldValue = Number.parseInt(ctx.intLit().getText());

        const options = ctx.enumValueOptions().enumValueOption_list()
            .map(enumValueOption => extractOptions(enumValueOption))

        return new EnumFieldDescriptor({
            index,
            name: fieldName,
            namespace: this.namespace.join('.'),
            fileDescriptor: this.fileDescriptor,
            options: options || [],
            fieldName: fieldName,
            fieldValue: fieldValue
        });
    }
}