"use strict";
(() => {
    let buenos = 35;
    console.log(buenos);
    const malos = 25;
    if (buenos < malos) {
        console.log('estamos en problemas');
    }
    else {
        console.log('estamos salvados');
    }
    buenos = 50;
    // Si quieres ver el nombre de la variable a mostrar con su valor
    console.log({ buenos });
    // metodo de texto a número
    let notanumber = Number("55S");
    // Cómo retorna letras y número pero su función retorna es un número
    // manda NaN el cual equivale a un número en JavaScript
    // pero en typescript será un valor (any) - cualquier cosa
    console.log(notanumber);
})();
