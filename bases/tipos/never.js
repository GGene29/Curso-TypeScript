"use strict";
(() => {
    const prueba = (message) => {
        console.log('Hasta aqui llegamos');
        throw new Error(message);
    };
    prueba("NO HAY FIN");
    const error = (message) => {
        if (true) {
            throw new Error(message);
        }
        return "Caso específico en que si no ejecuta nada, cierre con esto";
    };
    error('feliz');
})();
//# sourceMappingURL=never.js.map