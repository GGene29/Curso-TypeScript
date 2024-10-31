(()=>{

    interface Client {
        name : string;
        age : number;
        // si es un objeto opcional podemos hacer una interfaz
        address? : Address
        // En las interfaces el retorno de las funciones 
        // recibe y retorna
        getFull?(item : string) : void  // client , string, void.
    }

    interface Address{
        id: number ; 
        number : number; 
        calle:string
    }

    

    const client : Client= {
        name: "Fernando",
        age : 25,
        address: {
            id : 12,
            number : 43,
            calle : "Principal"
        },
        getFull(name : string) : void{
            console.log('Ahora soy ' + name);
        },
    }    
    
    const clientDos : Client = {
        name : "María",
        age : 5,
        getFull(name : string) : void{
            console.log('Ahora soy ' + name);
            
        },
    
    }
    
    const casa : Client = {
        name : "Casa",
        age : 6,
        address : {
            id:5,
            number : 10,
            calle : "Buena vaina"
        }
    }
    
    // clientDos.getFull("String")
    console.log(clientDos, casa, client);

    // DATO - Para implementación de metodos se recomienda hacerlo en clases
    // clientDos.getFull("JUANA")
    // De las interfaces no hay instancias
    if (typeof clientDos.getFull === 'function') {
        clientDos.getFull('Petra');
    } else {
        console.log('El método getFull no está definido para clientDos');
    }
    
    
})()
    