"use strict";
(() => {
    const ventas = {
        trabajadores: "Personas",
        equipos: "Computadoras",
        pagos: 200,
        departamento: "Ventas"
    };
    let inventario = {
        trabajadores: "Cargueros",
        equipos: "Productos",
        pagos: 250,
        departamento: "Inventario y Mercader"
    };
})();
(() => {
    class Casa {
        constructor() {
            this.name = "JJ";
            this.numberEdificios = 5;
            this.age = 4;
        }
    }
})();
(() => {
    const client = {
        name: "Fernando",
        age: 25,
        address: {
            id: 12,
            number: 43,
            calle: "Principal"
        },
        getFull(name) {
            console.log('Ahora soy ' + name);
        },
    };
    const clientDos = {
        name: "María",
        age: 5,
        getFull(name) {
            console.log('Ahora soy ' + name);
        },
    };
    const casa = {
        name: "Casa",
        age: 6,
        address: {
            id: 5,
            number: 10,
            calle: "Buena vaina"
        }
    };
    console.log(clientDos, casa, client);
    if (typeof clientDos.getFull === 'function') {
        clientDos.getFull('Petra');
    }
    else {
        console.log('El método getFull no está definido para clientDos');
    }
})();
(() => {
    let addNumber;
    addNumber = (a, b) => {
        let c = a * b;
        return c;
    };
    console.log(addNumber(7, 6));
})();
//# sourceMappingURL=main.js.map