
// declaire global input variable

var inputValue = document.getElementById("address");
var google;
var geocoder;

// initialize google map geocode function

function initializeMap() {
  geocoder = new google.maps.Geocoder();
}

// converting input to lat/lng coordinates function

function convertAddress(address, callback) {
  geocoder.geocode( {"address": address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var latitude = results[0].geometry.location.lat();
      var longitude = results[0].geometry.location.lng();
      callback({ Address: address, Latitude: latitude, Longitude: longitude });
    }
  });
}

// press-enter event listener which calls convertAddress function onpress

  inputValue.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
        console.log(inputValue.value);
      }
});

//initialize the map on page load

initializeMap();

convertAddress("Copenhagen", function(data) {
  console.log(data);
});


// create a variable for the weather API

// include "/latitude,longitude" at end of api call

// var weatherApi = "https://api.darksky.net/forecast/53fdce807cb09b72e9a6318f4643f6b3";
