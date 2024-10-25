"use strict";
(() => {
    const fullName = (name, lastName) => {
        // typescript respeta lo que realiza el desarrollador, así que no es perfecto, por ende, nunca está de más realizar sus respectivas validaciones
        if (!name || !lastName) {
            throw Error("Datos requeridos");
        }
        return `Resultado del nombre ${name} ${lastName}`;
    };
    const reasultName = fullName("Genesis", "Gabriela");
    console.log(reasultName);
})();
