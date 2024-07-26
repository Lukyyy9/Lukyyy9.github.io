// app.js

// Enum pour la liste des restaurants
const Restaurants = Object.freeze({
    RESTAURANT_1: "Gerard's",
    RESTAURANT_2: "Cambuse",
    RESTAURANT_3: "Apéro Pizz",
    RESTAURANT_4: "Spicy Bamboo",
    RESTAURANT_5: "Docks",
    RESTAURANT_6: "Brasserie",
    RESTAURANT_7: "En-K",
    RESTAURANT_8: "Atrego",
});

// Fonction pour obtenir un restaurant aléatoire
function getRandomRestaurant() {
    const keys = Object.keys(Restaurants);
    const randomIndex = Math.floor(Math.random() * keys.length);
    return Restaurants[keys[randomIndex]];
}

// Configuration du bouton pour lancer la roulette
document.getElementById('spinButton').addEventListener('click', () => {
    const resultDiv = document.getElementById('result');
    const selectedRestaurant = getRandomRestaurant();
    resultDiv.textContent = `Aujourd'hui, nous mangeons à : ${selectedRestaurant}`;
});
