// I need to add the geocode function to the scrope of the text inputValue

// declaire global input variable

var inputValue = document.getElementById("txt-input");


// function for converting city name to lat/lng values


function getLocation(address, callback) {

  var geocoder = new google.maps.Geocoder();

  inputValue.addEventListener("keydown", function(e) {

    if (e.keyCode === 13) {

      console.log(inputValue.value);

    }
  });

  geocoder.geocode( {"address": address}, function(results, status) {

    if (status == google.maps.GeocoderStatus.OK) {
      var latitude = results[0].geometry.location.lat();
      var longitude = results[0].geometry.location.lng();
      callback({ Address: address, Latitude: latitude, Longitude: longitude });
    }
  });
}

getLocation("Paris", function(data) {
  console.log(data);
});


  // create a variable for the weather API

  // include "/latitude,longitude" at end of api call

  var weatherApi = "https://api.darksky.net/forecast/53fdce807cb09b72e9a6318f4643f6b3";
