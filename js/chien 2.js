// TODO : ajoutez ici la définition de l'objet chien

var chien = {

    nom: "rex",
    race: "berger",
    taille: 65,


    aboyer: function () {

        var aboiement = " wafwaf";

        return aboiement;


    }


}


console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");

console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());
