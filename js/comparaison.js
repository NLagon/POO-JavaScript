    var nomb1 = Number(prompt("Entrez un premier nombre: "));
    var nomb2 = Number(prompt("Entrez un deuxième nombre"));

    var result = nomb1 - nomb2;


    if (result < 0)
        console.log(nomb1 + "  est plus grand que " + nomb2);

    else if (result > 0) {
        console.log(nomb2 + " est plus grand que " + nomb1);
    } else if (result === 0) {
        console.log("Les nombres sont égaux");
    } else
        console.log("Avez-vous avez entré des nombres ?");
