"use strict";
(() => {
    // Actualmente solo trabaja con numeros y letras
    const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, '10'];
    // cuando el [] puede ser arreglo o tuplas
    console.log(numeros);
    // válido mientras no tenga un tipo definido
    numeros.push('text');
    console.log({ numeros });
    const number = [1, 3, 5, 7, 9];
    console.log(number);
    // Error latente porque no aíncide el tipo
    // number.push("tres") 
    number.forEach(v => console.log(v));
})();
