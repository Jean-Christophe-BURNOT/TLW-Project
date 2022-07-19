fetch("footer.html")
    .then(contenu => contenu.text())
    .then(texte => {
        console.log(texte)
        document.getElementById("footer").innerHTML = texte;
    })


//gère le template de la deuxième zone de contenu

//fetch nécéssaire pour importer les informations depuis le JSON vers le JavaScript
fetch("assets/JSON/templateAccueil.json")
    .then(contenu => contenu.json())
    .then(database => {
        templateFigurines(database['figurines'])
    })

//fonction qui va être appellée dans le fetch
function templateFigurines(figurines) {
    let template = document.getElementById('listeFigurines').innerHTML;
    const container = document.getElementById('flexcontainer');
    container.innerHTML = "";

    for (let data of figurines) {
        new_element = template
            .replace(/{{nom}}/g, data.name)
            .replace(/{{image}}/g, data.pic);
        container.innerHTML += new_element;
    }
}





//permet d'injecter le background CSS dans le code
fetch("background.html")
    .then(contenu => contenu.text())
    .then(texte => {
        console.log(texte)
        document.getElementById("background").innerHTML = texte;
    })





// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("boutonRetour").style.display = "block";
    } else {
        document.getElementById("boutonRetour").style.display = "none";
    }
}