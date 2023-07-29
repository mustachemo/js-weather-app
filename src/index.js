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
});
