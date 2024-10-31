(()=>{
// No se suelen trabajar

    interface Number {
        // declaración de la función 
        // Parametros a recibir : retorno
        (a : number, b : number) : number;
    }

    let addNumber : Number ;

    // Pero no solicita que sean obligatorios

    addNumber = (a: number, b:number )=> {
        let c = a*b
        return c
    }

    console.log( addNumber(7,6 ) )

})()