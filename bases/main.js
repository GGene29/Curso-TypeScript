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
        }
    };
    const clientDos = {
        name: "María",
        age: 5
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
})();
//# sourceMappingURL=main.js.map