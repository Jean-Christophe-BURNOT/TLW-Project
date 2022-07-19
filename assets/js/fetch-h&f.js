//Pour envoyer le header dans toutes les pages
fetch("header.html")
    .then(contenu => contenu.text())
    .then(texte => {
        console.log(texte)
        document.getElementById("header").innerHTML = texte;
    })