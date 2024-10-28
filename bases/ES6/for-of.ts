(() => {
    type Persona = {
        name : string,
        age : number,
        address : string
    }

    const Pedro : Persona = {
        name : "Pedro Jose",
        age :24,
        address : "Morera"
    } 

    const Victor : Persona = {
        name : "Victor Jose",
        age :23,
        address : "Banco"
    }

    const Roger : Persona = {
        name : "Roger Jose",
        age :24,
        address : "Banco"
    }

    const usuarios : Persona[] = [Roger, Pedro, Victor];
    console.log('Usuarios');
    console.log(usuarios);

    // El cliclo for - of , nos permite barrer el arreglo

    for (const user of usuarios){
        console.log(user)
        console.log(user.age, user.name.toUpperCase())
    }
    
    



})()