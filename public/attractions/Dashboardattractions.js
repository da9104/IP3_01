// CHECK IF BROWSER SUPPORTS GEOLOCATION
if('geolocation' in navigator){
  navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
  notificationElement.style.display = "block";
  notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}

// SET USER'S POSITION

function setPosition(position){
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  console.log(latitude,longitude);

  getDashboardAttractions(latitude, longitude);
}

function getDashboardAttractions(latitude,longitude){

  const apiKey = `5ae2e3f221c38a28845f05b6e0fd8459aa247818bb4d27e011639812`

    $.getJSON(`http://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=${longitude}&lat=${latitude}&rate=2&format=json&limit=5&apikey=${apiKey}`).then(function(data) {
     let attraction1 = `${data[0].name}`;
     let attraction2 =`${data[1].name}`;
     let attraction3 =`${data[2].name}`;
     let attraction4 = `${data[3].name}`;
     let attraction5 = `${data[4].name}`;

      console.log(attraction1,attraction2,attraction3,attraction4,attraction5);

      displayDashboardAttractions(attraction1,attraction2,attraction3,attraction4,attraction5);
})

}


function displayDashboardAttractions(attraction1,attraction2,attraction3,attraction4,attraction5){
  const att1Element = document.querySelector(`.attraction1`);
  const att2Element = document.querySelector(`.attraction2`);
  const att3Element = document.querySelector(`.attraction3`);
  const att4Element = document.querySelector(`.attraction4`);
  const att5Element = document.querySelector(`.attraction5`);

  att1Element.innerHTML = `${attraction1}`;
  att2Element.innerHTML = `${attraction2}`;
  att3Element.innerHTML = `${attraction3}`;
  att4Element.innerHTML = `${attraction4}`;
  att5Element.innerHTML = `${attraction5}`;

}

