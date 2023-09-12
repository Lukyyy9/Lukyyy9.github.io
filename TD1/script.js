// Get references to HTML elements
let button = document.getElementById("get-location");
let latText = document.getElementById("latitude");
let longText = document.getElementById("longitude");
let altText = document.getElementById("altitude");
let accuracyText = document.getElementById("accuracy");
let speedText = document.getElementById("speed"); // This might not be supported in all browsers
let dateText = document.getElementById("date");

// Add a click event listener to the button
button.addEventListener("click", () => {
  // Use the Geolocation API to get the user's current position
  navigator.geolocation.getCurrentPosition((position) => {
    // Extract location information from the position object
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let alt = position.coords.altitude || 'N/A'; // Altitude might not always be available
    let accuracy = position.coords.accuracy;
    let speed = position.coords.speed || 'N/A'; // Speed might not always be available
    let date = new Date(position.timestamp);

    // Update the HTML elements with the location information
    latText.innerText = lat.toFixed(2);
    longText.innerText = long.toFixed(2);
    altText.innerText = alt.toFixed(2);
    accuracyText.innerText = accuracy.toFixed(2);
    speedText.innerText = speed.toFixed(2); // Be cautious with this property
    dateText.innerText = date.toLocaleString(); // Convert timestamp to a human-readable date and time
  });
});
