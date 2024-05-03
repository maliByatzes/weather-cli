import { Command } from "commander";
import { configParams } from "../commands/set.js";

const program = new Command();

program
  .version('1.0.0')
  .description('CLI to request weather forecast for your chosen location');

program
  .command('set')
  .description('configure params of your preffered location')
  .action(() => { configParams() });

program.parse();
