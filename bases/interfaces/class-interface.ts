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
    class Casa implements Edificio , Human {
        name = "JJ";
        numberEdificios = 5;
        age = 4;
        // age : number;
    }

    


})()