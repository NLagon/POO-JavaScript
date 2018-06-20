function per(rayon) {

    return 2 * Math.PI * rayon;

}

function aire(rayon) {

    return Math.PI * Math.pow(rayon, 2);


}

var rayon = prompt("Entrez un rayon:");

console.log("le périmètre du cerle est: " + per(rayon));

console.log("L'aire du cercle est: " + aire(rayon));
