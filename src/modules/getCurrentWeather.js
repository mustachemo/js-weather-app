const weatherAPIbase = 'https://api.weatherapi.com/v1';
const curretWeatherEndpoint = '/current.json';
const weatherAPIKey = 'faab396b2645438bbdf04155232907';

export default async function getCurrentWeather(query, aqi = 'no') {
	const modifiedQuery = query.replace(/ /g, '%20');
	const finalURl = `${
		weatherAPIbase + curretWeatherEndpoint
	}?key=${weatherAPIKey}&q=${modifiedQuery}&aqi=${aqi}`;

	try {
		const response = await fetch(finalURl, { mode: 'cors' });
		if (!response.ok) throw new Error(`Location ${query} not found`);
		const weatherData = await response.json();
		return weatherData;
	} catch (error) {
		return error.message;
	}
}
