var mots = [];
while (mot !== "stop") {
    var mot = prompt("Entrez un mot :")
    mots.push(mot);
}

mots.forEach(function (mot) {

    console.log(mot);

});
