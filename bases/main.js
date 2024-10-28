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
(() => {
    const fullName = (upper = false, lastName = "segundo-nombre", name) => {
        if (upper) {
            return `Verdaderos Nombres: ${name} ${lastName}`.toUpperCase();
        }
        return `Resultado del nombre ${name || 'Primer-nombre'} ${lastName}`;
    };
    const reasultName = fullName(true, "Viviana");
    console.log(reasultName);
})();
(() => {
    function name(...valor) {
        console.log("dentro de la función");
        console.log(`Aqui: ${valor}`);
        return valor.join(' ');
    }
    console.log("Hola");
    const nameArray = name('Estoy', 'Otra vez', 'Existimos');
    console.log('Fuera de la función');
    console.log(`Valores: ` + nameArray);
    const suma = (...numeros) => {
        let resultados = 0;
        for (let x = 0; x < numeros.length; x++)
            resultados = resultados += numeros[x];
        return resultados;
    };
    console.log(suma(1, 5, 19));
    console.log(suma(5, 9, 2, 3));
    console.log(suma());
})();
(() => {
    const fullName = (name, lastName) => {
        return `Resultado del nombre ${name} ${lastName || 'no posee'}`;
    };
    const reasultName = fullName("Natalia");
    console.log(reasultName);
})();
(() => {
    const fullName = (name, lastName) => {
        if (!name || !lastName) {
            throw Error("Datos requeridos");
        }
        return `Resultado del nombre ${name} ${lastName}`;
    };
    const reasultName = fullName("Genesis", "Gabriela");
    console.log(reasultName);
})();
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
(() => {
    const personaje = 'Deku';
    function returnName() {
        return personaje;
    }
    const llamado = () => {
        return 'Llamado al personaje';
    };
    console.log(typeof llamado);
})();
(() => {
    const sumar = (a, b) => a + b;
    console.log(sumar(3, 6));
    const contar = (heroes) => {
        if (heroes.length <= 0)
            throw Error('No hay datos');
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    console.log(contar(superHeroes));
    const llamarBatman = (llamar = "BATMAN") => {
        if (llamar) {
            console.log(`Batiseñal activada ${llamar}`);
        }
        return llamar;
    };
    llamarBatman();
    const unirheroes = (...personas) => {
        return personas.join(", ");
    };
    console.log(unirheroes('Uno', 'Dos'));
    const noHaceNada = (numero, texto, booleano, arreglo) => {
        throw Error('ACEPTADO');
    };
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
    noHaceNadaTampoco(5, "años", true, ["amigo", "primo"]);
})();
(() => {
    let persona = "Puedo tener multiples tipos de datos e incluso el dato creado como objeto";
    console.log({ persona });
    persona = 4389;
    console.log({ persona });
    persona = {
        user: "Maria",
        login: "mary",
        password: 123456
    };
    console.log({ persona });
})();
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
(() => {
    let pedro = {
        user: "Pedro",
        login: "pedro",
        password: 2342 + "abd",
    };
    console.log(pedro.password);
    let marcos = {
        user: "Marcoss",
        login: "Mar",
        password: 33,
        caract() { return 5; },
    };
    let resultFun = marcos.caract;
    console.log(resultFun);
    console.log(marcos);
})();
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    console.log(batimovil);
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    console.log(bumblebee);
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: 2,
            mutante: true
        }];
    console.log(villanos);
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    let mystique;
    mystique = charles;
    console.log(mystique);
    mystique = apocalipsis;
    console.log(mystique);
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let Unico;
    (function (Unico) {
        Unico[Unico["minimo"] = 0] = "minimo";
        Unico[Unico["medio"] = 1] = "medio";
        Unico[Unico["fuerte"] = 5] = "fuerte";
        Unico[Unico["superfuerte"] = 100] = "superfuerte";
    })(Unico || (Unico = {}));
    const fuerzaFlash = Unico.minimo;
    const fuerzaSuperman = Unico.superfuerte;
    const fuerzaBatman = Unico.medio;
    const fuerzaAcuaman = Unico.fuerte;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    function pedir_ayud(value) {
        console.log('Auxilio!!!');
        throw new Error(value);
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    let personaje = 1255;
    console.log({ personaje });
    let jugador;
    console.log({ jugador });
    jugador = "Jesus";
    console.log({ jugador });
    let letra = jugador.charAt(1);
    console.log(letra);
    console.log('Tratarlo como string');
    console.log(personaje + 'No aplica');
    console.log(personaje + 2);
})();
(() => {
    const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, '10'];
    console.log(numeros);
    numeros.push('text');
    console.log({ numeros });
    const number = [1, 3, 5, 7, 9];
    console.log(number);
    number.forEach(v => console.log(v));
})();
(() => {
    let acceso = true;
    acceso = false;
})();
(() => {
    let level = 1;
    let LevelPlay;
    (function (LevelPlay) {
        LevelPlay[LevelPlay["min"] = 1] = "min";
        LevelPlay[LevelPlay["medium"] = 2] = "medium";
        LevelPlay[LevelPlay["max"] = 3] = "max";
    })(LevelPlay || (LevelPlay = {}));
    let porDfecto = LevelPlay.min;
    console.log(porDfecto);
})();
(() => {
    const prueba = (message) => {
        console.log('Hasta aqui llegamos');
        throw new Error(message);
    };
    prueba("NO HAY FIN");
    const error = (message) => {
        if (true) {
            throw new Error(message);
        }
        return "Caso específico en que si no ejecuta nada, cierre con esto";
    };
    error('feliz');
})();
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
    console.log({ buenos });
    let notanumber = Number("55S");
    console.log(notanumber);
})();
(() => {
    var _a;
    const texto = 'Aceptacualquiercosa';
    const personaje = "Batman";
    const personajeDos = 'Apos\'trofe';
    const personajeTres = `Superman`;
    console.log(personajeDos + `Existimos ${personaje} `);
    console.log(((_a = personajeTres[2]) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()) || 'No cumple');
})();
(() => {
    const hero = ['Todoroki', 100];
    console.log(hero);
    hero[1] = 150;
    console.log({ hero });
    let prueba = ('sdf');
    console.log({ prueba });
})();
(() => {
    let nada = undefined;
    console.log(nada);
    let active = undefined;
    console.log({ active });
})();
(() => {
    function VoidType() {
        console.log('Opuesto a las ANY - Los Void no poseen ningun tipo de dato');
        console.log('Destinado para no realizar retornos');
    }
    const a = VoidType();
    console.log(a);
})();
//# sourceMappingURL=main.js.map