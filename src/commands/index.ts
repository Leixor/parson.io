import { program } from "commander";
import init from "./init";
import remove from "./remove";

export function prepareCommands() {
    program
        .version("0.0.2", "-v, --version", "Output the version number.")
        .description("A typesafe way to parse json")
        .option(
            "-r, --rootPath <path>",
            "Defines where all the generated and required folders are located.",
            process.cwd()
        );

    program.addCommand(init());

    program.addCommand(remove());

    program.parse(process.argv);
}
