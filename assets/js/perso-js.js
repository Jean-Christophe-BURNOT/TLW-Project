function openPage(pageName, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("button button--hyperion");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = "black";
}


function changeSkin(color) {
    if (xSkin) {
        personalisation[1] = true;
        document.getElementById("price").innerText = calculPrice(personalisation);
        xSkin = false;
    }
}

function changeHair(color) {
    if (xHair) {
        personalisation[2] = true;
        document.getElementById("price").innerText = calculPrice(personalisation);
        xHair = false;
    }
}

function changeEyes(color) {
    if (xEyes) {
        personalisation[3] = true;

        document.getElementById("price").innerText = calculPrice(personalisation);
        xEyes = false;
    }
}

function changeTop(color) {
    if (xTop) {
        personalisation[4] = true;
        document.getElementById("price").innerText = calculPrice(personalisation);
        xTop = false;
    }
}

function changePants(color) {
    if (xPants) {
        personalisation[5] = true;
        document.getElementById("price").innerText = calculPrice(personalisation);
        xPants = false;
    }
}

function changeShoes(color) {
    if (xShoes) {
        personalisation[6] = true;
        document.getElementById("price").innerText = calculPrice(personalisation);
        xShoes = false;
    }
}

function cancelAll() {
    xSkin = true;
    xHair = true;
    xEyes = true;
    xTop = true;
    xPants = true;
    xShoes = true;
    produit = new Produit(produits[produit_id]);
    document.getElementById("price").innerText = produit.data.price;
    personalisation = [produit.data.product, false, false, false, false, false, false];
    colors = [];
    resetButton();
}

function validation() {
    var panier = [];
    if (!sessionStorage.getItem("panier")) {
        panier.push(personalisation);
        sessionStorage.setItem("panier", JSON.stringify(panier));
    } else {
        panier = JSON.parse(sessionStorage.getItem("panier"));
        panier.push(personalisation);
        sessionStorage.removeItem("panier");
        sessionStorage.setItem("panier", JSON.stringify(panier));
    }
    location.href = "#popup1";
    //alert("Figurine ajoutée au panier");
}


//........
const canvas = document.getElementById("canvas"),
    context = canvas.getContext('2d')

let ORIGINAL_IMAGE_DATA

const cacheImageData = () => {
    const original = context.getImageData(0, 0, canvas.width, canvas.height).data
    ORIGINAL_IMAGE_DATA = new Uint8ClampedArray(original.length)
    for (let i = 0; i < original.length; i += 1) {
        ORIGINAL_IMAGE_DATA[i] = original[i]
    }
}

function resetButton() {
    const imgData = context.getImageData(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < imgData.data.length; i += 1) {
        imgData.data[i] = ORIGINAL_IMAGE_DATA[i]
    }
    context.putImageData(imgData, 0, 0)
    colorHair(5);
}

function resetColors() {
    const imgData = context.getImageData(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < imgData.data.length; i += 1) {
        imgData.data[i] = ORIGINAL_IMAGE_DATA[i]
    }
    context.putImageData(imgData, 0, 0)
}

var drawImage = img => {
    canvas.height = img.height
    canvas.width = img.width
    context.drawImage(img, 0, 0, img.width, img.height)
    cacheImageData()
}

function loadImage(imgUrl) {
    const img = new Image()
    img.src = imgUrl
    img.addEventListener('load', () => {
        drawImage(img)
    })
}

function colorSkin(id) {
    colors[0] = id;
    colorised();
}

function colorHair(id) {
    colors[1] = id;
    colorised();
}

function colorEyes(id) {
    colors[2] = id;
    colorised();
}

function colorTop(id) {
    colors[3] = id;
    colorised();
}

function colorPants(id) {
    colors[4] = id;
    colorised();
}

function colorShoes(id) {
    colors[5] = id;
    colorised();
}

