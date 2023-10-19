import * as pjs from "protobufjs/minimal";

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