let button = document.getElementById("get-location");
let latText = document.getElementById("latitude");
let longText = document.getElementById("longitude");
let altText = document.getElementById("altitude");
let accuracyText = document.getElementById("accuracy");
let speedText = document.getElementById("speed");
let dateText = document.getElementById("date");

button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let alt = position.coords.altitude;
    let accuracy = position.coords.accuracy;
    let speed = position.coords.speed;
    let date = position.timestamp;
    console.log(lat, long, alt, accuracy);
    latText.innerText = lat.toFixed(2);
    longText.innerText = long.toFixed(2);
    altText.innerText = alt.toFixed(2);
    accuracyText.innerText = accuracy.toFixed(2);
    speedText.innerText = speed.toFixed(2);
    dateText.innerText = date;
  });
});
