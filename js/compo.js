var score = document.getElementById("score");
var scorebis = document.getElementById("scorebis");
var compo = document.getElementById("compo");


function afficher() {
    score.style.display = "none";
    scorebis.style.display = "block";
    compo.style.display = "block";
}

function cacher() {
    score.style.display = "block";
    scorebis.style.display = "none";
    compo.style.display = "none";
}