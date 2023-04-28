console.log("test 1");
console.log("test x");
// CHECK IF BROWSER SUPPORTS GEOLOCATION
if('geolocation' in navigator){
  navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
  notificationElement.style.display = "block";
  notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

// SET USER'S POSITION
console.log("test 2");
function setPosition(position){
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  console.log(latitude,longitude);

  getAttractions(latitude, longitude);
}

function getAttractions(latitude,longitude){
  console.log("test 3");

  const apiKey = `5ae2e3f221c38a28845f05b6e0fd8459aa247818bb4d27e011639812`

    $.getJSON(`http://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=${longitude}&lat=${latitude}&rate=2&format=json&limit=5&apikey=${apiKey}`).then(function(data) {
     let attraction1 = `${data[0].name}`;
     let attraction2 =`${data[1].name}`;
     let attraction3 =`${data[2].name}`;
     let attraction4 = `${data[3].name}`;
     let attraction5 = `${data[4].name}`;

     let attraction6 =`Name: `+ ` `+ `${data[0].name}`+ ` `+
      ` Distance: `+ ` `+`${data[0].dist}`+ ` `+
      ` Rating: `+` `+`${data[0].rate}` +`.`;

      let attraction7 =`Name: `+ ` `+ `${data[1].name}`+ ` `+
      ` Distance: `+ ` `+`${data[1].dist}`+ ` `+
      ` Rating: `+` `+`${data[1].rate}` +`.`;

      let attraction8 =`Name: `+ ` `+ `${data[2].name}`+ ` `+
      ` Distance: `+ ` `+`${data[2].dist}`+ ` `+
      ` Rating: `+` `+`${data[2].rate}` +`.`;

      let attraction9 =`Name: `+ ` `+ `${data[3].name}`+ ` `+
      ` Distance: `+ ` `+`${data[3].dist}`+ ` `+
      ` Rating: `+` `+`${data[3].rate}` +`.`;
      
      let attraction10 =`Name: `+ ` `+ `${data[4].name}`+ ` `+
      ` Distance: `+ ` `+`${data[4].dist}`+ ` `+
      ` Rating: `+` `+`${data[4].rate}` +`.`;

      console.log(attraction1,attraction2,attraction3,attraction4,attraction5,attraction6,attraction7,attraction8,attraction9,attraction10);

      displayAttractions(attraction1,attraction2,attraction3,attraction4,attraction5,attraction6,attraction7,attraction8,attraction9,attraction10);
})

}


function displayAttractions(attraction1,attraction2,attraction3,attraction4,attraction5){
  const att1Element = document.querySelector(`.attraction1`);
  const att2Element = document.querySelector(`.attraction2`);
  const att3Element = document.querySelector(`.attraction3`);
  const att4Element = document.querySelector(`.attraction4`);
  const att5Element = document.querySelector(`.attraction5`);

  const att6Element = document.querySelector(`.attraction6`);
  const att7Element = document.querySelector(`.attraction7`);
  const att8Element = document.querySelector(`.attraction8`);
  const att9Element = document.querySelector(`.attraction9`);
  const att10Element = document.querySelector(`.attraction10`);


  att1Element.innerHTML = `${attraction1}`;
  att2Element.innerHTML = `${attraction2}`;
  att3Element.innerHTML = `${attraction3}`;
  att4Element.innerHTML = `${attraction4}`;
  att5Element.innerHTML = `${attraction5}`;

  att6Element.innerHTML = `${attraction6}`;
  att7Element.innerHTML = `${attraction7}`;
  att8Element.innerHTML = `${attraction8}`;
  att9Element.innerHTML = `${attraction9}`;
  att10Element.innerHTML = `${attraction10}`;
  console.log("test 4");
}
