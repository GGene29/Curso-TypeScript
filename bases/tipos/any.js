"use strict";
// Los valores tipo any aceptan cualquier tipo de dato
// Pero se recomienda no usarlas
// Se puede usar en let pero no en las const
(() => {
    let personaje = 1255;
    console.log({ personaje });
    // personaje = 'Cambio el tipo de dato';
    // console.log({personaje});
    // Si se declara un let sin valor, por defecto es tipo any
    let jugador;
    console.log({ jugador });
    jugador = "Jesus";
    console.log({ jugador });
    let letra = jugador.charAt(1);
    console.log(letra);
    // tratalo como un string (no cambia el tipo)
    console.log('Tratarlo como string');
    console.log(personaje + 'No aplica');
    console.log(personaje + 2);
})();
