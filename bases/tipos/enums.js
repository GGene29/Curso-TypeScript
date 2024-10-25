"use strict";
// Enumeraciones
// Tipo propio de typescript
(() => {
    // trabajar con valores que tengan sentido semantico (alto, bajo, medio, etc
    let level = 1;
    let LevelPlay;
    (function (LevelPlay) {
        LevelPlay[LevelPlay["min"] = 1] = "min";
        LevelPlay[LevelPlay["medium"] = 2] = "medium";
        LevelPlay[LevelPlay["max"] = 3] = "max"; //2  por defect pero también es asigable
        // Como un array, es más sencillo leer estos parámetros que números
    })(LevelPlay || (LevelPlay = {}));
    let porDfecto = LevelPlay.min;
    console.log(porDfecto);
})();
