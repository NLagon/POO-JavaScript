var heures = Number(prompt("Entrez le nombre d'heures: "));
var minutes = Number(prompt("Entrez le nombre de minutes: "));
var secondes = Number(prompt("Entrez le nombre de secondes: "));



if ((heures <= 23 && heures >= 0) && (minutes <= 59 && minutes >= 0) && (secondes <= 59 && secondes >= 0)) {
    secondes++;
    if (secondes === 60) {
        secondes = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        heures++;
    }

    if (heures === 60) {
        heures = 0;
    }

    console.log(heures + "h" + minutes + "m" + secondes + "s");

} else {
    console.log("Format incorrecte");
}
