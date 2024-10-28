( ()=> {

    class Casa {
        // puedo acceder sin necesidad de hacer instancia de mi clase
        static id : number = 20;
        static prueba() {
            return this.name
        }

        constructor ( 

            public model : string,  
            public year : string,
            id:number = 55,

        ){}

        // Metodos
        // Si no se le pasa propiedad de acceso, por defecto es publica
        bio() {
            return "Prueba"
        }
    }

    const auto : Casa = new Casa("Residencia" , "5") 
    
    console.log('Nueva clase de autos - resumido');
    
    console.log(auto)

    console.log(Casa.id);
    // Ejecución del método
    console.log(auto.bio())
    // Las clases también poseen un nombre
    console.log(Casa.prueba())


})()