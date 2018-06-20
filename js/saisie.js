    var saisie = Number(prompt("Entrez un nombre inférieur ou égale à 100"));

    while ((saisie > 100) || (saisie < 50)) {
        saisie = Number(prompt("Entrez un nombre entre 50 et 100"));
    }
