//gère la rotation des images dans la première zone de contenu

//définit les variables pour les images changeantes du premier contenu
var I = 1;
const Imax = 3;

//permet d'éxécuter la fonction timer après 5 secondes
setTimeout(compteur, 5000);

//fonction qui permet de changer les images en fonction d'une valeur I qui varie au cours du temps
function changer() {
    if (I == 1)
        document.getElementById("imgpres").src = "Images/imageDynamique1.jpg"
    if (I == 2)
        document.getElementById("imgpres").src = "Images/imageDynamique2.jpeg"
    if (I == 3)
        document.getElementById("imgpres").src = "Images/imageDynamique3.jpg"
    setTimeout(compteur, 5000);
}

//Permet le fonctionnement de la rotation d'image avec la gestion d'un compteur qui prend +1
function compteur() {
    if (I < Imax)
        I++;
    else
        I = 1;

    changer();
}