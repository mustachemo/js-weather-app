export default function showCurrentWeather(weather) {
	const weatherModal = document.createElement('div');
	weatherModal.classList.add('weatherModal');

	const weatherName = document.createElement('div');
	weatherName.id = 'weatherName';
	weatherName.textContent = `${weather.location.name}`;

	const weatherCountry = document.createElement('div');
	weatherCountry.id = 'weatherCountry';
	weatherCountry.textContent = `${weather.location.country}`;

	const weatherConditionText = document.createElement('div');
	weatherConditionText.id = 'weatherConditionText';
	weatherConditionText.textContent = `${weather.current.condition.text}`;

	const weatherTempC = document.createElement('div');
	weatherTempC.id = 'weatherTempC';
	weatherTempC.textContent = `Temperature: ${weather.current.temp_c}° (C)`;

	const weatherTempF = document.createElement('div');
	weatherTempF.id = 'weatherTempF';
	weatherTempF.textContent = `Temperature: ${weather.current.temp_f}° (F)`;

	const weatherFeelslikeC = document.createElement('div');
	weatherFeelslikeC.id = 'weatherFeelslikeC';
	weatherFeelslikeC.textContent = `Feels like: ${weather.current.feelslike_c}° (C)`;

	const weatherFeelslikeF = document.createElement('div');
	weatherFeelslikeF.id = 'weatherFeelslikeF';
	weatherFeelslikeF.textContent = `Feels like: ${weather.current.feelslike_f}° (F)`;

	const weatherHumidity = document.createElement('div');
	weatherHumidity.id = 'weatherHumidity';
	weatherHumidity.textContent = `Humidity: ${weather.current.humidity}%`;

	const weatherWindMPH = document.createElement('div');
	weatherWindMPH.id = 'weatherWindMPH';
	weatherWindMPH.textContent = `Wind: ${weather.current.wind_mph} MPH`;

	const weatherWindKPH = document.createElement('div');
	weatherWindKPH.id = 'weatherWindKPH';
	weatherWindKPH.textContent = `Wind: ${weather.current.wind_kph} KPH`;

	weatherModal.appendChild(weatherName);
	weatherModal.appendChild(weatherCountry);
	weatherModal.appendChild(weatherConditionText);
	weatherModal.appendChild(weatherTempC);
	weatherModal.appendChild(weatherTempF);
	weatherModal.appendChild(weatherFeelslikeC);
	weatherModal.appendChild(weatherFeelslikeF);
	weatherModal.appendChild(weatherHumidity);
	weatherModal.appendChild(weatherWindMPH);
	weatherModal.appendChild(weatherWindKPH);

	return weatherModal;
}
