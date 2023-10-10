navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude || 0;
    let long = position.coords.longitude || 0;
    let alt = position.coords.altitude || 0;
    let accuracy = position.coords.accuracy || 0;
});