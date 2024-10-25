"use strict";
(() => {
    function VoidType() {
        console.log('Opuesto a las ANY - Los Void no poseen ningun tipo de dato');
        console.log('Destinado para no realizar retornos');
    }
    const a = VoidType();
    console.log(a);
})();
