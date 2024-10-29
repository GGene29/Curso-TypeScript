(()=>{

    // Las propiedades de las clases se pueden definir acorde con lo que trabaja el constructor
    class Equipo {
        constructor (
            public marca : string,
            public componente : string,

        ){
            console.log('Dentro de la clase equipo')
            console.log(this.getFullname())
            console.log('llamado de metodo publico de otra clase');
            
        }
        // Metodo privado, propio de la clase
        private getFullname() {
            console.log('ejecución del método getFullname el cual es privado');
            
            return `Privada ${this.componente}`
            
        }
        protected getNames(){
            console.log('ejecución del metodo getNames que es protected');
            
            return `Propia de la clase y sus extends`
        }
    }
    // Instancia de la clase con el "new"
    const psc = new Equipo("Lenovo","Varios")
    
    class Casa { 
        constructor (
            techo : string,
            paredes : string,
            numberWindow : number,
            ){}
            
            pruebadeMetod(){
                // const mensagge : string = "Este es público";
                return 'Casa de prueba'
                
        }
    }
    
        // Nueva clase
        console.log('nueva clase');
        
        console.log({ Casa })
        
        
        
        
        console.log({ psc });
        
        console.log(psc)
        // Herencia de clase con extends
        // Como no tienen constructor pero si la clase que hereda si, llama a la otra
        class Computador extends Equipo {
            // nuevas propiedades propias de la clase actual
            constructor (
                
                public activo : boolean
                ){
                    
                    console.log(" ");
                    // Se llama para poder pasarle los valores de la anterior clase
                    super("Necesito" , "Otro")
                    
                    
                }
                
            
        }
// Sin acceso a los métodos
    const maquina = new Equipo('plastica', 'unico')
    console.log(maquina)    

    const pc = new Computador(true)
    console.log(pc)

        // ACCESO A LOS METODOS PUBLICOS
    const edificio = new Casa("Razo","Cemento",3)
    console.log(edificio.pruebadeMetod());
    console.log({edificio});
    
    
})()