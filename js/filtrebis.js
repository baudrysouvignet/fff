var goalbtn = document.getElementById("goalbtn");
var goalbtnR = document.getElementById("goalbtnR");

var defan = document.getElementById("defan");
var defanR = document.getElementById("defanR");

var mili = document.getElementById("mili");
var miliR = document.getElementById("miliR");

var attaque = document.getElementById("attaque");
var attaqueR = document.getElementById("attaqueR");


var atta = document.getElementById("atta");
var def = document.getElementById("def");
var milieu = document.getElementById("milieu");
var goal = document.getElementById("goal");

function goalbtnF() {
    atta.style.display = "none";
    def.style.display = "none";
    milieu.style.display = "none";
    goal.style.display = "block";

    goalbtn.style.display = "none";
    goalbtnR.style.display = "block";
    defan.style.display = "block";
    defanR.style.display = "none";
    mili.style.display = "block";
    miliR.style.display = "none";
    attaque.style.display = "block";
    attaqueR.style.display = "none";
}
function goalbtnRR() {
    atta.style.display = "block";
    def.style.display = "block";
    milieu.style.display = "block";
    goal.style.display = "block";

    goalbtn.style.display = "block";
    goalbtnR.style.display = "none";
}





function shirtF() {
    atta.style.display = "none";
    def.style.display = "block";
    milieu.style.display = "none";
    goal.style.display = "none";

    goalbtn.style.display = "block";
    goalbtnR.style.display = "none";
    defan.style.display = "none";
    defanR.style.display = "block";
    mili.style.display = "block";
    miliR.style.display = "none";
    attaque.style.display = "block";
    attaqueR.style.display = "none";
}
function shirtRR() {
    atta.style.display = "block";
    def.style.display = "block";
    milieu.style.display = "block";
    goal.style.display = "block";

    defan.style.display = "block";
    defanR.style.display = "none";
}



function miliF() {
    atta.style.display = "none";
    def.style.display = "none";
    milieu.style.display = "block";
    goal.style.display = "none";

    goalbtn.style.display = "block";
    goalbtnR.style.display = "none";
    defan.style.display = "block";
    defanR.style.display = "none";
    mili.style.display = "none";
    miliR.style.display = "block";
    attaque.style.display = "block";
    attaqueR.style.display = "none";
}
function miliRR() {
    atta.style.display = "block";
    def.style.display = "block";
    milieu.style.display = "block";
    goal.style.display = "block";

    mili.style.display = "block";
    miliR.style.display = "none";
}



function attaqueF() {
    atta.style.display = "block";
    def.style.display = "none";
    milieu.style.display = "none";
    goal.style.display = "none";

    goalbtn.style.display = "block";
    goalbtnR.style.display = "none";
    defan.style.display = "block";
    defanR.style.display = "none";
    mili.style.display = "block";
    miliR.style.display = "none";
    attaque.style.display = "none";
    attaqueR.style.display = "block";
}
function attaqueRR() {
    atta.style.display = "block";
    def.style.display = "block";
    milieu.style.display = "block";
    goal.style.display = "block";

    attaque.style.display = "block";
    attaqueR.style.display = "none";
}



