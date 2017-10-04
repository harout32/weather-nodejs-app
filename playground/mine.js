const axios = require('axios');
const yargs = require('yargs');


var argv = yargs
.option({
  address:{
  alias: 'a',
  demand: true,
  describe: 'enter your address'}
}).help().alias('help','h')
.argv;

var address = encodeURIComponent(argv.address)
var location = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`;
axios.get(location)
.then((response) => {
  if(response.data.status === 'ZERO_RESULTS'){
    throw Error ('unable to find the location');
  }
  //===============
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var formatted_address = response.data.results[0].formatted_address;

var url = `https://api.darksky.net/forecast/75807933ccc679fc6d080549ff09b4f1/${lat},${lng}`;
console.log(`The location is ${formatted_address}`);
 return axios.get(url);

}).then( (response) => {
console.log(`

The weather is : ${response.data.currently.summary} and it is ${response.data.currently.icon}
The temprature is : ${response.data.currently.temperature}
and it's feels like : ${response.data.currently.temperature}
with humidity of : ${response.data.currently.humidity}
  `);


}).catch((e) => {
if(e.code === 'ENOTFOUND'){
  console.log('we can not connect to the server');
}else{
  console.log(e.message);
}
});
console.log('Great to know the weather');
