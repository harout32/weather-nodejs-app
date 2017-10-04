const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .option({
    address: {
      describe: "what is your addres",
      demand: true,
      alias: 'a',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;


var input = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${input}`;

axios.get(geocodeURL).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find address');
  }
  //here is connecting to the weather api .. if the request of the googleMaps went OK :D

var lat = response.data.results[0].geometry.location.lat;
var lng = response.data.results[0].geometry.location.lng;
var weatherUrl = `https://api.darksky.net/forecast/75807933ccc679fc6d080549ff09b4f1/${lat},${lng}`;
  console.log(JSON.stringify(response.data.results[0].formatted_address, undefined, 2));
return axios.get(weatherUrl);
//return new request and pass it into the new .then method
}).then((response) =>{

  var temprature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`Its currently ${temprature}. Its feel like ${apparentTemperature}`);
}).catch((e) => {
  if (e.code === 'ENOTFOUND') {

    console.log('unable to connect to api servers');
  } else {
    console.log(e.message);
  }
});
// 75807933ccc679fc6d080549ff09b4f1
