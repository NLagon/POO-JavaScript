var table_multiNB = Number(prompt("Le nombre dont vs voulez la tble de multi: "));

while (table_multiNB < 2 || table_multiNB > 9) {
    table_multiNB = Number(prompt("Le nombre dont vs voulez la tble de multi entre 2 et 9: "));
}

var nombre = 1;

while (nombre <= 10) {

    console.log(table_multiNB + "*" + nombre + "=" + (table_multiNB * nombre));
    nombre++;

}
