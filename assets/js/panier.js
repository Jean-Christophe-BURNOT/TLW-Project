


// fetch("https://api.mapbox.com/directions/v5/mapbox/driving/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token=pk.eyJ1IjoiZ3V5NTkzMCIsImEiOiJja3VudzUyaTYxcm1rMm9ydnF2dW0wdHBlIn0.kjQvs-_CLKAsR4eowltmIg")

// Fonction qui obtient la distance de la Tour de La Part Dieu au coordonnées du "end"
async function getDistance(end) {
    
    const query = await fetch(
      "https://api.mapbox.com/directions/v5/mapbox/driving/4.853684693432996,45.758286014647325;"+end[0]+","+end[1]+"?steps=true&geometries=geojson&access_token=pk.eyJ1IjoiZ3V5NTkzMCIsImEiOiJja3VudzUyaTYxcm1rMm9ydnF2dW0wdHBlIn0.kjQvs-_CLKAsR4eowltmIg"
      ,{ method: 'GET' }
    );
    const json = await query.json();
    var data = json.routes[0].distance;
    //var locate = data.distance;
    //console.log(data);
    console.log(data);
    if (data >= 20000 ){
        var frais = 5+(0.07*data/1000);
        //console.log(frais)
    }
    else {
        var frais = 0;
        //console.log(frais); 
    }
  
  return frais

  };
  
//Fonction qui transforme un nom tapé dans la barre correspondante en une liste de coordonnées (latitude/longitude)
async function getEndroit(nom){
    //console.log(nom)
    var coordo = await fetch(
        "https://api.mapbox.com/geocoding/v5/mapbox.places/"+nom+".json?proximity=4.853684693432996,45.758286014647325&access_token=pk.eyJ1IjoiZ3V5NTkzMCIsImEiOiJja3VudzUyaTYxcm1rMm9ydnF2dW0wdHBlIn0.kjQvs-_CLKAsR4eowltmIg"
    );
    const json = await coordo.json();
    const data = json.features[0];
    var locate = data.center;
    //console.log(locate);
    var frais =await getDistance(locate);
    
    return frais;
    
    }


    
//Si la touche "Entrée" est pressée, lance les différents calculs de prix
document.getElementById("adressLivraison").addEventListener("keypress", async event => {
    if(event.key == "Enter"){
        var Adress= document.getElementById("adressLivraison").value;
        var frais = await getEndroit(Adress);
        console.log(frais);
        document.getElementById("PrixLivraison").innerHTML  = Math.round(frais);
        var panier = await JSON.parse(sessionStorage.getItem("panier"));
        if (panier == null){        //Si aucun élément n'a été commandé
            document.getElementById("PrixTotal").innerHTML  =  "Pas de commande dans le panier"
        }
        else{
        var prixPanier = calculPrice(panier);
        for (let i = 0; i < panier.length; i++) {       //Calcul du prix des éléments du panier
            prixPanier += calculPrice(panier[i]);
        }
        var huitdelivraison = 0
        
        if (document.getElementById("Livraison").addEventListener("click",async event =>{       //Gère les frais de livraison
            huitdelivraison =+ 8;
            console.log(huitdelivraison)
            document.getElementById("PrixTotal").innerHTML  = Math.round(frais + prixPanier + huitdelivraison);
        }))
        ;else (document.getElementById("NonLivraison").addEventListener("click", async event =>{ 
            huitdelivraison =+ 0;
            console.log(huitdelivraison)
            document.getElementById("PrixTotal").innerHTML  = Math.round(frais + prixPanier + huitdelivraison);
        }))
        document.getElementById("PrixTotal").innerHTML  = Math.round(frais + prixPanier + huitdelivraison);
        
    }};
});



document.getElementById("PrixTotal").addEventListener("keypress", async event => {
    if(event.key == "Enter"){
        
    
        document.getElementById("PrixTotal").innerHTML  = Math.round(frais + prixPanier)
        
    };
});


// //fetch nécéssaire pour importer les informations depuis le JSON vers le JavaScript
// fetch("assets/JSON/templateAccueil.json")
//     .then(contenu => contenu.json())
//     .then(database => {
//         templateFigurines(database['figurines'])
//     })

// //fonction qui va être appellée dans le fetch
// async function templateFigurines(figurines) {
//     let template = document.getElementById('listeFigurines').innerHTML;
//     const container = document.getElementById('flexcontainer');
//     container.innerHTML = "";
//     var panier = [];
//     var names = [];
//     let price = 0;
//     if (sessionStorage.getItem("panier")) {
//         panier = JSON.parse(sessionStorage.getItem("panier"));
//         for (let i = 0; i < panier.length; i++) {
//             price += calculPrice(panier[i]);
//             names.push(panier[i][0]);
//             new_element = template
//                 .replace(/{{nom}}/g, names);
//         }
//         for (let data of figurines) {
//             new_element = template
//                 //.replace(/{{nom}}/g, data.name)
//                 .replace(/{{image}}/g, data.pic);
//                 container.innerHTML += new_element;
//         }
// }}

//fetch nécéssaire pour importer les informations depuis le JSON vers le JavaScript
// fetch("assets/JSON/templateAccueil.json")
// .then(contenu => contenu.json())
// .then(database => {
//     templateFigurines(database['figurines'])
// })

//fonction qui va être appellée dans le fetch
// function templateFigurines() {
// let template = document.getElementById('listeCommande').innerHTML;
// const container = document.getElementById('flexcontainerCommande');
// container.innerHTML = "";
// var names = [];
// if (sessionStorage.getItem("panier")) {
//     panier = JSON.parse(sessionStorage.getItem("panier"));
//     for (let i = 0; i < panier.length; i++) {
//         names.push(panier[i][0]);
//         for (let data of names) {
//             new_element = template
//             console.log("oui")
//                 .replace(/{{nom}}/g, "- " + data)
//             container.innerHTML += new_element;
//         }
//     }
    
// } else {}
// }
function templateCommande() {
    let template = document.getElementById('listeCommande').innerHTML;
    const container = document.getElementById('flexcontainerCommande');
    container.innerHTML = "";
    console.log("oui3")
    //var panier = [];
    var names = [];
    //let price = 0;
    //if (sessionStorage.getItem("panier")) {
        panier = JSON.parse(sessionStorage.getItem("panier"));
        for (let i = 0; i < panier.length; i++) {
            //price += calculPrice(panier[i]);
            names.push(panier[i][0]);
            console.log("oui1")
        }
        //document.getElementById("totalPrice").innerText = price;
        for (let data of names) {
            console.log("oui2")
            new_element = template
                .replace(/{{nom}}/g, data)
            container.innerHTML += new_element;
        }
    //} else {}
}

templateCommande()

// for (let data of figurines) {
//     new_element = template
//         .replace(/{{nom}}/g, data.name)
//         //.replace(/{{image}}/g, data.pic);
//     container.innerHTML += new_element;
// }
//}

function SupprimeSelection(nom){
    //var div = document.getElementById('{{nom}}');
    //div.parentNode.removeChild(div);
    const container = document.getElementById('flexcontainerCommande');
    let divs = [...container.children].filter((a) => a.getAttribute('classe') == nom);
    console.log(divs);
    let div = divs[0];
    container.removeChild(div);
}


//Testing and Cut-Paste Data



//getDistance(end);

//MacDo CHarpennes 45.7701088,4.8613205

//Paris 48.8588335,2.2768237

//Distance Paris Lyon 558839km

// Start Part Dieu 45.758286014647325,4.853684693432996


