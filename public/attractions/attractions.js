
let latitude;
let longitude;
let data;

/*console.log("test")
function getLocation(){
  import{latitude, longitude} from "/weather/app.js";
}*/

//const key = '5ae2e3f221c38a28845f05b6e0fd8459aa247818bb4d27e011639812'

/*function getAttractions(latitude,longitude){
  let api= `http://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=`+longitude+`&lat=`+latitude+`&rate=2&format=json&limit=5&apikey=5ae2e3f221c38a28845f05b6e0fd8459aa247818bb4d27e011639812`

  fetch(api)
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });

}*/

$.getJSON("http://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=-4.246450&lat=55.867850&rate=2&format=json&limit=5&apikey=5ae2e3f221c38a28845f05b6e0fd8459aa247818bb4d27e011639812").then(function(data) {
  var text = `Name:${data[0].name}<br>
  Distance:${data[0].dist}<br>
  Rating:${data[0].rate}`

  var str = JSON.stringify(text)
  console.log(str);
});

function displayAttractions(){
  
}

 //http://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=-4.246450&lat=55.867850&rate=2&format=json&limit=5&apikey=5ae2e3f221c38a28845f05b6e0fd8459aa247818bb4d27e011639812