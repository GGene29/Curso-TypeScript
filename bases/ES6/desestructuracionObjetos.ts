( () => {
    
    console.log('destructuration Object');
    
    
    
    type Hero  = {
        nick : string,
        ironmam : string,
        vision : string,
        activo: boolean,
        poder : number
    }

    const avenger : Hero = {
        nick : "Samuel", 
        ironmam: "Robert ",
        vision : "Paul",
        activo : true,
        poder : 1000
    }

    const {poder, vision } = avenger

    console.log(poder , vision.toUpperCase())

    // Podemos destructurar desde las propiedades de la función
    // El ...resto trae todas las demás propiedades del objeto
    const printAvenger = ( { nick, ...resto} :Hero) => {
        console.log('Dentro de la función');
        
        console.log(avenger.ironmam)
        console.log(nick)
        console.log(resto)
    }
    printAvenger(avenger)

    console.log(avenger)




})()