function colorised() {
    resetColors();
    var myImg = context.getImageData(0, 0, canvas.width, canvas.height)
    switch (colors[0]) {
        case 1:
            for (var t = 0; t < myImg.data.length; t += 4) {
                myImg.data[t] = 255;
                myImg.data[t + 1] = ORIGINAL_IMAGE_DATA[t + 1];
                myImg.data[t + 2] = ORIGINAL_IMAGE_DATA[t + 2];
            }
            break;
        case 2:
            for (var t = 0; t < myImg.data.length; t += 4) {
                myImg.data[t + 1] = 255
                myImg.data[t] = ORIGINAL_IMAGE_DATA[t];
                myImg.data[t + 2] = ORIGINAL_IMAGE_DATA[t + 2];
            }
            break;
        case 3:
            for (var t = 0; t < myImg.data.length; t += 4) {
                myImg.data[t + 2] = 255
                myImg.data[t + 1] = ORIGINAL_IMAGE_DATA[t + 1];
                myImg.data[t] = ORIGINAL_IMAGE_DATA[t];
            }
            break;
        case 4:
            for (var t = 0; t < myImg.data.length; t += 4) {
                myImg.data[t + 2] = 255
                myImg.data[t + 1] = 255
                myImg.data[t] = ORIGINAL_IMAGE_DATA[t];
            }
            break;
        case 5:
            for (var t = 0; t < myImg.data.length; t += 4) {
                myImg.data[t + 2] = ORIGINAL_IMAGE_DATA[t];
                myImg.data[t + 1] = ORIGINAL_IMAGE_DATA[t];
                myImg.data[t] = ORIGINAL_IMAGE_DATA[t];
            }
            break;
        default:
            break;
    }
    context.putImageData(myImg, 0, 0);

    var myImg = context.getImageData(0, 0, canvas.width, 100)
    switch (colors[1]) {
        case 1:
            for (var t = 0; t < myImg.data.length; t += 4) {
                myImg.data[t] = 255;
                myImg.data[t + 1] = ORIGINAL_IMAGE_DATA[t + 1];
                myImg.data[t + 2] = ORIGINAL_IMAGE_DATA[t + 2];
            }
            break;
        case 2:
            for (var t = 0; t < myImg.data.length; t += 4) {
                myImg.data[t + 1] = 255
                myImg.data[t] = ORIGINAL_IMAGE_DATA[t];
                myImg.data[t + 2] = ORIGINAL_IMAGE_DATA[t + 2];
            }
            break;
        case 3:
            for (var t = 0; t < myImg.data.length; t += 4) {
                myImg.data[t + 2] = 255
                myImg.data[t + 1] = ORIGINAL_IMAGE_DATA[t + 1];
                myImg.data[t] = ORIGINAL_IMAGE_DATA[t];
            }
            break;
        case 4:
            for (var t = 0; t < myImg.data.length; t += 4) {
                myImg.data[t + 2] = 255
                myImg.data[t + 1] = 255
                myImg.data[t] = ORIGINAL_IMAGE_DATA[t];
            }
            break;
        case 5:
            for (var t = 0; t < myImg.data.length; t += 4) {
                myImg.data[t + 2] = ORIGINAL_IMAGE_DATA[t];
                myImg.data[t + 1] = ORIGINAL_IMAGE_DATA[t];
                myImg.data[t] = ORIGINAL_IMAGE_DATA[t];
            }
            break;
        default:
            break;
    }
    context.putImageData(myImg, 0, 0);

    // var myImg = context.getImageData(0, 0, canvas.width, 100)
    // switch (colors[2]) {
    //     case 1:
    //         for (var t = 0; t < myImg.data.length; t += 4) {
    //             myImg.data[t] = 255;
    //             myImg.data[t + 1] = ORIGINAL_IMAGE_DATA[t + 1];
    //             myImg.data[t + 2] = ORIGINAL_IMAGE_DATA[t + 2];
    //         }
    //         break;
    //     case 2:
    //         for (var t = 0; t < myImg.data.length; t += 4) {
    //             myImg.data[t + 1] = 255
    //             myImg.data[t] = ORIGINAL_IMAGE_DATA[t];
    //             myImg.data[t + 2] = ORIGINAL_IMAGE_DATA[t + 2];
    //         }
    //         break;
    //     case 3:
    //         for (var t = 0; t < myImg.data.length; t += 4) {
    //             myImg.data[t + 2] = 255
    //             myImg.data[t + 1] = ORIGINAL_IMAGE_DATA[t + 1];
    //             myImg.data[t] = ORIGINAL_IMAGE_DATA[t];
    //         }
    //         break;
    //     case 4:
    //         for (var t = 0; t < myImg.data.length; t += 4) {
    //             myImg.data[t + 2] = 255
    //             myImg.data[t + 1] = 255
    //             myImg.data[t] = ORIGINAL_IMAGE_DATA[t];
    //         }
    //         break;
    //     default:
    //         break;
    // }
    // context.putImageData(myImg, 0, 0);

    // var myImg = context.getImageData(150, 50, 150, 200)
    // switch (colors[3]) {
    //     case 1:
    //         for (var t = 0; t < myImg.data.length; t += 4) {
    //             myImg.data[t] = 255;
    //             myImg.data[t + 1] = ORIGINAL_IMAGE_DATA[t + 1];
    //             myImg.data[t + 2] = ORIGINAL_IMAGE_DATA[t + 2];
    //         }
    //         break;
    //     case 2:
    //         for (var t = 0; t < myImg.data.length; t += 4) {
    //             myImg.data[t + 1] = 255
    //             myImg.data[t] = ORIGINAL_IMAGE_DATA[t];
    //             myImg.data[t + 2] = ORIGINAL_IMAGE_DATA[t + 2];
    //         }
    //         break;
    //     default:
    //         break;
    // }
    // context.putImageData(myImg, 150, 50);

    // var myImg = context.getImageData(0, 0, canvas.width, 100)
    // switch (colors[4]) {
    //     case 1:
    //         for (var t = 0; t < myImg.data.length; t += 4) {
    //             myImg.data[t] = 255;
    //             myImg.data[t + 1] = ORIGINAL_IMAGE_DATA[t + 1];
    //             myImg.data[t + 2] = ORIGINAL_IMAGE_DATA[t + 2];
    //         }
    //         break;
    //     case 2:
    //         for (var t = 0; t < myImg.data.length; t += 4) {
    //             myImg.data[t + 1] = 255
    //             myImg.data[t] = ORIGINAL_IMAGE_DATA[t];
    //             myImg.data[t + 2] = ORIGINAL_IMAGE_DATA[t + 2];
    //         }
    //         break;
    //     default:
    //         break;
    // }
    // context.putImageData(myImg, 0, 0);

    // var myImg = context.getImageData(0, 0, canvas.width, canvas.height - 50);
    // switch (colors[5]) {
    //     case 1:
    //         for (var t = 0; t < myImg.data.length; t += 4) {
    //             myImg.data[t] = 255;
    //             myImg.data[t + 1] = ORIGINAL_IMAGE_DATA[t + 1];
    //             myImg.data[t + 2] = ORIGINAL_IMAGE_DATA[t + 2];
    //         }
    //         break;
    //     case 2:
    //         for (var t = 0; t < myImg.data.length; t += 4) {
    //             myImg.data[t + 1] = 255
    //             myImg.data[t] = ORIGINAL_IMAGE_DATA[t];
    //             myImg.data[t + 2] = ORIGINAL_IMAGE_DATA[t + 2];
    //         }
    //         break;
    //     default:
    //         break;
    // }
    // context.putImageData(myImg, 0, 0);
}


