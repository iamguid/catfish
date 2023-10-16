import * as path from "path";
import * as fs from "fs";

export interface WalkByFiles {
    basePath: string;
    filePath: string;
}

export interface WalkByFilesProps extends WalkByFiles {
    each: (params: WalkByFiles) => void;
}

export const walkByFiles = ({ basePath, filePath, each }: WalkByFilesProps) => {
    const filesDir = fs.readdirSync(path.join(basePath, filePath));

    for (const item of filesDir) {
      const fullPath = path.join(basePath, filePath, item);
      const isDirectory = fs.statSync(fullPath).isDirectory();

      isDirectory 
        ? walkByFiles({ each, basePath, filePath: path.join(filePath, item) }) 
        : each({ basePath, filePath: path.join(filePath, item) });
    }
}