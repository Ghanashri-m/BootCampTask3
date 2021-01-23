var request = new XMLHttpRequest();
var requestWeather = new XMLHttpRequest();
const APIKEY = '21e96a1073a696668dd8b903f2f851a2';

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function() {
    var data = JSON.parse(this.response) // same as request.response
    for(var i = 0; i < data.length; i++) // no need to enclose in flower braces, since there is only 1 line after loop
    weatherData(data[i].latlng[0], data[i].latlng[1]); // prints all the country names in console.
}

function weatherData(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKEY}`)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
    })
    .catch(function() {
      // catch any errors
    });
  }
