import axios from 'axios';
import Configstore from 'configstore';
import fs from "fs";
import path from "path";

const options = {
  method: 'GET',
  url: 'https://ai-weather-by-meteosource.p.rapidapi.com/current',
  params: {
    lat: '28.78301',
    lon: '32.03768',
    timezone: 'auto',
    language: 'en',
    units: 'auto'
  },
  headers: {
    'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
  }
};

export async function showWeather() {
  const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
  const cfg = new Configstore(pkg.name);

  if (Object.is(typeof cfg.get('latitude'), 'undefined')) {
    console.log(`Latitude value is not set. Run \`wt cfg set\` to set up configs`.cyan);
    process.exit(1);
  }

  if (Object.is(typeof cfg.get('longitude'), 'undefined')) {
    console.log(`Longitude value is not set. Run \`wt cfg set\` to set up configs`.cyan);
    process.exit(1);
  }

  if (Object.is(typeof cfg.get('langauge'), 'undefined')) {
    console.log(`Langauge value is not set. Run \`wt cfg set\` to set up configs`.cyan);
  }

  if (Object.is(typeof cfg.get('units'), 'undefined')) {
    console.log(`Units value is not set. Run \`wt cfg set\` to set up configs`.cyan);
  }

  /*
  try {
    const response = await axios.request(options);
    // console.log(response.data);
  } catch (error) {
    console.error(error);
  }*/
}
