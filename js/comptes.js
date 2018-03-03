// TODO : ajoutez ici la définition des objets nécessaires
var Compte = {

    nom: "",
    somme: 0,

    init: function (nom, somme) {

        this.nom = nom;
        this.somme = somme;
    },


    decrire: function () {

        console.log("Titulaire: " + this.nom + " ,solde: " + this.somme);
    },


    debiter: function (montant) {

        this.somme -= montant;

    },

    crediter: function (montant) {

        this.somme += montant;

    }
};

var CompteBancaire = Object.create(Compte);

CompteBancaire.initCB = function (nom, somme) {

    this.nom = nom;
    this.somme = somme;

};



var CompteEpargne = Object.create(Compte);

CompteEpargne.initCE = function (nom, somme, taux) {

    this.nom = nom;
    this.somme = somme;
    this.taux = taux;

};

CompteEpargne.ajouterInterets = function () {

    this.somme += this.taux;
}


var compte1 = Object.create(CompteBancaire);

compte1.initCB("Alex", 100);

var compte2 = Object.create(CompteEpargne);

compte2.initCE("Marco", 50, 0.05);


console.log("Voici l'état initial des comptes :");

console.log(compte1.decrire());

console.log(compte2.decrire());


var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));

compte1.debiter(montant);

compte2.crediter(montant);


// Calcule et ajoute les intérêts au solde du compte

compte2.ajouterInterets();


console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");

console.log(compte1.decrire());

console.log(compte2.decrire());
