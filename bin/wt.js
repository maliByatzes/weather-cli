import { Command } from "commander";

const program = new Command();

program
  .version('1.0.0')
  .description('CLI to request weather forecast for your chosen location')
  .command('cfg', 'configure params of your preffered location');

program.parse();
