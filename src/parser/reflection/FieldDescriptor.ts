import { BaseDescriptor, IBaseDescriptorProps } from "./BaseDescriptor";
import { Options } from "./Options";

export interface MapField {
    keyType: string;
    valueType: string;
}

export class FieldDescriptor extends BaseDescriptor {
    public readonly options: Options[];
    public readonly type?: string;
    public readonly fieldNumber: number;
    public readonly repeated: boolean;
    public readonly map?: MapField;
    public readonly oneofName?: string;

    constructor(props: IBaseDescriptorProps & {
        options: Options[];
        type?: string;
        fieldNumber: number;
        repeated: boolean;
        map?: MapField;
        oneofName?: string;
    }) {
        super(props);
        this.options = props.options;
        this.type = props.type;
        this.fieldNumber = props.fieldNumber;
        this.repeated = props.repeated;
        this.map = props.map;
        this.oneofName = props.oneofName;
    }

    public toObject() {
        return Object.assign(super.toObject(), {
            options: this.options,
            type: this.type,
            fieldNumber: this.fieldNumber,
            repeated: this.repeated,
            map: this.map,
            oneofName: this.oneofName
        })
    }
}
