import '../node_modules/minireset.css/minireset.min.css';
import '../static/style.scss';
import getCurrentWeather from './modules/getCurrentWeather';
import showCurrentWeather from './modules/showCurrentWeather';

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

searchForm.addEventListener('submit', async (e) => {
	e.preventDefault();

	if (searchInput.value === '') return;
	const mainContainer = document.querySelector('.main-container');
	mainContainer.innerHTML = '';
	const weatherData = await getCurrentWeather(searchInput.value);
	if (typeof weatherData === 'string') {
		mainContainer.innerHTML = `<div class="error">${weatherData}</h1>`;
		return;
	}
	const weatherModal = await showCurrentWeather(weatherData);
	mainContainer.appendChild(weatherModal);
});
