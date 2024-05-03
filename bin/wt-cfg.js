import { Command } from "commander";
import { configParams, showParams } from "../commands/cfg.js";

const program = new Command();

program
  .command('set')
  .description('set config settings')
  .action(() => { configParams() });

program
  .command('show')
  .description('show config settings')
  .action(() => { showParams() });

program.parse();
