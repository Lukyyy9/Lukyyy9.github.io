const button = document.getElementById("get-location");
const latText = document.getElementById("latitude");
const longText = document.getElementById("longitude");
const altText = document.getElementById("altitude");
const accuracyText = document.getElementById("accuracy");
const speedText = document.getElementById("speed");
const dateText = document.getElementById("timestamp");
const orientationText = document.getElementById("orientation");

// Fonction pour mettre à jour l'affichage des données de géolocalisation
function updateLocation(position) {
    const lat = position.coords.latitude.toFixed(2);
    const long = position.coords.longitude.toFixed(2);
    const alt = position.coords.altitude.toFixed(2);
    const accuracy = position.coords.accuracy.toFixed(2);
    const speed = position.coords.speed.toFixed(2);
    const date = new Date(position.timestamp).toLocaleString(); // Utiliser toLocaleString pour un affichage plus convivial

    latText.innerText = lat;
    longText.innerText = long;
    altText.innerText = alt;
    accuracyText.innerText = accuracy;
    speedText.innerText = speed;
    dateText.innerText = date;

    updateOrientation(); // Mettre à jour l'orientation après avoir obtenu la géolocalisation
}

// Fonction pour mettre à jour l'affichage de l'orientation
function updateOrientation(event) {
    if (event) { // Vérifier si l'événement existe
        const alpha = event.alpha.toFixed(2);
        const beta = event.beta.toFixed(2);
        const gamma = event.gamma.toFixed(2);

        document.getElementById('alpha').textContent = alpha;
        document.getElementById('beta').textContent = beta;
        document.getElementById('gamma').textContent = gamma;
    }
}

// Fonction pour mettre à jour l'affichage des données de mouvement
function updateMotion(event) {
    if (event) { // Vérifier si l'événement existe
        const x = event.acceleration.x.toFixed(2);
        const y = event.acceleration.y.toFixed(2);
        const z = event.acceleration.z.toFixed(2);

        document.getElementById('x').textContent = x;
        document.getElementById('y').textContent = y;
        document.getElementById('z').textContent = z;
    }
}

button.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(updateLocation, (error) => {
        alert("Erreur de géolocalisation : " + error.message);
    });
});

if ('DeviceOrientationEvent' in window) {
    window.addEventListener('deviceorientation', updateOrientation);
} else {
    alert("Désolé, votre navigateur ne prend pas en charge l'API DeviceOrientation.");
}

if ('DeviceMotionEvent' in window) {
    window.addEventListener('devicemotion', updateMotion);
} else {
    alert("Désolé, votre navigateur ne prend pas en charge l'API DeviceMotion.");
}
