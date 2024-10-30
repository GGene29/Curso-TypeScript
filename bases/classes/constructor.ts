( ()=> {

    // Constructores privados dentro de las clases
    class Universo {
        
        static inicio : Universo;
        // No los puedes instanciar luego
        private constructor(public name:string) {
            
        
        }
        // Dentro del constructor para su iniciación
        static callUniverse(): Universo {
            if (!Universo.inicio){
                Universo.inicio = new Universo("Galaxia")
            }
            return Universo.inicio;
        }

        changeName ( newName : string ) : void {
            this.name = newName;
        }

    }   
    
    const inicios = Universo.callUniverse()
    console.log(inicios);
    

    // const universo 
    // console.log(universo.inicio)



})()