//........

function idPage(produit) {
    //document.getElementById("image").src = produit.data.imageUrl;
    loadImage(produit.data.imageUrl);
    document.querySelector("#skinBtn > span > span").innerText = produit.data.skinBtnText;
    document.querySelector("#hairBtn > span > span").innerText = produit.data.hairBtnText;
    document.querySelector("#eyesBtn > span > span").innerText = produit.data.eyesBtntext;
    document.querySelector("#topBtn > span > span").innerText = produit.data.topBtnText;
    document.querySelector("#pantsBtn > span > span").innerText = produit.data.pantsBtnText;
    document.querySelector("#shoesBtn > span > span").innerText = produit.data.shoesBtnText;

    document.getElementById("skinText").innerText = produit.data.skinText;
    document.getElementById("hairText").innerText = produit.data.hairText;
    document.getElementById("eyesText").innerText = produit.data.eyesText;
    document.getElementById("topText").innerText = produit.data.topText;
    document.getElementById("pantsText").innerText = produit.data.pantsText;
    document.getElementById("shoesText").innerText = produit.data.shoesText;

    document.getElementById("title").innerText = produit.data.title;
    document.getElementById("price").innerText = produit.data.price;

    personalisation = [produit.data.product, false, false, false, false, false, false];

}

class Produit {
    constructor(data) {
        this.data = data;
    }
}

