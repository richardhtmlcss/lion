/*
let prenom = "richard"
let age = 23
let var1 = 1
let var2 = 1
console.log(prenom,age)
console.log(var1+var2)

let ouvert = true
if (ouvert ==true) {
    console.log("c'est ouvert") 
}
else{
    console.log("c'est fermer")
}

console.log("Ok tu t'appelles : "+ prompt("Comment tu t'appelles ?"));

let code = 1234
let reponse = prompt("Quel est le code ?")
if ( reponse == code) {
    console.log("code bon");
}
else{
    console.log("code mauvais");
}

function nom(){
    return "Hello world"
}
console.log(nom())


    for(let i = 1; i < 6; i++ ) {
        console.log(i)
    }
*/


let lion = {
    nom: "Tigre",
    pv: 20,
    attaque: 2,
    precision: 0
};

let humain = {
    nom: "Julien",
    pv: 20,
    attaque: 2,
    precision: 0
};

// personnages

while (lion.pv > 0 && humain.pv > 0) {

    console.log("Nouveau tour");

    let tiragejulien = Math.round(Math.random());
    console.log("Tirage precision humain :", tiragejulien);

    if (tiragejulien === humain.precision) {
        console.log("L'humain rate son attaque");
    } else {
        console.log("L'humain touche le lion");
        lion.pv -= humain.attaque;
    }

    console.log("PV du lion :", lion.pv);

    if (lion.pv <= 0) break;

// tirage de l'humain

    let tiragelion = Math.round(Math.random());
    console.log("Tirage precision lion :", tiragelion);

    if (tiragelion === lion.precision) {
        console.log("Le lion rate son attaque");
    } else {
        console.log("Le lion touche l'humain");
        humain.pv -= lion.attaque;
    }

    console.log("PV de l'humain :", humain.pv);
}

// tirage du lion

console.log("fin du combat");

if (lion.pv <= 0) {
    console.log("L'humain a gagné");
} else {
    console.log("Le lion a gagné");
}

// fin du combat
