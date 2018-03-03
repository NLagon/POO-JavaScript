var Personnage = { // Définition de l'objet 
    nom: "",
    sante: 0,
    force: 0,

    initPerso: function (nom, sante, force) { //initialisation d'un perso
        this.nom = nom;
        this.sante = sante;
        this.force = force;
    },

    attaquer: function (cible) {

        if (this.sante > 0) {
            var degats = this.force;
        } else
            console.log("Il ne peut attaquer il est mort !!");

        console.log(this.nom + " attaque " + cible.nom + " et lui fait perdre " + degats + " points de vie");

        cible.sante = cible.sante - degats;

        if (cible.sante > 0)
            console.log("Il reste à " + cible.nom + " " + cible.sante + " points de vie");

        else
            console.log("Il est déja mort");


    }

};

var Joueur = Object.create(Personnage); // création d'un objet Joueur par le biais du prototype Personnage

Joueur.initJoueur = function (nom, sante, force) { // Création d'une méthode 
    // pour cet objet Joueur
    // initialisant l'objet 

    this.initPerso(nom, sante, force); // this le mot-clé pour appeler la méthode
    // de l'objet de type Personnage.
    this.xp = 0; // Nous pouvons rajouter une propriété meme si elle n'est pas                     présente
    this.cle = 1;
    this.pieceOr = 10;
};


Joueur.decrire = function () {

    console.log(this.nom + " a " + this.sante + " points de vie, " +
        this.force + " en force et " + this.xp + " points d'expérience " + this.cle + " clé " + this.pieceOr + " pièces d'or");

};

Joueur.attaquerAdversaire = function (cible) {

    this.attaquer(cible);

    if (cible.sante < 0) {

        this.pieceOr += cible.pieceOr
        console.log(this.nom + " a tué " + cible.nom + " a gagné " + cible.sante + " d'experiences " + " et " + cible.pieceOr + " pieces d'or" + " et il a donc maintenant " + this.pieceOr);
    }
};



var Adversaire = Object.create(Personnage);

Adversaire.initAdversaire = function (nom, sante, force, agress) {

    this.initPerso(nom, sante, force);
    this.agress = agress;
    this.cle = 1;
    this.pieceOr = 10;

}

Adversaire.decrire = function () {

    console.log(this.nom + " a " + this.sante + " points de vie, " +
        this.force + " en force et " + this.agress + " points d'agressivité " +
        this.cle + " clé " + this.pieceOr + " pièces d 'or");
};

Adversaire.attaquerJoueur = function (cible) {

    this.attaquer(cible);

};


var joueur1 = Object.create(Joueur); // On lie l'objet au prototype
joueur1.initJoueur("Nass", 123, 124);
joueur1.decrire();

var monstre = Object.create(Adversaire);
monstre.initAdversaire("KOL", 21, 32, 34, 34);
monstre.decrire();
joueur1.attaquerAdversaire(monstre);
