"use strict";
(() => {
    // Tipos de funciones
    const addNumbers = (a, b) => {
        return a + b;
    };
    const greetSaludo = (name) => `Hola ${name}`;
    const messages = () => `El mundo esta salvado`;
    // Pero siempre se debe definir que tipo aceptara
    // let myFunction;
    let myFunction;
    // let myFunction : (variable : types => typeReturn) 
    // ejemplo -- let function = name:()=>number
    // ley myFunction : (n : numbre = number)
    // myFunction = 10;
    // console.log(myFunction)
    // asignación de valores - Al pasar una función a otra variable, esta por defecto adopta el tipado de la función
    myFunction = addNumbers;
    console.log(myFunction(1, 5));
    myFunction = greetSaludo;
    console.log(myFunction("Cómo estás"));
    myFunction = messages;
    console.log(myFunction());
    // estas se consideran aberraciones
})();
