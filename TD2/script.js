//initialize the map
const button = document.getElementById("button-location");
var map = L.map('map').setView([0, 0], 1);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//biot 💀
var photoImg = '<img src="src/biot.png" height="150px" width="150px"/>';
var popup = L.popup();
popup
    .setLatLng([43.633333, 7.100000])
    .setContent("<center>Biot 💀</center>" + "</br>" + photoImg)
    .openOn(map);

//bouton ma localisation
button.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude || 0;
        let long = position.coords.longitude || 0;
        let accuracy = position.coords.accuracy || 0;
        console.log(lat);
        console.log(long);
        var circle = L.circle([lat, long], {
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.1,
            radius: accuracy
        }).addTo(map);
        circle.bindPopup("Vous êtes ici !");
        console.log("click");
        map.setView([lat, long], 15);
        //nice-marseille
        var polyline2 = L.polyline([
            [43.2965, 5.3698],
            [lat, long]
        ], {
            color: "red",
        }).addTo(map);
        polyline2.bindPopup("Marseille est à " + haversineDistance(lat, long).toFixed(2) + " km de vous !");
    });
});

//triangle des bermudes
var polygon = L.polygon([
    [25.7617, -80.1918],
    [32.3078, -64.7505],
    [18.4663, -66.1057],
]).addTo(map);

//nice-marseille
var polyline = L.polyline([
    [43.2965, 5.3698],
    [43.7102, 7.2620]
]).addTo(map);

function haversineDistance(lat, long) {
    const R = 6371; // Rayon moyen de la Terre en kilomètres
    // Convertir les coordonnées de degrés en radians
    const lat1Rad = toRadians(43.2965);
    const lon1Rad = toRadians(5.3698);
    const lat2Rad = toRadians(lat);
    const lon2Rad = toRadians(long);
    // Calculer les différences de latitude et de longitude en radians
    const dLat = lat2Rad - lat1Rad;
    const dLon = lon2Rad - lon1Rad;
    // Appliquer la formule haversine
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    // Calculer la distance en kilomètres
    const distance = R * c;
    return distance;
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
// Exemple d'utilisation
const distance = haversineDistance(52.5200, 13.4050, 48.8566, 2.3522); // Berlin à Paris
console.log(`Distance: ${distance} km`);