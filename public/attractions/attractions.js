let nameElement = document.querySelector(`.places`)

// CHECK IF BROWSER SUPPORTS GEOLOCATION
if('geolocation' in navigator){
  navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
  notificationElement.style.display = "block";
  notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

// SET USER'S POSITION
function setPosition(position){
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  console.log(latitude,longitude);

  getAttractions(latitude, longitude);
}


function getAttractions(latitude,longitude){

  const apiKey = `5ae2e3f221c38a28845f05b6e0fd8459aa247818bb4d27e011639812`
  
  for (let i = 0; i < 5; i++){
    $.getJSON(`http://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=${longitude}&lat=${latitude}&rate=2&format=json&limit=5&apikey=${apiKey}`).then(function(data) {
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
}

function displayAttractions(str){
  nameElement.innerHTML= `${str}`;
}
