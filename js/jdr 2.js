var perso = {
    nom: "Auror",
    sante: 123,
    force: 34,
    xp: 0,


    decrire: function () {

        var description = this.nom + " a " + this.sante + " de santé et " + this.force + " points de force et " + this.xp + " points d'exp";

        return description;


    }
};


// perso blessé par une flèche 
perso.sante = perso.sante - 10;

// perso perd de la force
perso.force = perso.force - 10;


console.log(perso.decrire());
