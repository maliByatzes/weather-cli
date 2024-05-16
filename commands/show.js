import axios from 'axios';

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
    'X-RapidAPI-Key': 'ffd0534254msh2278f6dc4359a52p14f4e7jsnc884122d2a2f',
    'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export function showWeather() {}
