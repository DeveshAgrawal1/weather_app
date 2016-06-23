import Axios from 'axios';

const API_KEY = 'f1fcb28a5a6b7615f97955c00e087a92';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export default function fetchWeather(city){

	const url = `${ROOT_URL}&q=${city},us`;
	const request = Axios.get(url);

	console.log('request gayi');
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}