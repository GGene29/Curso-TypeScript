"use strict";
(() => {
    const sumar = (a, b) => a + b;
    console.log(sumar(3, 6));
    const contar = (heroes) => {
        if (heroes.length <= 0)
            throw Error('No hay datos');
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    console.log(contar(superHeroes));
    const llamarBatman = (llamar = "BATMAN") => {
        if (llamar) {
            console.log(`Batiseñal activada ${llamar}`);
        }
        return llamar;
    };
    llamarBatman();
    const unirheroes = (...personas) => {
        return personas.join(", ");
    };
    console.log(unirheroes('Uno', 'Dos'));
    const noHaceNada = (numero, texto, booleano, arreglo) => {
        throw Error('ACEPTADO');
    };
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
    noHaceNadaTampoco(5, "años", true, ["amigo", "primo"]);
})();
//# sourceMappingURL=appPractice.js.map