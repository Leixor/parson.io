import { Command } from "commander";
import { ParsonConfig } from "../config";
import { removeParson, requireParsonIsInitialized } from "./helpers/helper";
import { parson } from "../index";

export default () =>
    new Command("remove").description("Remove parson from this project").action(async () => {
        await removeParson();
    });
