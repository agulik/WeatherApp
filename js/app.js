/*
      things to add
      1). add "loading..." during loading
      2). add google auto-complete functionality
*/

(function() {
  var DARKSKY_API_URL = 'https://api.darksky.net/forecast/';
  var DARKSKY_API_KEY = '53fdce807cb09b72e9a6318f4643f6b3';
  var CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

  var GOOGLE_MAPS_API_KEY = 'AIzaSyA0nrF494pqDoDY_skRTLXYmXltM2xv8wA';
  var GOOGLE_MAPS_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json';

  var iconsObj = {
    "clear-day" : createIcon("wi wi-day-sunny clear-day"),
    "clear-night" : createIcon("wi wi-night-clear clear-night"),
    "rain" : createIcon("wi wi-rain rain"),
    "snow" : createIcon("wi wi-snow snow"),
    "sleet" : createIcon("wi wi-sleet sleet"),
    "wind" : createIcon("wi wi-strong-wind wind"),
    "fog" : createIcon("wi wi-fog fog"),
    "cloudy" : createIcon("wi wi-cloudy cloudy"),
    "partly-cloudy-day" : createIcon("wi wi-day-cloudy partly-cloudy-day"),
    "partly-cloudy-night" : createIcon("wi wi-night-alt-cloudy partly-cloudy-night")
  }

  function getCurrentWeather(coords) {
    var url = `${CORS_PROXY}${DARKSKY_API_URL}${DARKSKY_API_KEY}/${coords.lat},${coords.lng}?units=si`;

    return (fetch(url).then(response => response.json()).then(data => data));
  }

  function getCoordinatesForCity(cityName) {
    var url = `${GOOGLE_MAPS_API_URL}?address=${cityName}&key=${GOOGLE_MAPS_API_KEY}`;

    return (fetch(url).then(response => response.json()).then(data => data.results[0].geometry.location));
  }

  var app = document.querySelector('#app');
  var cityForm = app.querySelector('.city-form');
  var cityInput = cityForm.querySelector('.city-input');
  var getWeatherButton = cityForm.querySelector('.get-weather-button');
  var currentTemp = app.querySelector('.current-temp');
  var weatherSummary = app.querySelector('.weather-summary');
  var weatherMax = app.querySelector('.weather-max');
  var weatherMin = app.querySelector('.weather-min');
  var today = app.querySelector('.today');
  var weatherIcon = app.querySelector('.weather-icon');
  var borderBottom = app.querySelector('.line-area');
  var timeOne = app.querySelector('.time-one');
  var timeTwo = app.querySelector('.time-two');
  var timeThree = app.querySelector('.time-three');
  var iconOne = app.querySelector('.icon-one');
  var iconTwo = app.querySelector('.icon-two');
  var iconThree = app.querySelector('.icon-three');
  var tempOne = app.querySelector('.temp-one');
  var tempTwo = app.querySelector('.temp-two');
  var tempThree = app.querySelector('.temp-three');

  cityForm.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting
    var city = cityInput.value;

    getCoordinatesForCity(city).then(getCurrentWeather).then(function(weather) {
      currentTemp.innerText = `${Math.floor(weather.currently.temperature)}°`;
      weatherSummary.innerText = `${weather.currently.summary}`;
      weatherIcon.innerHTML = '';
      weatherIcon.appendChild(iconsObj[weather.currently.icon]);
      today.innerText = `Today`;
      weatherMax.innerText = `High ${Math.floor(weather.daily.data[0].temperatureMax)}°C\u00A0\u00A0\u00A0`;
      weatherMax.appendChild(createIcon("wi wi-thermometer"));
      weatherMin.innerText = `Low ${Math.floor(weather.daily.data[0].temperatureMin)}°C\u00A0\u00A0\u00A0`;
      weatherMin.appendChild(createIcon("wi wi-thermometer-exterior"));
      borderBottom.style = "border-bottom: 1px solid #ffffff";
      timeOne.innerText = `${moment().add(1, 'days').format('dddd')}`;
      timeTwo.innerText = `${moment().add(2, 'days').format('dddd')}`;
      timeThree.innerText = `${moment().add(3, 'days').format('dddd')}`;
      iconOne.innerHTML = '';
      iconTwo.innerHTML = '';
      iconThree.innerHTML = '';
      iconOne.appendChild(iconsObj[weather.daily.data[1].icon].cloneNode(true));
      iconTwo.appendChild(iconsObj[weather.daily.data[2].icon].cloneNode(true));
      iconThree.appendChild(iconsObj[weather.daily.data[3].icon].cloneNode(true));
      tempOne.innerText = `${Math.floor(weather.daily.data[1].temperatureMax)}°C`;
      tempTwo.innerText = `${Math.floor(weather.daily.data[2].temperatureMax)}°C`;
      tempThree.innerText = `${Math.floor(weather.daily.data[3].temperatureMax)}°C`;
  })
});
})();

// button toggle
//
// $('#toggle').click(function() {
//   $(this).toggleClass('active');
//   $('#search-form').toggleClass('open');
//   var search = document.getElementById('search-form');
//   if (search.style.display === 'none') {
//     search.style.display = 'block';
//   } else {
//     search.style.display = 'none';
//   }
// });

//helper function to create an icon

function createIcon(className) {
  var i = document.createElement('i');
  i.setAttribute("class", className);
  return i;
}
