"use strict";
(() => {
    let pedro = {
        user: "Pedro",
        login: "pedro",
        password: 2342 + "abd",
    };
    console.log(pedro.password);
    let marcos = {
        user: "Marcoss",
        login: "Mar",
        password: 33,
        caract() { return 5; },
    };
    let resultFun = marcos.caract;
    console.log(resultFun);
    console.log(marcos);
    // Los types se pueden asignar a otros pero ellos en si, no cuentan como valor == undefined
    // console.log(Usuario) 
})();
