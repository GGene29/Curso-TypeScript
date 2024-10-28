"use strict";
(() => {
    const addNumbers = (a, b) => {
        return a + b;
    };
    const greetSaludo = (name) => `Hola ${name}`;
    const messages = () => `El mundo esta salvado`;
    let myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 5));
    myFunction = greetSaludo;
    console.log(myFunction("Cómo estás"));
    myFunction = messages;
    console.log(myFunction());
})();
//# sourceMappingURL=function-types.js.map