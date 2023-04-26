let latitude = 55.867850;
let longitude = -4.246450;


//import{latitude, longitude} from "./weather/app.js";
const key = '5ae2e3f221c38a28845f05b6e0fd8459aa247818bb4d27e011639812'

function getAttractions(latitude,longitude){
  let api= `http://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=`+longitude+`&lat=`+latitude+`&rate=2&format=json&limit=5&apikey=5ae2e3f221c38a28845f05b6e0fd8459aa247818bb4d27e011639812`
  if (query !== undefined) {dd
    api += "&" + query;
  }
  fetch(api)
    .then(response => response.json()
      console.log(response.json))
    .then(data => resolve(data))
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });

}

