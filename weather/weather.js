var request = require('request');


var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/75807933ccc679fc6d080549ff09b4f1/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {temprature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
      summary:body.currently.summary})
    } else{
      callback('Unable to connect to forcast.io');
    }
  });
};

module.exports = {
  getWeather
}
