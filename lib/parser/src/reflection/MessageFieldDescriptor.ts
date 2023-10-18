import { BaseDescriptor, IBaseDescriptorProps } from "./BaseDescriptor";
import { Options } from "./Options";

export class MessageFieldDescriptor extends BaseDescriptor {
    public readonly options: Options[];
    public readonly type: string;
    public readonly fieldNumber: number;
    public readonly repeated: boolean;
    public readonly optional: boolean;

    constructor(props: IBaseDescriptorProps & {
        options: Options[];
        type: string;
        fieldNumber: number;
        repeated: boolean;
        optional: boolean;
    }) {
        super(props);
        this.options = props.options;
        this.type = props.type;
        this.fieldNumber = props.fieldNumber;
        this.repeated = props.repeated;
        this.optional = props.optional;
    }

    public toObject() {
        return Object.assign(super.toObject(), {
            options: this.options,
            type: this.type,
            fieldNumber: this.fieldNumber,
            repeated: this.repeated,
            optional: this.optional,
        })
    }
}
