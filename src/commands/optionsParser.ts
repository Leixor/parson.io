import path from "path";

export function createRelativePath(rootPath: string, relativePath: string) {
    return path.resolve(rootPath, relativePath);
}