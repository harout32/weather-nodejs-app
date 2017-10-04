var request = require('request');


var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    request({
      url:`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
      json: true
    },(error, response, body) => {
      if(error){
        reject('unable to connect to the server');
      }else if (body.status === 'ZERO_RESULTS'){
        reject('unable to find that address')
      }else {
        resolve(body);
      }

    });
  });
};


geocodeAddress('8qurijasdf').then((loc) => {
  console.log(JSON.stringify(loc, undefined ,2));
},(errMess) => {
  console.log(errMess);
});
