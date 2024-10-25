( ()=>{
    // Las funciones REST se refieren a que no saben la cantidad de datos a recibir
    // Puede recibir de 0 a n cantidad

//  Ejemplo sencillo
    function name(...valor : string[]) {
        console.log("dentro de la función")
        console.log(`Aqui: ${valor}`)
        return valor.join(' ')
    }
    console.log("Hola")
    const nameArray = name('Estoy', 'Otra vez', 'Existimos') 
    console.log('Fuera de la función')
    console.log(`Valores: ` + nameArray)

// Ejemplo con el manejo de los valores ingresados
    const suma = (...numeros : number[]) => {

        let resultados = 0
        // Al ser como un array, se pueden recorrer sin problemas
        for (let x = 0 ; x < numeros.length; x++)
            resultados = resultados += numeros[x];
        return resultados;
    }
    console.log( suma(1,5,19) )
    console.log( suma(5,9,2,3) )
    console.log(suma())

})()
