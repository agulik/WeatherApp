// 1). create on enter event for city name typed in (done)

// 2). create function to receive the city entered as a value

// 3). create function to convert passed in city to lat/long values (semi-done)

// 4). use those values to plug into end of api call

// 5). retrieve weather data from api



// function to convert City to Latitude and Longitude

var getLocation = function(address) {
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode( {'address': address}, function(results, status) {

    if (status == google.maps.GeocoderStatus.OK) {
      var latitude = results[0].geometry.location.lat();
      var longitude = results[0].geometry.location.lng();
      console.log(latitude, longitude); // this is the lat and lng of Montreal
    }
  });
}

getLocation('Montreal');



/*

// create a variable for the weather API

// include "/latitude,longitude" at end of api call

var weatherApi = "https://api.darksky.net/forecast/53fdce807cb09b72e9a6318f4643f6b3"


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

*/

// need to add
