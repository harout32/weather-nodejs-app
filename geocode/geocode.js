const request = require('request');

var geocodeAddress = (addr, callback) => {
  var input = encodeURIComponent(addr);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${input}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to google service.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find a location on GOOGLE');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        lat: body.results[0].geometry.location.lat,
        lng: body.results[0].geometry.location.lng

      });

    }
  });

};



module.exports = {
  geocodeAddress
};
