console.log("location");
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
        let houseNumber = `${data.results[0].housenumber}`;
        let street = `${data.results[0].street}`;
        let suburb = `${data.results[0].suburb}`;
        let district = `${data.results[0].district}`;
        let city =`${data.results[0].city}`;
        let state =`${data.results[0].state}`;
        let postcode =`${data.results[0].postcode}` + `.`
  
    let location = JSON.stringify(houseNumber,street,suburb,district,city,state,postcode);
    console.log(houseNumber,street,suburb,district,city,state,postcode);
  
    displayLocation(houseNumber,street,suburb,district,city,state,postcode);
   
  })
  }
  
  function displayLocation(houseNumber,street,suburb,district,city,state,postcode){
    const houseElement = document.querySelector(`.houseNumber`);
    const streetElement = document.querySelector(`.street`);
    const suburbElement = document.querySelector(`.suburb`);
    const districtElement = document.querySelector(`.district`);
    const cityElement = document.querySelector(`.city`);
    const stateElement = document.querySelector(`.state`);
    const postcodeElement = document.querySelector(`.postcode`);
  
    houseElement.innerHTML= `${houseNumber}`;
    streetElement.innerHTML= `${street}`;
    suburbElement.innerHTML= `${suburb}`;
    districtElement.innerHTML= `${district}`;
    cityElement.innerHTML= `${city}`;
    stateElement.innerHTML= `${state}`;
    postcodeElement.innerHTML= `${postcode}`;
  }
  