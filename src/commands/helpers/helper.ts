import { promises as fs } from "fs";
import { parson } from "../../index";

export async function removeParson() {
    try {
        await fs.rmdir(parson.config.jsonSchemasPath);
        await fs.unlink(parson.configFilePath);
    } catch (error) {}
}

export function requireParsonIsInitialized() {
    if (!parson.initialized) {
        console.log(
            "Parson hasn't been initialized for this project. Use 'parson init' or read parson help init for more information"
        );
    }
}
