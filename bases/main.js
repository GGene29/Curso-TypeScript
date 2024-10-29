"use strict";
(() => {
    class Calculo {
        constructor(base, altura, perimetro) {
            this.pi = 3.14;
            this.area = 0;
            this.base = base;
            this.altura = altura;
            this.perimetro = perimetro;
        }
        calcularAreaC() {
            console.log('Calculo metodo de clase principal Cuadradop');
            this.area = this.perimetro * this.perimetro;
            console.log(`El área calculada fue; en base al perimetro ${this.perimetro}`);
            return `Área Calculada ${this.area}^2`;
        }
        calcuTriangle() {
            console.log('Calculo - metodo de clase principal para triangulo');
            this.area = this.base * this.altura / 2;
            return `Area Calculada del Triangulo ${this.area}^2`;
        }
    }
    const triangulo = new Calculo(5, 6, 0);
    console.log(triangulo.calcuTriangle());
})();
//# sourceMappingURL=main.js.map