const produits = [{
        imageUrl: "Images/womandiy-white-background.png",
        skinBtnText: "Peau",
        hairBtnText: "Cheveux",
        eyesBtntext: "Yeux",
        topBtnText: "Haut",
        pantsBtnText: "Bas",
        shoesBtnText: "Chaussures",
        skinText: "Choisissez l'aspect de la peau :",
        hairText: "Choisissez la couleur des cheveux :",
        eyesText: "Choisissez la couleur des yeux :",
        topText: "Choisissez l'aspect du haut :",
        pantsText: "Choisissez l'aspect des bas :",
        shoesText: "Choisissez l'aspect des chaussures :",
        title: "PERSONNALISEZ VOTRE AXEL",
        product: "axel",
        price: "39.99"
    },
    {
        imageUrl: "Images/bopeepdiy.png",
        skinBtnText: "Peau",
        hairBtnText: "Cheveux",
        eyesBtntext: "Yeux",
        topBtnText: "Chapeau",
        pantsBtnText: "Robe",
        shoesBtnText: "Chaussures",
        skinText: "Choisissez l'aspect de la peau :",
        hairText: "Choisissez la couleur des cheveux :",
        eyesText: "Choisissez la couleur des yeux :",
        topText: "Choisissez l'aspect du chapeau :",
        pantsText: "Choisissez l'aspect de la robe :",
        shoesText: "Choisissez l'aspect des chaussures :",
        title: "PERSONNALISEZ VOTRE BERGÈRE",
        product: "bergere",
        price: "44.99"
    },
    {
        imageUrl: "Images/mendiy-white-background.png",
        skinBtnText: "Peau",
        hairBtnText: "Cheveux",
        eyesBtntext: "Yeux",
        topBtnText: "Haut",
        pantsBtnText: "Bas",
        shoesBtnText: "Chaussures",
        skinText: "Choisissez l'aspect de la peau :",
        hairText: "Choisissez la couleur des cheveux :",
        eyesText: "Choisissez la couleur des yeux :",
        topText: "Choisissez l'aspect du haut :",
        pantsText: "Choisissez l'aspect des bas :",
        shoesText: "Choisissez l'aspect des chaussures :",
        title: "PERSONNALISEZ VOTRE GAËL",
        product: "gael",
        price: "39.99"

    },
    {
        imageUrl: "Images/warhammer.png",
        skinBtnText: "Armure",
        hairBtnText: "Casque",
        eyesBtntext: "Yeux",
        topBtnText: "Tuyaux",
        pantsBtnText: "Arme",
        shoesBtnText: "Chaussures",
        skinText: "Choisissez l'aspect de l'armure :",
        hairText: "Choisissez l'aspect du casque :",
        eyesText: "Choisissez la couleur des yeux :",
        topText: "Choisissez l'aspect des tuyeaux :",
        pantsText: "Choisissez l'aspect de l'arme :",
        shoesText: "Choisissez l'aspect des chaussures :",
        title: "PERSONNALISEZ VOTRE SOLDAT",
        product: "soldat",
        price: "49.99"

    },
    {
        imageUrl: "Images/bibendum-origine-diy.png",
        skinBtnText: "Peau",
        hairBtnText: "Chapeau",
        eyesBtntext: "Yeux",
        topBtnText: "Haut",
        pantsBtnText: "Bas",
        shoesBtnText: "Chaussures",
        skinText: "Choisissez l'aspect de la peau :",
        hairText: "Choisissez la couleur des chapeau :",
        eyesText: "Choisissez la couleur des yeux :",
        topText: "Choisissez l'aspect du haut :",
        pantsText: "Choisissez l'aspect des bas :",
        shoesText: "Choisissez l'aspect des chaussures :",
        title: "PERSONNALISEZ VOTRE BIBENDUM",
        product: "bibendum",
        price: "44.99"

    }
]

var colors = [];

var personalisation = [];

var xSkin = true;
var xHair = true;
var xEyes = true;
var xTop = true;
var xPants = true;
var xShoes = true;
let produit_id = new URLSearchParams(window.location.search).get("id");

idPage(new Produit(produits[produit_id]));


let skinElements = document.getElementsByClassName('skin')
Array.from(skinElements).forEach((element) => {
    element.addEventListener('click', event => {
        let skinStyles = window.getComputedStyle(element);
        changeSkin(skinStyles.getPropertyValue('background-color'));
    });
});

let hairElements = document.getElementsByClassName('hair')
Array.from(hairElements).forEach((element) => {
    element.addEventListener('click', event => {
        let hairStyles = window.getComputedStyle(element);
        changeHair(hairStyles.getPropertyValue('background-color'));
    });
});

let eyesElements = document.getElementsByClassName('eyes')
Array.from(eyesElements).forEach((element) => {
    element.addEventListener('click', event => {
        let hairStyles = window.getComputedStyle(element);
        changeEyes(hairStyles.getPropertyValue('background-color'));
    });
});

let topElements = document.getElementsByClassName('top')
Array.from(topElements).forEach((element) => {
    element.addEventListener('click', event => {
        let topStyles = window.getComputedStyle(element);
        changeTop(topStyles.getPropertyValue('background-color'));
    });
});

let pantsElements = document.getElementsByClassName('pants')
Array.from(pantsElements).forEach((element) => {
    element.addEventListener('click', event => {
        let pantsStyles = window.getComputedStyle(element);
        changePants(pantsStyles.getPropertyValue('background-color'));
    });
});

let shoesElements = document.getElementsByClassName('shoes')
Array.from(shoesElements).forEach((element) => {
    element.addEventListener('click', event => {
        let shoesStyles = window.getComputedStyle(element);
        changeShoes(shoesStyles.getPropertyValue('background-color'));
    });
});

// Get the element with id="defaultOpen" and click on it
document.getElementById("skinBtn").click();
document.getElementById("skinBtn").focus();

colorHair(5);