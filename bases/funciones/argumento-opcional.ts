( () => {

    // Cuando no son requeridos todos los campos a recibir, podemos declarar uno opcional con ? el simbolo de interrogración

    const fullName = (name:string , lastName?:string):string =>{

        // typescript respeta lo que realiza el desarrollador, así que no es perfecto, por ende, nunca está de más realizar sus respectivas validaciones
        // if (!name || !lastName){
        //     throw Error ("Datos requeridos")
        // }

        return `Resultado del nombre ${name} ${lastName || 'no posee'}`;
    }

    const reasultName = fullName("Natalia");
    console.log(reasultName);
})()