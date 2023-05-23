import { IDescriptor } from "./IDescriptor";

export class DescriptorsRegistry {
    public readonly descriptors: Map<string, IDescriptor> = new Map();

    public get(fullname: string) {
        if (!this.descriptors.has(fullname)) {
            throw new Error(`Descriptor "${fullname}" not  found`)
        }

        return this.descriptors.get(fullname)!;
    }

    public set(fullname: string, descriptor: IDescriptor) {
        if (this.descriptors.has(fullname)) {
            throw new Error(`Descriptor "${fullname}" already exists`)
        }

        this.descriptors.set(fullname, descriptor);
    }
}