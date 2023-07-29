const weatherAPIbase = 'http://api.weatherapi.com/v1';
const curretWeatherEndpoint = '/current.json';
// todo: add search autocomplete and forecast
// *const forecastWeatherEndpoint = '/forecast.json';
// * const searchAutocompleteWeatherEndpoint = '/search.json';

const weatherAPIKey = 'faab396b2645438bbdf04155232907';

async function getCurrentWeather(query, aqi = 'no') {
	const modifiedQuery = query.replace(/ /g, '%20');
	finalURl =
		weatherAPIbase +
		curretWeatherEndpoint +
		'?key=' +
		weatherAPIKey +
		'&q=' +
		modifiedQuery +
		'&aqi=' +
		aqi;

	const response = await fetch(finalURl, { mode: 'cors' });
	const weatherData = await response.json();
	console.log(weatherData);
}

getCurrentWeather('14467');
