(() => {

    const hero : [string,number] = ['Todoroki', 100] 
    console.log(hero)

    // Obliga a manejar el tipo de dato acorde a la posición
    // y límita la longitud de los datos
    hero[1] = 150
    console.log({hero})

    // No palica (1,4,5,2) 
    let prueba = ('sdf')
    console.log({prueba})


})()