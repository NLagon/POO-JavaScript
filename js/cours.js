var unObjet = {

    a: 2
};


// Crée unAutreObjet avec unObjet comme prototype
var unAutreObjet = Object.create(unObjet);

// Accède à la propriété de "unObjet"
console.log(unAutreObjet.a); // Affiche 2

console.log(unAutreObjet.b); // Affiche undefined

var encoreUnObjet = Object.create(unAutreObjet);
console.log(encoreUnObjet.a); // Affiche 2
