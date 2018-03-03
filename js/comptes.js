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


    débiter: function (montant) {

        this.somme += montant;

    },

    créditer: function ()
};

var CompteBancaire = Object.create(Compte);

CompteBancaire.initBancaire = function (nom, somme) {

    this.nom = nom;
    this.somme = somme;

};



var CompteEpargne = Object.create(Compte);

CompteBancaire.initBancaire = function (nom, somme, taux) {

    this.nom = nom;
    this.somme = somme;
    this.taux = taux;

};


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
