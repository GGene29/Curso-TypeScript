"use strict";
(() => {
    const Pedro = {
        name: "Pedro Jose",
        age: 24,
        address: "Morera"
    };
    const Victor = {
        name: "Victor Jose",
        age: 23,
        address: "Banco"
    };
    const Roger = {
        name: "Roger Jose",
        age: 24,
        address: "Banco"
    };
    const usuarios = [Roger, Pedro, Victor];
    console.log('Usuarios');
    console.log(usuarios);
    for (const user of usuarios) {
        console.log(user);
        console.log(user.age, user.name.toUpperCase());
    }
})();
//# sourceMappingURL=main.js.map