console.log("TimeDate");

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
    getUrl(latitude, longitude);
  }
  
  function getUrl(longitude,latitude){
    const apiKey = `63b80c8a4d5f42fa99757e083b54afa0`
    let firstLocationUrl = "https://api.geoapify.com/v1/geocode/reverse?lat="+longitude+"&lon="+latitude+"&format=json&apiKey="+apiKey
    let locationUrl = firstLocationUrl.toString();
  
    getLocation(locationUrl);
  }
  
  function getLocation(locationUrl){
      console.log(locationUrl);
      $.getJSON(locationUrl).then(function(data) {
        let city =`${data.results[0].city}`;
        let state= `${data.results[0].state}`;

        console.log(city,state);
        if (state == "Scotland", "England", "Wales"){
            state = "United Kingdom";
        }
        getDtUrl(city,state);
    })
        
function getDtUrl(city,state){
    let firstDtUrl = "https://timezone.abstractapi.com/v1/current_time/?api_key=edbddf657a7f4d3eac2c0d5dbd77b925&location="+city+", "+state;
    let dtUrl = firstDtUrl.toString();

    console.log(dtUrl);
    getDt(dtUrl);
    }
}

function getDt(dtUrl){
    console.log(dtUrl);
    $.getJSON(dtUrl).then(function(data){
        let dateTime = `${data.datetime}`;
        console.log(dateTime);

        displayDateTime(dateTime);
    })
}

function displayDateTime(dateTime){
    const dateTimeElement = document.querySelector(`.dateTime`);
    dateTimeElement.innerHTML = `${dateTime}`;
}