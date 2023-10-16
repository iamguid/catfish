import { buildNamespace } from '../utils';
import { FileDescriptor } from './FileDescriptor';
import { IDescriptor } from './IDescriptor';

export interface IBaseDescriptorProps {
    index: number | null,
    name: string,
    namespace: string,
    fileDescriptor: FileDescriptor,
}

export abstract class BaseDescriptor implements IDescriptor {
    /**
     * The index of this descriptor within its parent descriptor.
     * 
     * This returns the index of this descriptor within its parent, for
     * this descriptor's type. (There can be duplicate values for different
     * types, e.g. one enum type with index 0 and one message type with index 0.)
     */
    public readonly index: number | null;

    /**
     * Returns the name of the entity.
     */
    public readonly name: string;

    /**
     * The namespace inside .proto file of the descriptor's target.
     * Namespace does not include package name
     */
    public readonly namespace: string;

    /**
     * The file this descriptor was declared in.
     */
    public readonly fileDescriptor: FileDescriptor;

    constructor(props: IBaseDescriptorProps) {
        this.index = props.index;
        this.name = props.name;
        this.namespace = props.namespace;
        this.fileDescriptor = props.fileDescriptor;

        this.fileDescriptor.registry.set(this.fullpath, this);
        this.fileDescriptor.registry.set(this.fullname, this);
    }

    /**
     * Returns full path of entity being described.
     * 
     * {package}.{namespace}.{name}
     */
    public get fullpath() {
        return buildNamespace(this.fileDescriptor.package, this.namespace, this.name);
    }

    /**
     * Returns full name of entity being described.
     * 
     * {namespace}.{name}
     */
    public get fullname() {
        return buildNamespace(this.namespace, this.name);
    }

    public toObject() {
        return {
            index: this.index,
            name: this.name,
            namespace: this.namespace
        }
    }
}
