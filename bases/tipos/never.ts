(() => {

    // Propias de ts 
    // estas no tienen un punto final alcanzable
    const prueba = (message:string):never => {
        console.log('Hasta aqui llegamos')
        // Estas sirven para que el código no continue con la ejecución
        throw new Error(message)
    }
    prueba("NO HAY FIN")

    const error = (message : string):(never|string) => {
        if (true) {
            throw new Error (message)
        }
        return "Caso específico en que si no ejecuta nada, cierre con esto"
    }

    error('feliz')

})()