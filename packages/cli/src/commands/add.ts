import { Command } from "commander";
import chalk from "chalk";

export const add = new Command()
    .name("add")
    .description("Add a component to your project")
    .argument("[component]", "The component to add")
    .action(async (component) => {
        if (!component) {
            console.log(chalk.red("Please specify a component name."));
            return;
        }
        console.log(chalk.blue(`Adding ${component}...`));
        // Here we would fetch from registry and copy files
        console.log(chalk.green(`${component} added (simulation).`));
    });
