import { Command } from "commander";
import prompts from "prompts";
import chalk from "chalk";
import fs from "fs-extra";
import path from "path";

export const init = new Command()
    .name("init")
    .description("Initialize Clarity UI in your project")
    .action(async () => {
        console.log(chalk.blue("Initializing Clarity UI..."));

        // Simulating init process
        const configPath = path.resolve(process.cwd(), "clarity.config.json");
        if (fs.existsSync(configPath)) {
            console.log(chalk.yellow("Config file already exists."));
            return;
        }

        const response = await prompts({
            type: "confirm",
            name: "typescript",
            message: "Here is where we would ask about TypeScript, styles, etc. Proceed?",
            initial: true
        });

        if (response.typescript) {
            await fs.writeJSON(configPath, {
                style: "default",
                typescript: true,
                tailwind: {
                    config: "tailwind.config.js",
                    css: "app/globals.css",
                    baseColor: "slate",
                    cssVariables: true
                },
                aliases: {
                    components: "@/components",
                    utils: "@/lib/utils"
                }
            }, { spaces: 2 });
            console.log(chalk.green("Configuration created!"));
        }
    });
