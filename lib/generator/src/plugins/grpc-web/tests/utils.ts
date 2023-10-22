import * as grpc from 'grpc-web';
import { GrpcJsPlugin, Project, ProtobufModelsPlugin } from "../../../index";

// based on article https://lucas-levin.com/code/blog/mocking-grpc-web-requests-for-integration-testing
const createDataFrame = (bytes: Uint8Array) => {
    // create the data length bytes - there is probably a more concise way, but this works
    const dataLengthBytes = new Uint8Array(
        new Uint32Array([bytes.byteLength]).buffer
    );
    dataLengthBytes.reverse();
    const frame = new Uint8Array(bytes.byteLength + 5);
    frame.set([0x00], 0); // set the magic byte 0x00 to identify the data frame
    frame.set(dataLengthBytes, 1); // set the length bytes
    frame.set(bytes, 5); // set the actual data
    return frame;
}

const createTrailersFrame = (trailers: grpc.Metadata) => {
    let asString = "";
    for (const key in trailers) {
      asString += `${key}: ${trailers[key]}\r\n`;
    }
    const encoder = new TextEncoder();
    const trailersEncoded = encoder.encode(asString);
    const trailersLengthBytes = new Uint8Array(
      new Uint32Array([trailersEncoded.byteLength]).buffer
    );
    trailersLengthBytes.reverse();
    const frame = new Uint8Array(trailersEncoded.byteLength + 5);
    frame.set([0x80], 0); // magic byte for trailers is 0x80
    frame.set(trailersLengthBytes, 1);
    frame.set(trailersEncoded, 5);
    return frame;
}

export const createGrpcResponseBody = (message: GrpcMessage, trailers: grpc.Metadata) => {
    const dataFrame = createDataFrame(message.serialize());
    const trailersFrame = createTrailersFrame(trailers);

    const body = new Uint8Array(dataFrame.byteLength + trailersFrame.byteLength);
    body.set(dataFrame, 0);
    body.set(trailersFrame, dataFrame.byteLength);

    return body;
}

export interface CollectedClientReadableStream {
    data: GrpcMessage[]
    errors: grpc.RpcError[]
    metadatas: grpc.Metadata[]
    statuses: grpc.Status[]
}

export const collectClientReadableStream = (stream: grpc.ClientReadableStream<GrpcMessage>) => {
    return new Promise<CollectedClientReadableStream>((resolve) => {
        const data: GrpcMessage[] = [];
        const errors: grpc.RpcError[] = [];
        const metadatas: grpc.Metadata[] = [];
        const statuses: grpc.Status[] = [];

        stream.on("data", (d) => {
            data.push(d);
        })

        stream.on("error", (error) => {
            errors.push(error);
        })

        stream.on("metadata", (metadata) => {
            metadatas.push(metadata);
        })

        stream.on("status", (status) => {
            statuses.push(status);
        })

        stream.on("end", () => {
            resolve({
                data,
                errors,
                metadatas,
                statuses,
            })
        })
    })
}

// TODO: Move to runtime package
export interface GrpcMessage {
    serialize(): Uint8Array | Buffer
    deserialize(bytes: Uint8Array | Buffer): void
    toJSON(): any
    fromJSON(obj: any): void
}

export const generateAll = (
    path: string,
    protobufModelsOptions?: ProtobufModelsPlugin.PluginOptions,
    grpcJsOptions?: GrpcJsPlugin.PluginOptions
) => {
    const project = new Project({
        protoDirPath: path,
        outDirPath: path,
    });

    project
        .load()
        .resgister(ProtobufModelsPlugin.plugin, protobufModelsOptions)
        .resgister(GrpcJsPlugin.plugin, grpcJsOptions)
        .generate();
}
