var nb_lignes = Number(prompt("Entrez le nb de lignes du triangles: "));
var compteur = 1;
var ligne = "";
while (compteur <= nb_lignes) {

    for (var i = 1; i <= compteur; i++) {
        ligne += "#";
    }
    console.log(ligne);
    ligne = "";
    compteur++;
}
