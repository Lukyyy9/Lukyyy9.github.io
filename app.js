// app.js

// Enum pour la liste des restaurants
const Restaurants = Object.freeze({
    RESTAURANT_1: "Chez Pierre",
    RESTAURANT_2: "La Bonne Table",
    RESTAURANT_3: "Pizzeria Luigi",
    RESTAURANT_4: "Sushi World",
    RESTAURANT_5: "Burger Palace",
    RESTAURANT_6: "Café de Paris",
    RESTAURANT_7: "Le Gourmet",
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
