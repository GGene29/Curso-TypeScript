( () => { 

  // Funciones Básicas
  const sumar = ( a:number , b:number ) => a + b;
  console.log(sumar( 3, 6))

  const contar = (heroes:string[] ) :number => {
    if(heroes.length <= 0)
      throw Error ('No hay datos')
    return heroes.length;

  }


  const superHeroes : string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
  console.log(contar(superHeroes))

  // contar(superHeroes)
  // contar('heroe 1','heroe dos')

  //Parametros por defecto
  const llamarBatman = ( llamar: string = "BATMAN" ): string => {
    if( llamar ){
      console.log(`Batiseñal activada ${llamar}`);

    }
    return llamar;
  }

  llamarBatman();

  // Rest?
  const unirheroes = ( ...personas: string[] ): string => {
    return personas.join(", ");
  }
  console.log(unirheroes('Uno','Dos'));


  // Tipo funcion
  const noHaceNada = ( numero:number , texto:string , booleano:boolean, arreglo:string[] ): never => {
    throw Error ('ACEPTADO');
  }

  // Crear el tipo de funcion que acepte la funcion "noHaceNada"
  let noHaceNadaTampoco: (n:number, a:string, b:boolean, c:string[]) => void;noHaceNadaTampoco = noHaceNada
  noHaceNadaTampoco(5, "años", true, ["amigo", "primo"])

}) ()