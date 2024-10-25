"use strict";
(() => {
    var _a;
    // Por ende, no permite usar las sugerencias
    const texto = 'Aceptacualquiercosa';
    const personaje = "Batman";
    // Las comillas simples son más ligeras
    const personajeDos = 'Apos\'trofe';
    const personajeTres = `Superman`;
    // interpolación de string
    console.log(personajeDos + `Existimos ${personaje} `);
    // Uso del (?), acorde a su posición tiene una función
    // en este caso, si no cumple, no hagas nada. Pero con la instrucción || es como un haz esto o esto
    console.log(((_a = personajeTres[2]) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()) || 'No cumple');
})();
