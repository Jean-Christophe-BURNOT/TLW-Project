filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

var ebil = true;

function openCloseNav() {
    if (ebil) {
        document.getElementById("sideBar").style.width = "250px";
        document.getElementById("main").style.marginRight = "250px";
        document.getElementById("openbtn").innerText = ">";
        ebil = !ebil;
    } else {
        document.getElementById("sideBar").style.width = "0";
        document.getElementById("main").style.marginRight = "0";
        document.getElementById("openbtn").innerText = "<";
        ebil = !ebil;
    }
}

templateCommande()

function calculPrice(persoArray) {
    let price = 0;
    if (persoArray[0] == "bergere" || persoArray[0] == "bibendum") {
        price += 44.99;
    } else if (persoArray[0] == "soldat") {
        price += 49.99;
    } else {
        price += 39.99;
    }

    if (persoArray[1]) {
        price += 1.5;
    }
    if (persoArray[2]) {
        price += 1;
    }
    if (persoArray[3]) {
        price += 0.5;
    }
    if (persoArray[4]) {
        price += 2.19;
    }
    if (persoArray[5]) {
        price += 2.19;
    }
    if (persoArray[6]) {
        price += 1.99;
    }
    return price;
}

function templateCommande() {
    let template = document.getElementById('listeCommande').innerHTML;
    const container = document.getElementById('flexcontainerCommande');
    container.innerHTML = "";

    var panier = [];
    var names = [];
    let price = 0;
    if (sessionStorage.getItem("panier")) {
        panier = JSON.parse(sessionStorage.getItem("panier"));
        for (let i = 0; i < panier.length; i++) {
            price += calculPrice(panier[i]);
            names.push(panier[i][0]);
        }
        document.getElementById("totalPrice").innerText = price;
        for (let data of names) {
            new_element = template
                .replace(/{{nom}}/g, "- " + data)
            container.innerHTML += new_element;
        }
    } else {}
}