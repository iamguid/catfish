import { BaseDescriptor, IBaseDescriptorProps } from './BaseDescriptor';
import { EnumDescriptor } from './EnumDescriptor';
import { MessageFieldDescriptor } from './MessageFieldDescriptor';
import { Options } from './Options';

export class MessageDescriptor extends BaseDescriptor {
    /**
     * Contains all options that defined in message 
     */
    public readonly options: Options[] = [];

    /**
     * Contains all nested messages descriptors that defined in message 
     */
    public readonly messages: MessageDescriptor[] = [];

    /**
     * Contains all nested enums descriptors that defined in message 
     */
    public readonly enums: EnumDescriptor[] = [];

    /**
     * Contains all fields descriptors that defined in message 
     */
    public readonly fields: BaseDescriptor[] = [];

    constructor(props: IBaseDescriptorProps & {
        options: Options[],
        fields: BaseDescriptor[],
        messages: MessageDescriptor[],
        enums: EnumDescriptor[]
    }) {
        super(props);
        this.options = props.options;
        this.messages = props.messages;
        this.enums = props.enums;
        this.fields = props.fields;
    }

    public toObject(): any {
        return Object.assign(super.toObject(), {
            options: this.options,
            fields: this.fields.map(field => field.toObject()),
            messages: this.messages.map(message => message.toObject()),
            enums: this.enums.map(enm => enm.toObject()),
        })
    }
}
