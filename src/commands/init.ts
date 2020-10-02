import { promises as fs } from "fs";
import { Command, program } from "commander";
import { createRelativePath } from "./optionsParser";
import { ParsonConfig } from "../config";
import { removeParson } from "./helpers/helper";
import { parson } from "../index";

export default () =>
    new Command("init")
        .description("Initialize parson in this project")
        .option(
            "--jsonSchemasPath <path>",
            "The path of the folder the json schemas are being written.",
            createRelativePath,
            createRelativePath(program.rootPath, parson.config.jsonSchemasPath)
        )
        .option(
            "--typeScriptFilesPath <path>",
            "The path of the folder the json schemas are being written.",
            createRelativePath,
            createRelativePath(program.rootPath, parson.config.typeScriptFilesPath)
        )
        .option(
            "--override",
            "If set to true, will create all folder and files as if this would be a new initialization, deleting all existing files and folder if present.",
            false
        )
        .action(async (command) => {
            if (parson.initialized && !command.override) {
                console.log(
                    "Parson is already initialized. If you want to override the current initialization of parson, use parson init --override."
                );

                return;
            }

            if (command.override) {
                await removeParson();
            }

            const config: ParsonConfig = {
                jsonSchemasPath: command.jsonSchemasPath,
                typeScriptFilesPath: command.typeScriptFilesPath,
            };

            await fs.mkdir(command.jsonSchemasPath);
            await fs.mkdir(command.typeScriptFilesPath);

            await fs.writeFile(parson.configFilePath, JSON.stringify(config, null, 2));
        });
