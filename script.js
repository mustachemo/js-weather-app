const weatherAPIbase = 'http://api.weatherapi.com/v1';
const curretWeatherEndpoint = '/current.json';
// todo: add search autocomplete and forecast
// *const forecastWeatherEndpoint = '/forecast.json';
// * const searchAutocompleteWeatherEndpoint = '/search.json';

const weatherAPIKey = 'faab396b2645438bbdf04155232907';

function getCurrentWeather(query) {
	const modifiedQuery = query.replace(/ /g, '%20');
}
