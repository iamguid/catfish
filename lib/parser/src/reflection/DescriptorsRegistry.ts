import { BaseDescriptor } from "./BaseDescriptor";

export class DescriptorsRegistry {
    public readonly descriptors: Map<string, BaseDescriptor> = new Map();

    public tryGet(fullname: string) {
        return this.descriptors.get(fullname);
    }

    public get(fullname: string) {
        if (!this.descriptors.has(fullname)) {
            throw new Error(`Descriptor "${fullname}" not  found`)
        }

        return this.descriptors.get(fullname)!;
    }

    public set(fullname: string, descriptor: BaseDescriptor) {
        if (this.descriptors.has(fullname)) {
            throw new Error(`Descriptor "${fullname}" already exists`)
        }

        this.descriptors.set(fullname, descriptor);
    }
}