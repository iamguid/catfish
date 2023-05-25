import { CharStreams, CommonTokenStream, ErrorListener, RecognitionException, Recognizer, Token } from "antlr4";
import Protobuf2Lexer from "./generated/Protobuf2Lexer";
import Protobuf2Parser from "./generated/Protobuf2Parser";

import Protobuf3Lexer from "./generated/Protobuf3Lexer";
import Protobuf3Parser from "./generated/Protobuf3Parser";
import { FileDescriptor } from "./reflection/FileDescriptor";
import { VisitorV3 } from "./visitorV3";

export * from "./reflection/index";

export const parse = (content: string): FileDescriptor => {
    const inputStream = CharStreams.fromString(content);

    const lexerV2 = new Protobuf2Lexer(inputStream);
    const lexerV3 = new Protobuf3Lexer(inputStream);

    const tokenStreamV2 = new CommonTokenStream(lexerV2);
    const tokenStreamV3 = new CommonTokenStream(lexerV3);

    const parserV2 = new Protobuf2Parser(tokenStreamV2);
    const parserV3 = new Protobuf3Parser(tokenStreamV3);

    parserV2.removeErrorListeners();
    const proto2SyntaxValue = parserV2.syntax().getChild(2)?.getText();
    const isProto2 = proto2SyntaxValue.includes('proto2')

    inputStream.reset();

    if (isProto2) {
        throw new Error('Protobuf v2 is not supported')
    }

    parserV3.removeErrorListeners()
    const proto3SyntaxValue = parserV3.syntax().getChild(2)?.getText();
    const isProto3 = proto3SyntaxValue.includes('proto3')

    if (!isProto3) {
        throw new Error('Only protobuf v3 is supported')
    }

    const treeV3 = parserV3.proto();
    const visitorV3 = new VisitorV3();
    return visitorV3.visitProto(treeV3);
}
