( () => {

    // Cuando quiero tener más de un objeto pero que guardan los mismo valores y tipos de datos
    // Se crea un OBJETO y luego se asigna a los demás
    type Usuario = {
        user: string,
        login : string,
        password : (string | number),
        caract?: () => number | string,
    };


    let pedro : Usuario = {
        user : "Pedro",
        login: "pedro",
        password : 2342 + "abd" ,
    }
    console.log(pedro.password)

    let marcos : Usuario = {
        user: "Marcoss",
        login: "Mar",
        password : 33,
        caract(){return 5 },
    }
    
    let resultFun = marcos.caract
    console.log(resultFun)
    console.log(marcos)

    // Los types se pueden asignar a otros pero ellos en si, no cuentan como valor == undefined
    // console.log(Usuario) 
})()