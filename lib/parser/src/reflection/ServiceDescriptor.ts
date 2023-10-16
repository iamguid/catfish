import { BaseDescriptor, IBaseDescriptorProps } from "./BaseDescriptor";
import { MethodDescriptor } from "./MethodDescriptor";
import { Options } from "./Options";

export class ServiceDescriptor extends BaseDescriptor {
    /**
     * Contains all options that defined in service 
     */

    public readonly options: Options[] = [];
    /**
     * Contains all method descriptors that defined in service 
     */
    public readonly methods: MethodDescriptor[] = [];

    constructor(props: IBaseDescriptorProps & {
        options: Options[],
        methods: MethodDescriptor[]
    }) {
        super(props);
        this.options = props.options;
        this.methods = props.methods;
    }

    public toObject() {
        return Object.assign(super.toObject(), {
            options: this.options,
            methods: this.methods.map(method => method.toObject()),
        })
    }
}
