
(function() {
  var DARKSKY_API_URL = 'https://api.darksky.net/forecast/';
  var DARKSKY_API_KEY = '53fdce807cb09b72e9a6318f4643f6b3';
  var CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

  var GOOGLE_MAPS_API_KEY = 'AIzaSyA0nrF494pqDoDY_skRTLXYmXltM2xv8wA';
  var GOOGLE_MAPS_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json';

  function getCurrentWeather(coords) {
    var url = `${CORS_PROXY}${DARKSKY_API_URL}${DARKSKY_API_KEY}/${coords.lat},${coords.lng}?units=si`;

    return (
      fetch(url)
      .then(response => response.json())
      .then(data => data)
    );
  }

  function getCoordinatesForCity(cityName) {
    var url = `${GOOGLE_MAPS_API_URL}?address=${cityName}&key=${GOOGLE_MAPS_API_KEY}`;

    return (
      fetch(url)
      .then(response => response.json())
      .then(data => data.results[0].geometry.location)
    );
  }

  var app = document.querySelector('#app');
  var cityForm = app.querySelector('.city-form');
  var cityInput = cityForm.querySelector('.city-input');
  var getWeatherButton = cityForm.querySelector('.get-weather-button');
  var currentTemp = app.querySelector('.current-temp');
  var weatherSummary = app.querySelector('.weather-summary');
  var weatherMax = app.querySelector('.weather-max');
  var weatherMin = app.querySelector('.weather-min');

  cityForm.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting
    var city = cityInput.value;

    getCoordinatesForCity(city)
    .then(getCurrentWeather)
    .then(function(weather) {
      currentTemp.innerText = `${Math.floor(weather.currently.temperature)}°`;
      weatherSummary.innerText = `${weather.currently.summary}`;
      weatherMax.innerText = `High ${Math.floor(weather.daily.data[0].temperatureMax)}°C`;
      weatherMin.innerText = `Low ${Math.floor(weather.daily.data[0].temperatureMin)}°C`;
    })
  });
})();
