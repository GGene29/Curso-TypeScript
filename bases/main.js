"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo a salvo';
        }
    }
    class Villano extends Mutante {
        conquistarMundo() {
            return 'Salvar mundo';
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan");
    const magneto = new Villano("Magneto", "Magnus");
    console.log({ magneto });
    console.log(magneto.conquistarMundo());
    console.log({ wolverine });
    console.log(wolverine.salvarMundo());
    console.log(Xmen.name);
    console.log(Mutante.name);
    const especifica = (caracter) => {
        console.log(` Nombre dentro ${caracter.realName}`);
    };
    especifica(magneto);
    class Personaje {
        constructor(nombre, nivel, vida, experiencia) {
            this.nombre = nombre;
            this.nivel = nivel;
            this.vida = vida;
            this.experiencia = experiencia;
        }
        defender(daño) {
            this.vida = this.vida - daño;
        }
    }
    class Guerrero extends Personaje {
        constructor(nombre, nivel, vida, experiencia, habilidad) {
            super(nombre, nivel, vida, experiencia);
            this.habilidad = habilidad;
        }
        atacar() {
            if (this.habilidad === "Comer") {
                return 6;
            }
            else {
                return 3;
            }
        }
    }
    const guerrero = new Guerrero("Po", 4, 6, 4, "Comer");
    console.log(guerrero);
    class Mago extends Personaje {
        constructor(nombre, nivel, vida, experiencia) {
            super(nombre, nivel, vida, experiencia);
        }
        atacar() {
            let daño = 2;
            return this.vida = this.vida - daño;
        }
    }
    const mago = new Mago('Gandalf', 6, 4, 8);
    console.log(mago);
    const dañoInfligido = guerrero.atacar();
    mago.defender(dañoInfligido);
    console.log(`${guerrero.nombre} atacó a ${mago.nombre} e infligió ${dañoInfligido} de daño.`);
    console.log(`${mago.nombre} ahora tiene ${mago.vida} puntos de vida.`);
})();
//# sourceMappingURL=main.js.map