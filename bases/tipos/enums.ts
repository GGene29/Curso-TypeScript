// Enumeraciones
// Tipo propio de typescript

(()=>{
    // trabajar con valores que tengan sentido semantico (alto, bajo, medio, etc

    let level = 1

    enum LevelPlay {
        min = 1,        //0 por defecto pero también es asigable
        medium,     //1 por defecto pero también es asigable
        max        //2  por defect pero también es asigable
        // Como un array, es más sencillo leer estos parámetros que números
    }

    let porDfecto = LevelPlay.min;
    console.log(porDfecto)

})()