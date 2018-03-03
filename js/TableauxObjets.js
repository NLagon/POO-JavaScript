var Film = {

    nom: "",
    annee: 0,

    init: function (nom, annee) {

        this.nom = nom;
        this.annee = annee;
    },

    decrire: function () {

        console.log(this.nom + " ( " + this.annee + " )");

    }
};

/*var i = 0;

while (i < films.length) {

    console.log(films[i]);

    i++;
}*/

var film1 = Object.create(Film);
film1.init("moi", 2016);

var film2 = Object.create(Film);
film2.init("Loup de Wall Street", 2001);

var films = [];

films.push(film1);
films.push(film2);


films.forEach(function (film) {

    console.log(film.decrire());

});
