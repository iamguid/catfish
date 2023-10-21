import { BaseDescriptor, FileDescriptor } from "@catfish/parser";
import { Import, ProjectContext } from "./ProjectContext";

export function filePathToPseudoNamespace(filePath: string): string {
    return filePath
      .replace(/\//g, '_')
      .replace(/\./g, '_')
      .replace(/\-/g, '_');
}

export const buildNamespace = (...items: (string | undefined | null)[]): string => {
  let result = '';

  for (const item of items) {
    if (!item) {
      continue;
    }

    const trimmed = trimChar(item, '.');
    const isEmpty = trimmed === '';

    if (!isEmpty) {
      result += '.' + item;
    }
  }

  return result.substring(1);
}

const trimChar = (str: string, charToRemove: string): string => {
  while (str.charAt(0) === charToRemove) {
    str = str.substring(1);
  }

  while (str.charAt(str.length - 1) === charToRemove) {
    str = str.substring(0, str.length - 1);
  }

  return str;
}

export const upperCaseFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const lowerCaseFirst = (str: string): string => {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

export const snakeToCamel = (str: string): string => {
  return str.replace(/(\_\w)/g, function (m) {
    return m[1].toUpperCase();
  });
}

export const getPathToRoot = (path: string) => {
  const depth = path.split('/').length;
  return depth === 1 ? './' : new Array(depth).join('../');
}

export const replaceProtoSuffix = (protoFilePath: string, newSuffix: string): string => {
  const suffix = '.proto';
  const hasProtoSuffix = protoFilePath.slice(protoFilePath.length - suffix.length) === suffix;
  return hasProtoSuffix
    ? protoFilePath.slice(0, -suffix.length) + '_' + newSuffix
    : protoFilePath;
}

// normaliseFieldObjectName modifies the field name that appears in the `asObject` representation
// to match the logic found in `protobuf/compiler/js/js_generator.cc`. See: https://goo.gl/tX1dPQ
export function normaliseFieldObjectName(name: string): string {
  switch (name) {
    case 'abstract':
    case 'boolean':
    case 'break':
    case 'byte':
    case 'case':
    case 'catch':
    case 'char':
    case 'class':
    case 'const':
    case 'continue':
    case 'debugger':
    case 'default':
    case 'delete':
    case 'do':
    case 'double':
    case 'else':
    case 'enum':
    case 'export':
    case 'extends':
    case 'false':
    case 'final':
    case 'finally':
    case 'float':
    case 'for':
    case 'function':
    case 'goto':
    case 'if':
    case 'implements':
    case 'import':
    case 'in':
    case 'instanceof':
    case 'int':
    case 'interface':
    case 'long':
    case 'native':
    case 'new':
    case 'null':
    case 'package':
    case 'private':
    case 'protected':
    case 'public':
    case 'return':
    case 'short':
    case 'static':
    case 'super':
    case 'switch':
    case 'synchronized':
    case 'this':
    case 'throw':
    case 'throws':
    case 'transient':
    case 'try':
    case 'typeof':
    case 'var':
    case 'void':
    case 'volatile':
    case 'while':
    case 'with':
      return `pb_${name}`;
  }
  return name;
}

export const getFullImportPath = (ctx: ProjectContext, file: FileDescriptor, desc: BaseDescriptor, suffix: string, ignoreCurrentFile = false) => {
  const filePath = ctx.getProtoFilePath(desc.fileDescriptor);
  const modelsFilePath = replaceProtoSuffix(filePath, suffix);
  const modelsFileImportName = filePathToPseudoNamespace(modelsFilePath);

  // Module defined in current file
  if (ignoreCurrentFile && desc.fileDescriptor === file) {
    return desc.fullname
  } else {
    return `${modelsFileImportName}.${desc.fullname}`
  }
}

export const getImports = (ctx: ProjectContext, file: FileDescriptor, suffix: string, includeCurrentFile = true): Import[] => {
    const imports: Import[] = [];
    const dependencies = ctx.getDependencies(file, true);

    for (const dependency of dependencies) {
      const filePath = ctx.getProtoFilePath(dependency);
      const moduleFilePath = replaceProtoSuffix(filePath, suffix);
      const moduleFileImportName = filePathToPseudoNamespace(moduleFilePath);

      imports.push({
        path: `./${moduleFilePath}`,
        name: moduleFileImportName
      })
    }

    if (includeCurrentFile) {
      const filePath = ctx.getProtoFilePath(file);
      const moduleFilePath = replaceProtoSuffix(filePath, suffix);
      const moduleFileImportName = filePathToPseudoNamespace(moduleFilePath);
      imports.push({
        path: `./${moduleFilePath}`,
        name: moduleFileImportName
      })
    }

    return imports;
}