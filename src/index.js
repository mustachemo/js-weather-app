import '../node_modules/minireset.css/minireset.min.css';
import '../static/style.scss';
import getCurrentWeather from './modules/getCurrentWeather';
import showCurrentWeather from './modules/showCurrentWeather';

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

searchForm.addEventListener('submit', async (e) => {
	e.preventDefault();

	console.log('search button clicked');
	if (searchInput.value === '') return;
	const mainContainer = document.querySelector('.main-container');
	mainContainer.innerHTML = '';
	const weatherData = await getCurrentWeather(searchInput.value);
	const weatherModal = await showCurrentWeather(weatherData);
	await mainContainer.appendChild(weatherModal);
	// todo get weather icon and display it
	// * console.log(weatherData.current.condition.icon);
	console.log(weatherData);
});
