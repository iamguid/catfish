export const headerTemplate = (ctx: { packageName: string, fileName: string }) => `
    // @ts-nocheck
    //
    // Generated code by catfish
    //
    // DO NOT EDIT!
    //
    // package: ${ctx.packageName}
    // file: ${ctx.fileName}

`;