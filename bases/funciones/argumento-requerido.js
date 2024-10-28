"use strict";
(() => {
    const fullName = (name, lastName) => {
        if (!name || !lastName) {
            throw Error("Datos requeridos");
        }
        return `Resultado del nombre ${name} ${lastName}`;
    };
    const reasultName = fullName("Genesis", "Gabriela");
    console.log(reasultName);
})();
//# sourceMappingURL=argumento-requerido.js.map