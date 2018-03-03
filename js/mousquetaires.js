var Mousquetaire = {

    nom: "",


    init: function (nom) {
        this.nom = nom;
    },


    decrire: function () {

        console.log(this.nom);
    }

};

var mousquetaire1 = Object.create(Mousquetaire);
mousquetaire1.init("A");

var mousquetaire2 = Object.create(Mousquetaire);
mousquetaire2.init("B");

var mousquetaire3 = Object.create(Mousquetaire);
mousquetaire3.init("C");

var mousquetaires = [];
mousquetaires.push(mousquetaire1);
mousquetaires.push(mousquetaire2);
mousquetaires.push(mousquetaire3);

for (var i = 0; i < mousquetaires.length; i++) {

    console.log(mousquetaires[i].nom);

}

var mousquetaire4 = Object.create(Mousquetaire);
mousquetaire4.init("D");
mousquetaires.push(mousquetaire4);

mousquetaires.forEach(function (mousquetaire) {

    console.log(mousquetaire.decrire());

});
