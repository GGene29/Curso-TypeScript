( ()=>{

    type Usuario = {
        user: string,
        login : string,
        password : (string | number),
        caract?: () => number | string,
    };

    let persona : string|number|Usuario = "Puedo tener multiples tipos de datos e incluso el dato creado como objeto"
    console.log( {persona} )

    persona = 4389
    console.log( {persona} )

    persona = {
        user: "Maria",
        login : "mary",
        password : 123456
    }
    console.log( {persona} )
    
})()