import { CharStreams, CommonTokenStream } from "antlr4";

import Protobuf3Lexer from "./generated/Protobuf3Lexer";
import Protobuf3Parser from "./generated/Protobuf3Parser";
import { FileDescriptor } from "./reflection/FileDescriptor";
import { Visitor } from "./visitor";

export * from "./reflection/index";

export const parse = (content: string): FileDescriptor => {
    const inputStream = CharStreams.fromString(content);
    const lexer = new Protobuf3Lexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new Protobuf3Parser(tokenStream);
    const tree = parser.proto();
    const visitor = new Visitor();
    return visitor.visitProto(tree);
}
