#!/usr/bin/env node
/*
import { getConfig, ParsonConfig } from "./config";*/
import * as glob from "glob-promise";
import clear from "clear";
import chalk from "chalk";
import figlet from "figlet";
import { program } from "commander";
import { prepareCommands } from "./commands";
import { defaultConfig, getConfigFromFile, ParsonConfig } from "./config";
import path from "path";
export const parson: { config: ParsonConfig; configFilePath: string; initialized: boolean } = {
    config: defaultConfig,
    configFilePath: path.resolve(process.cwd(), "./parson.json"),
    initialized: false,
};

(async () => {
    clear();
    const configFile = await getConfigFromFile();

    if (configFile) {
        parson.config = { ...parson.config, ...configFile };
        parson.initialized = true;
    }

    prepareCommands();
})();
