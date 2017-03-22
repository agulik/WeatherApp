
// declaire global input variable

var inputValue = document.getElementById("txt-input");
var geocoder;
var google;

// initialize google map geocode function

function initializeMap() {
  geocoder = new google.maps.Geocoder();
}

// converting input to lat/lng coordinates function

function convertAddress(address) {
  var address = document.getElementById("txt-input").value;
  geocoder.geocode({ "Address": address }, function(results, status) {
    if (status === google.maps.Geocoder.OK) {
      var latitude = results[0].geometry.location.lat();
      var longitude = results[0].geometry.location.lng();
    }
     console.log(latitude, longitude);
    }
)}

// press-enter event listener which calls convertAddress function onpress

  inputValue.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
        console.log("yea..this works..!");
        convertAddress();
      }
});

//initialize the map on page load

initializeMap();


// create a variable for the weather API

// include "/latitude,longitude" at end of api call

// var weatherApi = "https://api.darksky.net/forecast/53fdce807cb09b72e9a6318f4643f6b3";
