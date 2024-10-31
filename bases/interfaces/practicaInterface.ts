( () => { 
// Crear interfaces

  // Cree una interfaz para validar el auto (el valor enviado por parametro)
  interface Auto{
    encender : boolean,
    velocidadMaxima : number,
    acelerar():void
  }


  const conducirBatimovil = ( auto : Auto ):void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
  }
  // Crear interfaz que se adapte a batimovil y será el valor de auto
  const batimovil : Auto = {
    encender:false,
    velocidadMaxima:0,
    acelerar(){
      console.log("...... gogogo!!!");
    }
  }

  // Cree una interfaz con que permita utilzar el siguiente objeto

  interface Payaso {
    reir? : boolean,
    comer? : boolean,
    llorar? : boolean
  }
  // utilizando propiedades opcionales

  const guason : Payaso = {
    reir: true,
    comer:true,
    llorar:false
  }

  // tipo interfez
  const reir = ( guason : Payaso ):void => {
    if( guason.reir ){
      console.log("JAJAJAJA");
    }
  }


  // Cree una interfaz para la siguiente funcion
  // Que reciba un arreglo de argumentos y retorne un número
  interface Batman {
    (arregloFunc : string[]) : number,
  }

  const ciudadGotica : Batman = ( ciudadanos:string[] ):number => {
    return ciudadanos.length;
  }

  // Cree una interfaz que obligue crear una clase Persona
  // con las siguientes propiedades y metodos

  interface Humano {
    nombre : string,
    edad : number,
    sexo : boolean,
    estadoCivil : string,
    imprimirBio( descripcion : string ) : string

  }
  /*
    propiedades:
      - nombre
      - edad
      - sexo
      - estadoCivil
      - imprimirBio(): void // en consola una breve descripcion.
  */
  class Persona implements Humano {

      nombre = "Pedro" ;
      edad = 20;
      sexo = true ;
      estadoCivil ="Soltero";
      imprimirBio( descripcion : string) {
        return descripcion
      }

      usosArg(){
        console.log("Aqui estas")
      }

  }
  
  const miebro = new Persona
  console.log(miebro)

})()