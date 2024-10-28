"use strict";
const msg = 'Hola mundo de typescript';
console.log(msg);
const person = {
    name: "Juan",
    lastname: "Pablo",
    age: 17
};
person.age = 25;
console.log(person.lastname);
console.log(person.age + 5);
let b = "Bienvenido";
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
    let result = sms.toUpperCase();
    console.log(result);
    console.log(sms);
}
inicioFunc("Grupo estable");
(() => {
    const number = 20;
    console.log(number);
})();
((n, m) => {
    let suma = n + m;
    console.log(suma);
})(3, 5);
//# sourceMappingURL=app.js.map