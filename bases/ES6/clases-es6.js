( () => {
// Manera en la que se hace en JavaScript
    class Person {
        name;
        age;
// Se puede ejecutar el construcción cuando llamo a la instancia de la clases
// Se inicializa y se solicitan los valores
        constructor( name = "vacio", age = 0) {
            this.name = name;
            this.age = age;

        }
    }


// Se le pasan los valores
    const otroP = new Person("Gabriel" , 25 )

    console.log(otroP)
})()