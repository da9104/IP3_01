
let latitude;
let longitude;
let data;
let nameElement = document.querySelector(".places")

/*console.log("test")
function getLocation(){
  import{latitude, longitude} from "/weather/app.js";
}*/

//const key = '5ae2e3f221c38a28845f05b6e0fd8459aa247818bb4d27e011639812'

for (let i = 0; i < 5; i++){
$.getJSON("http://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=-4.246450&lat=55.867850&rate=2&format=json&limit=5&apikey=5ae2e3f221c38a28845f05b6e0fd8459aa247818bb4d27e011639812").then(function(data) {
  let text = `Name: `+`${data[i].name}`
  //` Distance: `+`${data[i].dist}`+
 // ` Rating: `+`${data[i].rate}`

  let str = JSON.stringify(text)
  console.log(str);
  return str;
})
.then(function(){
  displayAttractions();
});
}

function displayAttractions(str){
  nameElement.innerHTML= `${str}`;
}

 //http://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=-4.246450&lat=55.867850&rate=2&format=json&limit=5&apikey=5ae2e3f221c38a28845f05b6e0fd8459aa247818bb4d27e011639812