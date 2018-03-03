/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

var Contact = {

    nom: "",
    prenom: "",

    init: function (nom, prenom) {

        this.nom = nom;
        this.prenom = prenom;
    },

    decrire: function () {

        console.log("Nom : " + this.nom + ", prénom : " + this.prenom)
    }
};

console.log("Bienvenue dans le gestionnaire des contacts")

var contact1 = Object.create(Contact);
contact1.init("Carole", "Lévisse");

var contact2 = Object.create(Contact);
contact2.init("Mélodie", "Nelsonne");

var contacts = [];

contacts.push(contact1);
contacts.push(contact2);

console.log("1 : Lister les contacts");
console.log("2 : Ajouter un contact");
console.log("3 : Quitter");

var choix = Number(prompt("Choisissez une option"));
var nom = "";
var prenom = "";

while (choix !== 3) {

    switch (choix) {

        case 1:

            contacts.forEach(function (contact) {
                console.log(contact.decrire());
            });

            break;

        case 2:
            nom = prompt("Entrez le nom du contact");
            prenom = prompt("Entrez le prenom du contact");
            var contactAjoute = Object.create(Contact);
            contactAjoute.init(nom, prenom);
            contacts.push(contactAjoute);

            break;

        case 3:

            break;

        default:

            console.log("Entrez un chiffre correspondant à une option");

            break;
    }


    console.log("1 : Lister les contacts");
    console.log("2 : Ajouter un contact");
    console.log("3 : Quitter");

    choix = Number(prompt("Choisissez une option"));

}
