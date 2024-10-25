"use strict";
(() => {
    // Lo ideal es declarar que tipo de datos guardara el objeto
    console.log("HOLA");
    // objeto líteral básico en typescript
    let person = {
        name: "Objeto de Persona",
        age: 25,
        lastname: "Apellido de Persona",
        mayor: true,
        power: ['invisible', 'bueno']
    };
    console.log(person);
    // No es válido, ya que no cumple con el objeto líteral
    // person = {
    //     newValue = "Nuevo valor"
    // }
    // El objeto líteral básico es como crear un nuevo tipo de dato
    // 
    person = {
        name: "Nuevo valor",
        age: 20,
        lastname: "Segundo",
        mayor: true,
        power: ["Comer", "Dormir"],
        //aqui : "no se puede", //Corre pero realmente no es válido en typescript
    };
    console.log(person);
    // Objetos de tipo específico
    let variableObjeto = {
        uno: "Espejo",
        name: "Espejismo",
        otro: "AQUI"
    };
    console.log(variableObjeto);
    // En los objetos no importa el nombre para ver si uno es opcional o no
    variableObjeto = {
        uno: "New NAME",
        otro: "El opcional"
    };
    console.log({ variableObjeto });
    // Practica - Si la función recibe vacio se deja los ( ) parentesis vacíos
    let newObject = {
        name: "Experiencia",
        age: 20,
        otroName() {
            return this.name;
        },
    };
    console.log(newObject.otroName());
    console.log(newObject);
    // si le va a incluir un nuevo valor, se debe declarar en el original 
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
