var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    },


    decrire: function () {

        console.log(this.nom + " est un " + this.race + " il mesure " + this.taille + " cm");

    }
};


var chien1 = Object.create(Chien);
chien1.init("Crockdur", "matin", 75)
chien1.decrire();


var chien2 = Object.create(Chien);
chien2.init("Rex", "berger allemand", 70)
chien2.decrire();


var chien3 = Object.create(Chien);
chien3.init("Croc", "Labrador", 72)
chien3.decrire();

var chiens = [];

chiens.push(chien1);
chiens.push(chien3);
chiens.push(chien2);

chiens.forEach(function (chien) {

    chien.decrire();

})
