import '../node_modules/minireset.css/minireset.min.css';
import '../static/style.scss';
import getCurrentWeather from './modules/getCurrentWeather';

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchButton');

searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
});

searchBtn.addEventListener('click', async () => {
	if (searchInput.value === '') return;
	const weatherData = await getCurrentWeather(searchInput.value);
	console.log(weatherData);
	console.log(weatherData.location.name);
	console.log(weatherData.location.country);
	console.log(weatherData.current.temp_c);
	console.log(weatherData.current.temp_f);
	console.log(weatherData.current.condition.text);
	// todo get weather icon and display it
	// * console.log(weatherData.current.condition.icon);

	console.log(weatherData.current.wind_mph);
	console.log(weatherData.current.wind_kph);
	console.log(weatherData.current.humidity);
	console.log(weatherData.current.feelslike_c);
	console.log(weatherData.current.feelslike_f);
});
