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
console.log("test 2");
function setPosition(position){
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  console.log(latitude,longitude);

  getMainAttractions(latitude, longitude);
}
function getMainAttractions(latitude,longitude){
  
    const apiKey = `5ae2e3f221c38a28845f05b6e0fd8459aa247818bb4d27e011639812`

    $.getJSON(`http://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=${longitude}&lat=${latitude}&rate=2&format=json&limit=5&apikey=${apiKey}`).then(function(data) {
        
    let attraction1Name =`Name: `+ ` `+ `${data[0].name}`;
    let attraction1Dist =` Distance: `+ ` `+`${data[0].dist}`+` `+`meters.`;
    let attraction1Rate = ` Rating: `+` `+`${data[0].rate}`;

    let attraction2Name =`Name: `+ ` `+ `${data[1].name}`;
    let attraction2Dist =` Distance: `+ ` `+`${data[1].dist}`+` `+`meters.`;
    let attraction2Rate =` Rating: `+` `+`${data[1].rate}`+` `+`meters.`;

    let attraction3Name  =`Name: `+ ` `+ `${data[2].name}`;
    let attraction3Dist =` Distance: `+ ` `+`${data[2].dist}`+` `+`meters.`;
    let attraction3Rate =` Rating: `+` `+`${data[2].rate}`;

    let attraction4Name =`Name: `+ ` `+ `${data[3].name}`;
    let attraction4Dist =` Distance: `+ `m `+`${data[3].dist}`+` `+`meters. `;
    let attraction4Rate =` Rating: `+` `+`${data[3].rate}`;
    
    let attraction5Name =`Name: `+ ` `+ `${data[4].name}`;
    let attraction5Dist = ` Distance: `+ ` `+`${data[4].dist}`+ ` `+`meters.`;
    let attraction5Rate =` Rating: `+` `+`${data[4].rate}` ;

    console.log(attraction1Dist);
  
    displayMainAttractions(attraction1Name,attraction1Dist,attraction1Rate,attraction2Name,attraction2Dist,attraction2Rate,attraction3Name,attraction3Dist,attraction3Rate,attraction4Name,attraction4Dist,attraction4Rate,attraction5Name,attraction5Dist,attraction5Rate)
  })
}

function displayMainAttractions(attraction1Name,attraction1Dist,attraction1Rate,attraction2Name,attraction2Dist,attraction2Rate,attraction3Name,attraction3Dist,attraction3Rate,attraction4Name,attraction4Dist,attraction4Rate,attraction5Name,attraction5Dist,attraction5Rate){
    console.log(attraction1Dist,attraction2Dist,attraction3Dist,attraction4Dist,attraction5Dist);
    const att1NameElement = document.querySelector(`.att1Name`);
    const att1DistElement = document.querySelector(`.att1Dist`);
    const att1RateElement = document.querySelector(`.att1Rate`);

    const att2NameElement = document.querySelector(`.att2Name`);
    const att2DistElement = document.querySelector(`.att2Dist`);
    const att2RateElement = document.querySelector(`.att2Rate`);

    const att3NameElement = document.querySelector(`.att3Name`);
    const att3DistElement = document.querySelector(`.att3Dist`);
    const att3RateElement = document.querySelector(`.att3Rate`);

    const att4NameElement = document.querySelector(`.att4Name`);
    const att4DistElement = document.querySelector(`.att4Dist`);
    const att4RateElement = document.querySelector(`.att4Rate`);
   
    const att5NameElement = document.querySelector(`.att5Name`);
    const att5DistElement = document.querySelector(`.att5Dist`);
    const att5RateElement = document.querySelector(`.att5Rate`);

    att1NameElement.innerHTML = `${attraction1Name}`;
    att1DistElement.innerHTML = `${attraction1Dist}`;
    att1RateElement.innerHTML = `${attraction1Rate}`;

    att2NameElement.innerHTML = `${attraction2Name}`;
    att2DistElement.innerHTML = `${attraction2Dist}`;
    att2RateElement.innerHTML = `${attraction2Rate}`;

    att3NameElement.innerHTML = `${attraction3Name}`;
    att3DistElement.innerHTML = `${attraction3Dist}`;
    att3RateElement.innerHTML = `${attraction3Rate}`;

    att4NameElement.innerHTML = `${attraction4Name}`;
    att4DistElement.innerHTML = `${attraction4Dist}`;
    att4RateElement.innerHTML = `${attraction4Rate}`;

    att5NameElement.innerHTML = `${attraction5Name}`;
    att5DistElement.innerHTML = `${attraction5Dist}`;
    att5RateElement.innerHTML = `${attraction5Rate}`;
   
  
  }
  