import { BaseDescriptor, IBaseDescriptorProps } from "./BaseDescriptor";
import { FieldDescriptor } from "./FieldDescriptor";

export class OneofFieldDescriptor extends BaseDescriptor {
    public readonly type: string;
    public readonly fields: FieldDescriptor[];

    constructor(props: IBaseDescriptorProps & {
        type: string,
        fields: FieldDescriptor[]
    }) {
        super(props);
        this.type = props.type;
        this.fields = props.fields;
    }

    public toObject() {
        return Object.assign(super.toObject(), {
            type: this.type,
            fields: this.fields.map(field => field.toObject())
        });
    }
}
