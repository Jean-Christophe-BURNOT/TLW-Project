//Pour envoyer le header dans toutes les pages
fetch("headersimple.html")
    .then(contenu => contenu.text())
    .then(texte => {
        console.log(texte)
        document.getElementById("headersimple").innerHTML = texte;
    })