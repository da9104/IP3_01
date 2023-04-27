const ISO = require('country-iso');
const { GridFSBucket } = require('mongodb');

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
  
    getISO(latitude, longitude);
  }

  

  ISO.get(latitude,longitude);
  
  getEmergencyService(ISO);


function getEmergencyService(ISO){
  $.getJSON(`http://emergencynumberapi.com/api/country/3166-1`).then(function(data) {
     let text = `Name: `+`${data[i].name}`
      //` Distance: `+`${data[i].dist}`+
 // ` Rating: `+`${data[i].rate}`

  let str = JSON.stringify(text)
  console.log(str);
  return str;
})
}