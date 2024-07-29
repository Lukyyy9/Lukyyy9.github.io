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

const restaurantArray = Object.values(Restaurants);

// Fonction pour afficher la liste des restaurants
function displayRestaurantList() {
    const list = document.getElementById('restaurantList');
    list.innerHTML = '';
    restaurantArray.forEach(restaurant => {
        const listItem = document.createElement('li');
        listItem.textContent = restaurant;
        list.appendChild(listItem);
    });
}

// Fonction pour dessiner la roulette
function drawRouletteWheel() {
    const canvas = document.getElementById("roulette");
    const ctx = canvas.getContext("2d");
    const numOptions = restaurantArray.length;
    const arcSize = 2 * Math.PI / numOptions;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2;

    for (let i = 0; i < numOptions; i++) {
        const angle = i * arcSize;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, angle, angle + arcSize);
        ctx.lineTo(centerX, centerY);
        ctx.fillStyle = i % 2 === 0 ? "#FFD700" : "#FF6347"; // Alternance des couleurs
        ctx.fill();
        ctx.stroke();

        // Dessiner le texte
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle + arcSize / 2);
        ctx.fillStyle = "#000";
        ctx.font = "16px Arial";
        ctx.fillText(restaurantArray[i], radius / 2, 0);
        ctx.restore();
    }
}

// Fonction pour obtenir un restaurant aléatoire
function getRandomRestaurant() {
    const randomIndex = Math.floor(Math.random() * restaurantArray.length);
    return restaurantArray[randomIndex];
}

// Fonction pour animer la roulette
function spinRoulette() {
    const resultDiv = document.getElementById('result');
    const canvas = document.getElementById("roulette");
    const ctx = canvas.getContext("2d");
    const numOptions = restaurantArray.length;
    const arcSize = 2 * Math.PI / numOptions;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2;
    let angle = 0;
    let spinAngleStart = Math.random() * 10 + 10;
    let spinTime = 0;
    const spinTimeTotal = Math.random() * 3 + 4 * 1000;

    function rotateWheel() {
        spinTime += 30;
        if (spinTime >= spinTimeTotal) {
            stopRotateWheel();
            return;
        }
        const spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
        angle += (spinAngle * Math.PI / 180);
        drawRoulette();
        setTimeout(rotateWheel, 30);
    }

    function drawRoulette() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < numOptions; i++) {
            const startAngle = angle + i * arcSize;
            const endAngle = startAngle + arcSize;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
            ctx.lineTo(centerX, centerY);
            ctx.fillStyle = i % 2 === 0 ? "#FFD700" : "#FF6347";
            ctx.fill();
            ctx.stroke();

            // Dessiner le texte
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(startAngle + arcSize / 2);
            ctx.fillStyle = "#000";
            ctx.font = "16px Arial";
            ctx.fillText(restaurantArray[i], radius / 2, 0);
            ctx.restore();
        }
    }

    function stopRotateWheel() {
        const degrees = angle * 180 / Math.PI + 90;
        const arcd = arcSize * 180 / Math.PI;
        const index = Math.floor((360 - degrees % 360) / arcd);
        const selectedRestaurant = restaurantArray[index];
        resultDiv.textContent = `Aujourd'hui, nous mangeons à : ${selectedRestaurant}`;
    }

    function easeOut(t, b, c, d) {
        const ts = (t /= d) * t;
        const tc = ts * t;
        return b + c * (tc + -3 * ts + 3 * t);
    }

    rotateWheel();
}

// Afficher la liste des restaurants au chargement de la page
document.addEventListener('DOMContentLoaded', (event) => {
    displayRestaurantList();
    drawRouletteWheel();
});

// Configuration du bouton pour lancer la roulette
document.getElementById('spinButton').addEventListener('click', spinRoulette);
