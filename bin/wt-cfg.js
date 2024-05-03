import { Command } from "commander";
import { configParams } from "../commands/set.js";

const program = new Command();

program
  .command('set')
  .description('set config settings')
  .action(() => { configParams() });

program.parse();
