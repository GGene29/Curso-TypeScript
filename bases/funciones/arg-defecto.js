"use strict";
(() => {
    // establecer argumentos por defecto
    // por buenas practicas, los parametros que serían opcionales deben ir de último en el orden a solicitar
    const fullName = (upper = false, lastName = "segundo-nombre", name) => {
        // typescript respeta lo que realiza el desarrollador, así que no es perfecto, por ende, nunca está de más realizar sus respectivas validaciones
        if (upper) {
            return `Verdaderos Nombres: ${name} ${lastName}`.toUpperCase();
        }
        return `Resultado del nombre ${name || 'Primer-nombre'} ${lastName}`;
    };
    const reasultName = fullName(true, "Viviana");
    // const reasultName = fullName("viviana");
    // const reasultName = fullName("viviana",true,);
    console.log(reasultName);
})();
