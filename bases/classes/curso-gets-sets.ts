(
() => {

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

        // Herencia de clase con extends
        // Como no tienen constructor pero si la clase que hereda si, llama a la otra
        
    class Computador extends Equipo {
        // nuevas propiedades propias de la clase actual
        // puertos : string;
        constructor ( 
            puertos:string,
            public activo : boolean
            ){
                
                console.log(" ");
                // Se llama para poder pasarle los valores de la anterior clase
                super(puertos , "Agumento")
                
                
            }
        set fullSetPropiedades( marca : string ) {
            console.log('Pasa por el sets');
            
            this.marca = marca;
        }

        get fullPropiedades(){
            return `${ this.marca }`
        }
// Se establece un valor y no tiene retorno
// Solo recibe un solo argumento
    }

// Sin acceso a los métodos
    const maquina = new Equipo('plastica', 'unico')
    console.log(maquina)    
    
    const otroGets = new Computador("Entrada" , true)
    console.log('OtroGets');
    
    console.log(otroGets.fullPropiedades)

    otroGets.fullSetPropiedades = "MARCA Desde el SET"
    console.log(otroGets);

    // NO ENTENDÏ UN CARAJO

}
)()