import { ConstantContext, OptionStatementContext, EnumValueOptionContext, FieldOptionContext } from "./generated/Protobuf3Parser";
import { DescriptorsRegistry } from "./reflection";
import { Options } from "./reflection/Options";

export function buildNamespace(...items: (string | undefined | null)[]) {
  let result = '';

  for (const item of items) {
    if (!item) {
      continue;
    }

    const trimmed = trimChar(item, '.');
    const isEmpty = trimmed === null || trimmed === '' || trimmed === undefined;

    if (!isEmpty) {
      result += '.' + item;
    }
  }

  return result.substring(1);
}

export const extractOptionConstantValue = (ctx: ConstantContext): any => {
    let result: any = null;

    if (ctx.boolLit()) {
        result = ctx.boolLit()!.getText() === "true";
    }

    if (ctx.strLit()) {
        result = trimChar(ctx.strLit()!.getText(), "\"");
    }

    if (ctx.intLit()) {
        if (ctx.MINUS()) {
            result = -Number.parseInt(ctx.intLit()!.getText());
        } else {
            result = Number.parseInt(ctx.intLit()!.getText());
        }
    }

    if (ctx.floatLit()) {
        if (ctx.MINUS()) {
            result = -Number.parseFloat(ctx.floatLit()!.getText());
        } else {
            result = Number.parseFloat(ctx.floatLit()!.getText());
        }
    }

    if (ctx.fullIdent()) {
        result = ctx.fullIdent()!.getText();
    }

    if (ctx.blockLit()) {
        result = {}

        const idents = ctx.blockLit()!.ident_list()
        const constants = ctx.blockLit()!.constant_list();

        idents.forEach((ident, index) => {
            result[ident.getText()] = extractOptionConstantValue(constants[index]);
        })
    }

    return result
}

export const extractOptions = (ctx: OptionStatementContext | EnumValueOptionContext | FieldOptionContext): Options => {
    const options: Options = {};

    const fullIndent = ctx.optionName().fullIdent_list();
    let optionName = fullIndent[0].getText();
        
    if (fullIndent.length === 2) {
        optionName += "." + fullIndent[1].getText();
    }

    let optionValue: any = extractOptionConstantValue(ctx.constant());

    options[optionName] = optionValue;

    return options;
}

export const trimChar = (str: string, charToRemove: string) => {
  while (str.charAt(0) === charToRemove) {
    str = str.substring(1);
  }

  while (str.charAt(str.length - 1) === charToRemove) {
    str = str.substring(0, str.length - 1);
  }

  return str;
}

export const normalizeTypeName = (typeName: string, registry: DescriptorsRegistry, namespace: string) => {
  const checkName = buildNamespace(namespace, typeName);
  return registry.descriptors.has(checkName) ? checkName : typeName
}
