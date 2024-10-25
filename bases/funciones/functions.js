"use strict";
(() => {
    const personaje = 'Deku';
    function returnName() {
        return personaje;
    }
    const llamado = () => {
        return 'Llamado al personaje';
    };
    console.log(typeof llamado);
})();
