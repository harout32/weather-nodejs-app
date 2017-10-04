const geocode = require('./geocode/geocode.js')
const weather = require('./weather/weather')
const yargs = require('yargs');


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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
//----- geting weather from forecast API

    weather.getWeather(results.lat, results.lng, (errorMessage, weatherMessage) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(`it's currently ${weatherMessage.temprature}.but it feels like ${weatherMessage.apparentTemperature}
        and it is ${weatherMessage.summary} for now`);
      }
    });
  }

});
// 75807933ccc679fc6d080549ff09b4f1
