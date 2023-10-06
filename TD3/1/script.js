const canvas = document.getElementById("cnv");
const context = canvas.getContext("2d");

const backgroundImage = new Image();
backgroundImage.src = "./img/plage.jpg";

backgroundImage.onload = function () {
    context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    //triangle droite
    context.beginPath();
    context.moveTo(canvas.width / 2, canvas.height / 2 - 50); // Sommet supérieur
    context.lineTo(canvas.width / 2, canvas.height / 2 + 50); // Coin inférieur gauche
    context.lineTo(canvas.width / 2 + 50, canvas.height / 2 + 50); // Coin inférieur droit
    context.closePath();
    context.fillStyle = "red";
    context.fill();

    //triangle gauche
    context.beginPath();
    context.moveTo(canvas.width / 2 - 10, canvas.height / 2 - 50); // Sommet supérieur
    context.lineTo(canvas.width / 2 - 10, canvas.height / 2 + 50); // Coin inférieur gauche
    context.lineTo(canvas.width / 2 - 60, canvas.height / 2 + 50); // Coin inférieur droit
    context.closePath();
    context.fillStyle = "red";
    context.fill();

    //demi cercle
    context.beginPath();
    context.arc(canvas.width / 2 - 5, canvas.height / 2 + 60, 55, 0, Math.PI); // Le dernier argument est Math.PI pour un demi-cercle
    context.closePath();
    context.fillStyle = "red";
    context.fill();

    // Dessiner un soleil en haut à droite
    context.beginPath();
    context.arc(canvas.width - 50, 50, 40, 0, Math.PI * 2); // Coordonnées pour le soleil
    context.closePath();

    // Remplir le soleil en jaune
    context.fillStyle = "yellow";
    context.fill();

    // Dessiner des rayons du soleil
    context.beginPath();
    for (let i = 0; i < 12; i++) {
        const angle = (Math.PI / 6) * i; // Diviser le cercle en 12 parties
        const x1 = canvas.width - 50 + Math.cos(angle) * 40; // Coordonnées des extrémités des rayons
        const y1 = 50 + Math.sin(angle) * 40;
        const x2 = canvas.width - 50 + Math.cos(angle) * 60;
        const y2 = 50 + Math.sin(angle) * 60;

        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
    }
    context.strokeStyle = "yellow";
    context.stroke();


};