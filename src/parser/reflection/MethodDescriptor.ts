import { BaseDescriptor, IBaseDescriptorProps } from "./BaseDescriptor";
import { Options } from "./Options";

export class MethodDescriptor extends BaseDescriptor {
    public readonly options: Options[];
    public readonly isClientStreaming: boolean;
    public readonly isServerStreaming: boolean;
    public readonly inputMessageType: string;
    public readonly outputMessageType: string;

    constructor(props: IBaseDescriptorProps & {
        options: Options[],
        isClientStreaming: boolean,
        isServerStreaming: boolean,
        inputMessageType: string,
        outputMessageType: string,
    }) {
        super(props)
        this.options = props.options;
        this.isClientStreaming = props.isClientStreaming;
        this.isServerStreaming = props.isServerStreaming;
        this.inputMessageType = props.inputMessageType;
        this.outputMessageType = props.outputMessageType;
    }

    public toObject() {
        return Object.assign(super.toObject(), {
            options: this.options,
            isClientStreaming: this.isClientStreaming,
            isServerStreaming: this.isServerStreaming,
            inputMessageType: this.inputMessageType,
            outputMessageType: this.outputMessageType,
        })
    }
}
