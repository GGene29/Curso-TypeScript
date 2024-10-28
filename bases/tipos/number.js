"use strict";
(() => {
    let buenos = 35;
    console.log(buenos);
    const malos = 25;
    if (buenos < malos) {
        console.log('estamos en problemas');
    }
    else {
        console.log('estamos salvados');
    }
    buenos = 50;
    console.log({ buenos });
    let notanumber = Number("55S");
    console.log(notanumber);
})();
//# sourceMappingURL=number.js.map