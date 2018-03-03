var Film = {

    nom: "",
    annee: 0,
    realisateur: "",

    init: function (nom, annee, realisateur) {

        this.nom = nom;
        this.annee = annee;
        this.realisateur = realisateur;
    },

    decrire: function () {

        console.log(this.nom + " ( " + this.annee + " ) " + this.realisateur);

    }
};

/*var i = 0;

while (i < films.length) {

    console.log(films[i]);

    i++;
}*/

var film1 = Object.create(Film);
film1.init("moi", 2016, "toi");

var film2 = Object.create(Film);
film2.init("Loup de Wall Street", 2001, "lui");

var film3 = Object.create(Film);
film3.init("zezeze", 2013, "eux");

var films = [];

films.push(film1);
films.push(film2);
films.push(film3);


films.forEach(function (film) {

    console.log(film.decrire());

});
