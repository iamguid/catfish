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