import { BaseDescriptor, IBaseDescriptorProps } from "./BaseDescriptor";
import { Options } from "./Options";

export class EnumFieldDescriptor extends BaseDescriptor {
    public readonly options: Options[];
    public readonly fieldName: string;
    public readonly fieldValue: number;

    constructor(props: IBaseDescriptorProps & {
        options: Options[],
        fieldName: string,
        fieldValue: number,
    }) {
        super(props)
        this.options = props.options;
        this.fieldName = props.fieldName;
        this.fieldValue = props.fieldValue;
    }

    public toObject() {
        return Object.assign(super.toObject(), {
            options: this.options,
            fieldName: this.fieldName,
            fieldValue: this.fieldValue
        })
    }
}
