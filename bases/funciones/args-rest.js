"use strict";
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
//# sourceMappingURL=args-rest.js.map