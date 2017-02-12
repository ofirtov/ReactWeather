var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=09b70236acac0f2b2cc090e8705567f5&units=metric';
//09b70236acac0f2b2cc090e8705567f5
module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;//Everything inside the `${}` will be transelated from javascript

    return axios.get(requestUrl).then(function(res){
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      }
      else{
        return res.data.main.temp;
      }
    },
    //Error case
    function(res) {
      throw new Error(res.data.message);
    });
  }
}
