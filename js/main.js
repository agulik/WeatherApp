
// create a variable for the weather API

var weatherApi = "http://api.openweathermap.org/data/2.5/forecast/city?&APPID=662cad70ecf564015d19a592ab74408b";

// add event listener for pressing enter
// if the enter key is pressed, it fires off the getWeather function

$("#txt-input").keydown(function (e) {
  var key = e.which;
  if (key === 13) {
    getWeather();
  }
})

// getWeather function
// need to retrieve api data based on input value
// need to present spinner when fetching data and remove it once data is fetched

function getWeather() {

  // add spinner to indicate something is happening
  $('<i class="fa fa-refresh fa-spin"/>').appendTo('#current-weather');

  // get text input value
  var inputValue = $("#txt-input").val();

  // make the ajax request
  $.getJSON(weatherApi, function(response)) {

  }



}


// need to add an onclick event for weather icon top left
// if clicked, refresh page back to initial load
