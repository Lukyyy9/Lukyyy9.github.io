let button = document.getElementById("get-location");
let latText = document.getElementById("latitude");
let longText = document.getElementById("longitude");
let altText = document.getElementById("altitude");

button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let alt = position.coords.altitude;
    console.log(lat, long, alt);
    latText.innerText = lat.toFixed(2);
    longText.innerText = long.toFixed(2);
    altText.innerText = alt.toFixed(2);
  });
});
