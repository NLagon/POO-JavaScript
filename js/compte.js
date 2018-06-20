var somme_cre = Number(prompt("Entrez un montant: "));
var somme_deb = Number(prompt("Entrez un montant: "));

var compte = {

    titulaire: "Alex",
    solde: 0,

    crediter: function (montant) {

        this.solde = this.solde + montant;
        return this.solde;

    },


    debiter: function (montant) {

        this.solde = this.solde - montant;
        return this.solde;

    },

    decrire: function () {

        var desc = "Titulaire: " + compte.titulaire + ", solde :" + compte.solde;

        return desc;
    }

}

compte.crediter(somme_cre);
console.log(compte.decrire());
compte.debiter(somme_deb);
console.log(compte.decrire());
