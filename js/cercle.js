var r = Number(prompt("Entrez le rayon d'un cercle :"));

// TODO : ajoutez ici la définition de l'objet cercle


var cercle = {
    rayon: r,

    perimetre: function () {

        var res = 2 * Math.PI * this.rayon;

        return res;
    },


    aire: function () {

        var res = Math.pow(this.rayon, 2) * Math.PI;

        return res;

    }

}

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());
