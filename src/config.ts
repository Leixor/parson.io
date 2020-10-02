import { promises as fs } from "fs";
import { parson } from "./index";

export type ParsonConfig = {
    jsonSchemasPath: string;
    typeScriptFilesPath: string;
};

export const defaultConfig: ParsonConfig = {
    jsonSchemasPath: "./jsonSchemas",
    typeScriptFilesPath: "./typeScriptFiles",
};

export async function getConfigFromFile(): Promise<object | undefined> {
    const parsonConfigFile = await fs.readFile(parson.configFilePath).catch((error) => {
        console.error(error);
    });

    let parsedParsonConfigFile = undefined;
    if (parsonConfigFile) {
        parsedParsonConfigFile = JSON.parse(parsonConfigFile.toString());
    }

    return parsedParsonConfigFile;
}
