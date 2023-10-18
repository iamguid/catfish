import { BaseDescriptor, IBaseDescriptorProps } from "./BaseDescriptor";
import { MessageFieldDescriptor } from "./MessageFieldDescriptor";

export class OneofDescriptor extends BaseDescriptor {
    public readonly fields: MessageFieldDescriptor[];

    constructor(props: IBaseDescriptorProps & {
        fields: MessageFieldDescriptor[]
    }) {
        super(props);
        this.fields = props.fields;
    }

    public toObject() {
        return Object.assign(super.toObject(), {
            fields: this.fields.map(field => field.toObject())
        });
    }
}
