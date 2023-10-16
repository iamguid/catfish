import { BaseDescriptor, IBaseDescriptorProps } from "./BaseDescriptor";
import { EnumFieldDescriptor } from "./EnumFieldDescriptor";
import { Options } from "./Options";

export class EnumDescriptor extends BaseDescriptor {
    public readonly options: Options[];
    public readonly fields: EnumFieldDescriptor[];

    constructor(props: IBaseDescriptorProps & {
        options: Options[],
        fields: EnumFieldDescriptor[]
    }) {
        super(props);
        this.options = props.options;
        this.fields = props.fields;
    }

    public toObject() {
        return Object.assign(super.toObject(), {
            options: this.options,
            fields: this.fields.map(field => field.toObject())
        })
    }
}
