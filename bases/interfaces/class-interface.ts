(()=>{

    interface Edificio {
        name : string,
        numberEdificios : number;
        encargado?( id: number) :string;


    }

    interface Human {
        age : number;
    }

    // No se puede extender de la interfaz ensyel
    // implements cuando sabes que usaras las propiedades de la clase
    class Casa implements Edificio , Human {
        name = "JJ";
        numberEdificios = 5;
        age = 4;
        // age : number;
    }

    


})()