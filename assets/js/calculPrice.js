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
    return price.toFixed(2);
}