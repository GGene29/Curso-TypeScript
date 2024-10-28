"use strict";
(() => {
    console.log("HOLA");
    let person = {
        name: "Objeto de Persona",
        age: 25,
        lastname: "Apellido de Persona",
        mayor: true,
        power: ['invisible', 'bueno']
    };
    console.log(person);
    person = {
        name: "Nuevo valor",
        age: 20,
        lastname: "Segundo",
        mayor: true,
        power: ["Comer", "Dormir"],
    };
    console.log(person);
    let variableObjeto = {
        uno: "Espejo",
        name: "Espejismo",
        otro: "AQUI"
    };
    console.log(variableObjeto);
    variableObjeto = {
        uno: "New NAME",
        otro: "El opcional"
    };
    console.log({ variableObjeto });
    let newObject = {
        name: "Experiencia",
        age: 20,
        otroName() {
            return this.name;
        },
    };
    console.log(newObject.otroName());
    console.log(newObject);
    newObject = {
        name: "Ultimo",
        age: 10,
        otroName() {
            return "Existe";
        },
        mayor: false
    };
    console.log(newObject);
})();
//# sourceMappingURL=objects.js.map