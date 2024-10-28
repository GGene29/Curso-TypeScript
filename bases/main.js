"use strict";
(() => {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const jose = new Person("JOSE PEREZ", "25");
    console.log(jose);
})();
(() => {
    class Cars {
        constructor(model, year, id = 55) {
            this.model = model;
            this.year = year;
        }
    }
    Cars.id = 20;
    const auto = new Cars("JOSE PEREZ", "25", 2);
    console.log('Nueva clase de autos - resumido');
    console.log(auto);
    console.log(Cars.id);
})();
(() => {
    class Casa {
        static prueba() {
            return this.name;
        }
        constructor(model, year, id = 55) {
            this.model = model;
            this.year = year;
        }
        bio() {
            return "Prueba";
        }
    }
    Casa.id = 20;
    const auto = new Casa("Residencia", "5");
    console.log('Nueva clase de autos - resumido');
    console.log(auto);
    console.log(Casa.id);
    console.log(auto.bio());
    console.log(Casa.prueba());
})();
//# sourceMappingURL=main.js.map