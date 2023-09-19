let button = document.getElementById("get-location");
let latText = document.getElementById("latitude");
let longText = document.getElementById("longitude");
let altText = document.getElementById("altitude");
let accuracyText = document.getElementById("accuracy");
let speedText = document.getElementById("speed");
let dateText = document.getElementById("timestamp");
let orientationText = document.getElementById("orientation");
const touchData = document.getElementById("touch-data");
const touchXText = document.getElementById("touch-x");
const touchYText = document.getElementById("touch-y");

button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude || 0;
    let long = position.coords.longitude || 0;
    let alt = position.coords.altitude || 0;
    let accuracy = position.coords.accuracy || 0;
    let speed = position.coords.speed || 0;
    let date = new Date(position.timestamp);
    latText.innerText = lat.toFixed(2);
    longText.innerText = long.toFixed(2);
    altText.innerText = alt.toFixed(2);
    accuracyText.innerText = accuracy.toFixed(2);
    speedText.innerText = speed.toFixed(2);
    dateText.innerText = date;
    //updateOrientation();
    //updateMotion();
    updateTouchCoordinates();
  });
});

function updateOrientation(event) {
    const alpha = event.alpha.toFixed(2);
    const beta = event.beta.toFixed(2);
    const gamma = event.gamma.toFixed(2);

    document.getElementById('alpha').textContent = alpha;
    document.getElementById('beta').textContent = beta;
    document.getElementById('gamma').textContent = gamma;
}
if ('DeviceOrientationEvent' in window) {
    window.addEventListener('deviceorientation', updateOrientation);
} else {
    alert("Désolé, votre navigateur ne prend pas en charge l'API DeviceOrientation.");
}

function updateMotion(event) {
    const x = event.acceleration.x.toFixed(2);
    const y = event.acceleration.y.toFixed(2);
    const z = event.acceleration.z.toFixed(2);

    document.getElementById('x').textContent = x;
    document.getElementById('y').textContent = y;
    document.getElementById('z').textContent = z;
}
if ('DeviceOrientationEvent' in window) {
    window.addEventListener('devicemotion', updateMotion);
} else {
    alert("Désolé, votre navigateur ne prend pas en charge l'API DeviceMotion.");
}

function updateTouchCoordinates(event) {
    if (event.touches.length > 0) {
        const touch = event.touches[0];
        const touchX = touch.clientX;
        const touchY = touch.clientY;

        touchXText.textContent = touchX;
        touchYText.textContent = touchY;
    }
}