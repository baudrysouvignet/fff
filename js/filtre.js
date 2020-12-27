var pantallon = document.getElementById("pantallon");
var tshirt = document.getElementById("t-shirt");
var accesoire = document.getElementById("accesoire")
var chaussure = document.getElementById("chaussure")
var accesoireR = document.getElementById("accesoireR")
var pantallonR = document.getElementById("pantallonR");
var tshirtR = document.getElementById("t-shirtR");
var chaussureR = document.getElementById("chaussureR")


var shirt = document.getElementById("shirt")
var acce = document.getElementById("acce")
var chauss = document.getElementById("chauss")
var panta = document.getElementById("panta")



function accesoireF() {
    acce.style.display = "block";
    shirt.style.display = "none";
    chauss.style.display = "none";
    panta.style.display = "none";
    panta.style.display = "none";
    accesoireR.style.display = "block";
    accesoire.style.display = "none";

    pantallonR.style.display = "none";
    pantallon.style.display = "block";

    tshirtR.style.display = "none";
    tshirt.style.display = "block";

    chaussureR.style.display = "none";
    chaussure.style.display = "block";
}
function accesoireRR() {
    acce.style.display = "block";
    shirt.style.display = "block";
    chauss.style.display = "block";
    panta.style.display = "block";
    panta.style.display = "block";
    accesoireR.style.display = "none";
    accesoire.style.display = "block";
}




function pantaF() {
    acce.style.display = "none";
    shirt.style.display = "none";
    chauss.style.display = "none";
    panta.style.display = "block";
    pantallonR.style.display = "block";
    pantallon.style.display = "none";

    accesoireR.style.display = "none";
    accesoire.style.display = "block";

    tshirtR.style.display = "none";
    tshirt.style.display = "block";

    chaussureR.style.display = "none";
    chaussure.style.display = "block";
}
function pantaRR() {
    acce.style.display = "block";
    shirt.style.display = "block";
    chauss.style.display = "block";
    panta.style.display = "block";
    panta.style.display = "block";
    pantallonR.style.display = "none";
    pantallon.style.display = "block";
}


function shirtF() {
    acce.style.display = "none";
    shirt.style.display = "block";
    chauss.style.display = "none";
    panta.style.display = "none";
    panta.style.display = "none";
    pantallonR.style.display = "none";
    pantallon.style.display = "block";

    tshirtR.style.display = "block";
    tshirt.style.display = "none";

    accesoireR.style.display = "none";
    accesoire.style.display = "block";

    chaussureR.style.display = "none";
    chaussure.style.display = "block";
}
function shirtRR() {
    acce.style.display = "block";
    shirt.style.display = "block";
    chauss.style.display = "block";
    panta.style.display = "block";
    panta.style.display = "block";
    tshirtR.style.display = "none";
    tshirt.style.display = "block";
}


function chausssF() {
    acce.style.display = "none";
    shirt.style.display = "none";
    chauss.style.display = "block";
    panta.style.display = "none";
    panta.style.display = "none";
    pantallonR.style.display = "none";
    pantallon.style.display = "block";

    tshirtR.style.display = "none";
    tshirt.style.display = "block";

    accesoireR.style.display = "none";
    accesoire.style.display = "block";

    chaussureR.style.display = "block";
    chaussure.style.display = "none";
    
}
function chausssR() {
    acce.style.display = "block";
    shirt.style.display = "block";
    chauss.style.display = "block";
    panta.style.display = "block";
    panta.style.display = "block";
    chaussureR.style.display = "none";
    chaussure.style.display = "block";
}









var popup = document.getElementById("popup");

function pop() {
    popup.style.display = "block";
}
function unpop() {
    popup.style.display = "none";
}