
// declaire global input variable

var inputValue = document.getElementById("address");

// initialize google map geocode function

inputValue.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
        console.log(inputValue.value);
    }
});

// converting input to lat/lng coordinates function

function getAddressPosition(address) {
  console.log(address)
    return fetch ("https://maps.googleapis.com/maps/api/geocode/json?address=" + address)
    .then(function(response) {
      console.log(response);
        var data = JSON.parse(response);
        console.log(data.results[0].geometry.location);
    }).catch(function(error) {
        console.log(error);
    })
}

getAddressPosition("Montreal");

// create a variable for the weather API

// include "/latitude,longitude" at end of api call

// var weatherApi = "https://api.darksky.net/forecast/53fdce807cb09b72e9a6318f4643f6b3";
