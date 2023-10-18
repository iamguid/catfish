import { BaseDescriptor, IBaseDescriptorProps } from "./BaseDescriptor";
import { Options } from "./Options";

export class MapFieldDescriptor extends BaseDescriptor {
    public readonly options: Options[];
    public readonly keyType: string;
    public readonly valueType: string;
    public readonly fieldNumber: number;

    constructor(props: IBaseDescriptorProps & {
        options: Options[];
        keyType: string;
        valueType: string;
        fieldNumber: number;
    }) {
        super(props);
        this.options = props.options;
        this.keyType = props.keyType;
        this.valueType = props.valueType;
        this.fieldNumber = props.fieldNumber;
    }

    public toObject() {
        return Object.assign(super.toObject(), {
            options: this.options,
            keyType: this.keyType,
            valueType: this.valueType,
            fieldNumber: this.fieldNumber,
        })
    }
}
