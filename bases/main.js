"use strict";
(() => {
    const conducirBatimovil = (auto) => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelerar();
    };
    const batimovil = {
        encender: false,
        velocidadMaxima: 0,
        acelerar() {
            console.log("...... gogogo!!!");
        }
    };
    const guason = {
        reir: true,
        comer: true,
        llorar: false
    };
    const reir = (guason) => {
        if (guason.reir) {
            console.log("JAJAJAJA");
        }
    };
    const ciudadGotica = (ciudadanos) => {
        return ciudadanos.length;
    };
    class Persona {
        constructor() {
            this.nombre = "Pedro";
            this.edad = 20;
            this.sexo = true;
            this.estadoCivil = "Soltero";
        }
        imprimirBio(descripcion) {
            return descripcion;
        }
        usosArg() {
            console.log("Aqui estas");
        }
    }
    const miebro = new Persona;
    console.log(miebro);
})();
//# sourceMappingURL=main.js.map