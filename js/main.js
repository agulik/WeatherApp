

// event listener for pressing enter

$("#txt-input").keydown(function (e) {

  var key = e.which;

  if (key === 13) {

    // declare global variable for input value

    var inputValue = document.getElementById('txt-input').value;

    console.log(inputValue);

  }
})

// function that converts city name to lat/lng values

function getLocation(address) {

  var geocoder = new google.maps.Geocoder();
  geocoder.geocode( {'address': address}, function(results, status) {

    if (status == google.maps.GeocoderStatus.OK) {
      var latitude = results[0].geometry.location.lat();
      var longitude = results[0].geometry.location.lng();
      console.log(latitude,longitude); // this is the lat and lng of Montreal
    }
  });
}

getLocation('Malbaie');



  // create a variable for the weather API

  // include "/latitude,longitude" at end of api call

  var weatherApi = "https://api.darksky.net/forecast/53fdce807cb09b72e9a6318f4643f6b3"
