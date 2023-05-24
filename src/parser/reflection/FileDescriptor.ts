import { buildNamespace } from "../utils";
import { DescriptorsRegistry } from "./DescriptorsRegistry";
import { EnumDescriptor } from "./EnumDescriptor";
import { IDescriptor } from "./IDescriptor";
import { MessageDescriptor } from "./MessageDescriptor";
import { Options } from "./Options";
import { ServiceDescriptor } from "./ServiceDescriptor";

export interface FileImport {
    type: 'weak' | 'public';
    path: string;
}

export class FileDescriptor implements IDescriptor {
    /**
     * Descriptors registry that contains links to all .proto file descriptors
     */
    public readonly registry: DescriptorsRegistry;

    /**
     * Package name declared in .proto file.
     */
    public package: string = "";

    /**
     * Contains all options that defined in .proto file.
     */
    public readonly options: Options[] = [];

    /**
     * Contains all imports descriptors that defined in .proto file.
     */
    public readonly imports: FileImport[] = [];

    /**
     * Contains all services descriptors that defined in .proto file.
     */
    public readonly services: ServiceDescriptor[] = [];

    /**
     * Contains all messages descriptors that defined in .proto file.
     */
    public readonly messages: MessageDescriptor[] = [];

    /**
     * Contains all enums descriptors that defined in .proto file.
     */
    public readonly enums: EnumDescriptor[] = [];

    constructor() {
        this.registry = new DescriptorsRegistry();
    }

    public toObject() {
        return {
            package: this.package,
            options: this.options,
            imports: this.imports,
            services: this.services.map(service => service.toObject()),
            messages: this.messages.map(message => message.toObject()),
            enums: this.enums.map(enm => enm.toObject())
        }
    }
}
