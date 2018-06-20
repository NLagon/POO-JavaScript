function calculer(a, b, c) {

    if (b === "+")
        return a + c;
    if (b === "-")
        return a - c;
    if (b === "*")
        return a * c;
    if (b === "/")
        return a / c;
}

console.log(calculer(4, "+", 6)); // Doit afficher 10

console.log(calculer(4, "-", 6)); // Doit afficher -2

console.log(calculer(2, "*", 0)); // Doit afficher 0

console.log(calculer(12, "/", 0)); // Doit afficher Infinity
