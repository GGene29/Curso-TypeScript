"use strict";
// El uso del :string el cual es el tipado de datos
const msg = 'Hola mundo de typescript';
console.log(msg);
// para copilarlo, se ejecuta tsc nombredelArchivo y realiza su copilación a js y corre con su tipado
// Activa el modo observador con tsc --watch
const person = {
    name: "Juan",
    lastname: "Pablo",
    age: 17
};
person.age = 25;
console.log(person.lastname);
console.log(person.age + 5);
// Correcto
let b = "Bienvenido";
// Incorrecto pero valido
// Valor any - recibe cualquier tipo de dato
let a;
a = 5;
console.log("Valor de la letra a con tipo any");
console.log(a);
a = "5";
console.log("Valor de la letra a con tipo any");
console.log(a);
a = [3, "l"];
console.log("Valor de la letra a con tipo any");
console.log(a);
function inicioFunc(sms) {
    // parametro . "ayuda y todos los metodos y propiedades con los que se puede trabajar acorde al tipo de dato"
    let result = sms.toUpperCase();
    console.log(result);
    console.log(sms);
}
inicioFunc("Grupo estable");
// fuunción anónima auto invocada
(() => {
    const number = 20;
    console.log(number);
})();
((n, m) => {
    let suma = n + m;
    console.log(suma);
})(3, 5);
