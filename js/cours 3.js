function direBonjour(prenom, nom) {

    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}


var prenom = prompt("Bonjour, quelle est votre prénom ?");
var nom = prompt("Votre nom ? ");

console.log("Début du programme");
console.log(direBonjour(prenom, nom));
console.log("Fin du programme");
