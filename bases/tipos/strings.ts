(() => {
    // Por ende, no permite usar las sugerencias
    const texto: any= 'Aceptacualquiercosa' 
    const personaje:string = "Batman";
    // Las comillas simples son más ligeras
    const personajeDos:string = 'Apos\'trofe';

    const personajeTres : string = `Superman`

    // interpolación de string
    console.log(personajeDos + `Existimos ${personaje} `)

    // Uso del (?), acorde a su posición tiene una función
    // en este caso, si no cumple, no hagas nada. Pero con la instrucción || es como un haz esto o esto
    console.log(personajeTres[2]?.toLocaleUpperCase() || 'No cumple')


})()