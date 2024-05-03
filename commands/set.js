import input from '@inquirer/input';
import select from '@inquirer/select';
import colors from 'colors';
import Configstore from 'configstore';
import fs from 'fs';
import path from 'path';
import { validateLat, validateLong } from "../utils/validation.js";

// TODO: let the user specify the timezone...

export async function configParams() {
  const latitude = await input({ message: 'Enter latitude value'.magenta, validate: validateLat });
  const longitude = await input({ message: 'Enter longitude value'.magenta, validate: validateLong });
  const langauge = await select({
    message: 'Select language'.magenta,
    choices: [
      {
        name: 'English',
        value: 'en',
      },
      {
        name: 'Spanish',
        value: 'es',
      },
      {
        name: 'French',
        value: 'fr',
      },
      {
        name: 'German',
        value: 'de',
      },
      {
        name: 'Polish',
        value: 'pl',
      },
      {
        name: 'Czech',
        value: 'cs',
      }
    ],
  });
  const units = await select({
    message: 'Select unit system'.magenta,
    choices: [
      {
        name: 'Automatic',
        value: 'auto',
        description: 'Select the system automatically, based on the forecast location.',
      },
      {
        name: 'Metric',
        value: 'metric',
        description: 'Metric (SI) units (°C, mm/h, m/s, cm, km, hPa)',
      },
      {
        name: 'Imperial',
        value: 'us',
        description: 'Imperial units (°F, in/h, mph, in, mi, Hg).',
      },
      {
        name: 'UK',
        value: 'uk',
        description: 'Same as metric, except that visibility is in miles and wind speeds are in mph.',
      },
      {
        name: 'CA',
        value: 'ca',
        description: 'Same as metric, except that wind speeds are in km/h and pressure is in kPa.',
      },
    ],
  });

  // store the configuration settings in json file
  // bring in the package.json file
  const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

  const envv = 'XDG_CONFIG_HOME';

  let filePath;
  if (process.env[envv]) {
    const envvpath = process.env[envv];
    filePath = path.join(envvpath, `configstore/${pkg.name}.json`);
  }

  // check if the configstore file exists
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

  // create the Configstore instance
  new Configstore(pkg.name, {
    latitude: latitude,
    longitude: longitude,
    timezone: 'auto',
    langauge: langauge,
    units: units
  });

  console.log('Params are set successfully.'.green);
}
