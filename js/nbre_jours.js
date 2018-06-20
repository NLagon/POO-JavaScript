var nbre_mois = Number(prompt("Entrez le mois "));


if (nbre_mois % 2 === 0 && nbre_mois === 2 && nbre_mois <= 12)
    console.log(28);
else if (nbre_mois % 2 === 0 && nbre_mois <= 12)
    console.log(30);
else if (nbre_mois % 2 !== 0 && nbre_mois <= 12)
    console.log(31);
else
    console.log("C'est un numéro de mois que vous avez entré ? ");
