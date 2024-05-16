import { Command } from "commander";
import { showWeather } from "../commands/show.js";

const program = new Command();

program
  .version('1.0.0')
  .description('CLI to request weather forecast for your chosen location')
  .command('cfg', 'configure params of your preffered location');

program
  .command('show')
  .description('Show weather at the chosen location')
  .action(() => { showWeather() });

program.parse();
