function compterNbVoyelles(mot) {

    var voyelle = 0;
    var lettre = 0;

    while (lettre < mot.length) {
        if (mot[lettre] === "a" || mot[lettre] === "e" || mot[lettre] === "i" || mot[lettre] === "o" || mot[lettre] === "u" || mot[lettre] === "A" || mot[lettre] === "E" || mot[lettre] === "I" || mot[lettre] === "O" || mot[lettre] === "U") {
            voyelle++;
        }

        lettre++;
    }

    return voyelle;
}

function inverser(mot) {

    var lettre = 0;
    var inverseMot = "";

    while (lettre < mot.length) {

        inverseMot = mot[lettre] + inverseMot;

        lettre++;
    }

    return inverseMot;
}

function trouverlettreleet(lettre) {

    var lettre;

    switch (lettre) {

        case "a":


            return 4;

        case "b":
            return 8;

        case "e":
            return 3;

        case "l":
            return 1;

        case "o":
            return 0;

        case "s":
            return 5;


    }
}


function convertirEnLeetSpeak(mot) {
    var lettre = 0;
    var motLeet = "";
    while (lettre < mot.length) {

        motLeet += trouverlettreleet(mot[lettre]);
        lettre++;
    }

    return motLeet;


}



var mot = prompt("Entrez un mot: ");
console.log("Le mot " + mot + "contient " + mot.length + " lettres");
console.log("Il s'écrit en minuscules " + mot.toLowerCase());
console.log("Il s'écrit en majuscules " + mot.toUpperCase());
console.log("Le mot contient " + compterNbVoyelles(mot) +
    " voyelles");
var consonne = mot.length - compterNbVoyelles(mot);
console.log("Le mot contient " + consonne + " consonnes");
console.log("Le mot à l'envers: " + inverser(mot));

if (inverser(mot) === mot)
    console.log("C'est un palindrome");
else
    console.log("Ce n'est pas un palindrome");

console.log("Ce mot en leetSpeak: " + convertirEnLeetSpeak(mot));
