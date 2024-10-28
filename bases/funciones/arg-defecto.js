"use strict";
(() => {
    const fullName = (upper = false, lastName = "segundo-nombre", name) => {
        if (upper) {
            return `Verdaderos Nombres: ${name} ${lastName}`.toUpperCase();
        }
        return `Resultado del nombre ${name || 'Primer-nombre'} ${lastName}`;
    };
    const reasultName = fullName(true, "Viviana");
    console.log(reasultName);
})();
//# sourceMappingURL=arg-defecto.js.map