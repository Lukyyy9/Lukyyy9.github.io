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
            fillColor: 'white',
            fillOpacity: 0.5,
            radius: accuracy
        }).addTo(map);
        circle.bindPopup("Vous êtes ici !");
        console.log("click");
        map.setView([lat, long], 15);
    });
});

//requete+parse
var request = new XMLHttpRequest();
request.open('GET', 'http://opendata.nicecotedazur.org/data/storage/f/2023-07-18T09%3A25%3A39.100Z/ev-inventaire-opendata-2023.geojson', true);
request.onload = function () {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.features.forEach(wifi => {
            var marker = L.marker([wifi.geometry.coordinates[1], wifi.geometry.coordinates[0]]).addTo(map);
            marker.bindPopup(wifi.properties.nom);
        });
    } else {
        console.log('error');
    }
}
request.send();