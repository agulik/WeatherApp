
// declaire global input variable

var inputValue = document.getElementById("address");
var google;
var geocoder;

// initialize google map geocode function

function initializeMap() {

  geocoder = new google.maps.Geocoder();

  inputValue.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
        console.log(inputValue.value);
      }
  });

}

// converting input to lat/lng coordinates function

function convertAddress(address, callback) {

  geocoder.geocode( {"address": address}, function (results, status) {

    if (status == google.maps.GeocoderStatus.OK) {

      var latitude = results[0].geometry.location.lat();
      var longitude = results[0].geometry.location.lng();
      callback({ address: address, latitude: latitude, longitude: longitude });

    }
  });
}

convertAddress("Copenhagen", function(data) {
  console.log(data);
});

// create a variable for the weather API

// include "/latitude,longitude" at end of api call

// var weatherApi = "https://api.darksky.net/forecast/53fdce807cb09b72e9a6318f4643f6b3";
