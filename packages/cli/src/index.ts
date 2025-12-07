#!/usr/bin/env node
import { Command } from "commander";
import { init } from "./commands/init";
import { add } from "./commands/add";

const program = new Command();

program
    .name("clarity-ui")
    .description("CLI for adding components to your project")
    .version("0.0.1");

program.addCommand(init);
program.addCommand(add);

program.parse();
