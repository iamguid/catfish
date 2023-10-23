import * as pjs from "protobufjs/minimal";
import * as rxjs from "rxjs";
import grpc from "grpc-web";

export const convertRecordToMap = <TKey extends string | number, TInputVal, TOutputVal>(
    input: Record<TKey, TInputVal>,
    converter: (val: TInputVal) => TOutputVal
): Map<TKey, TOutputVal> => {
    const output = new Map();

    for (const prop in input) {
        output.set(prop, converter(input[prop]))
    }

    return output;
}

export const convertMapToRecord = <TKey extends string | number, TInputVal, TOutputVal>(
    input: Map<TKey, TInputVal>,
    converter: (val: TInputVal) => TOutputVal
): Record<TKey, TOutputVal> => {
    const output: Record<TKey, TOutputVal> = {} as Record<TKey, TOutputVal>;

    for (const [key, val] of input.entries()) {
        output[key] = converter(val);
    }

    return output;
}

export const convertBytesToBase64 = (bytes: Uint8Array | Buffer): string => {
    return pjs.util.base64.encode(bytes, 0, bytes.length);
}

export const convertBase64ToBytes = (base64: string): Uint8Array | Buffer => {
    const buffer: any = [];
    pjs.util.base64.decode(base64, buffer, 0);
    return Uint8Array.from(buffer);
}

export type ClientReadableStreamEvent<TData> = { type: "data", data: TData } | { type: 'metadata', metadata: grpc.Metadata } | { type: 'status', status: grpc.Status }

export const observableWrapClintReadableStream = <TResp>(stream: grpc.ClientReadableStream<TResp>): rxjs.Observable<ClientReadableStreamEvent<TResp>> => {
    return new rxjs.Observable((sbscriber) => {
        stream.on('data', (data) => {
            sbscriber.next({ type: 'data', data })
        })

        stream.on('error', (error) => {
            sbscriber.error(error)
        })

        stream.on('metadata', (metadata) => {
            sbscriber.next({ type: 'metadata', metadata })
        })

        stream.on('status', (status) => {
            sbscriber.next({ type: 'status', status })
        })

        stream.on('end', () => {
            sbscriber.complete();
        })

        return stream.cancel
    })
}