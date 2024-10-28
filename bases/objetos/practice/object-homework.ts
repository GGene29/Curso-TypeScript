( () => {

  // Objetos
  type Vehiculo = {
    carroceria : string,
    modelo : string,
    antibalas: boolean,
    pasajeros : number,
    disparar? : () => void;
  }

  const batimovil : Vehiculo = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros:4
  };

  console.log(batimovil);

  const bumblebee : Vehiculo = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros:4,
    disparar(){ // El metodo disparar es opcional
      console.log("Disparando");
    }
  };

  console.log(bumblebee);

  type Villanos = {
    nombre: string,
    edad: number,
    mutante:boolean
  }
  // Villanos debe de ser un arreglo de objetos personalizados
  const villanos : Villanos[] = [{
    nombre:"Lex Luthor",
    edad: 54,
    mutante:false
  },{
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true
  },{
    nombre: "James Logan",
    edad: 2, //undefined,
    mutante: true
  }];
  console.log(villanos);
  

  // Multiples tipos
  // cree dos tipos, uno para charles y otro para apocalipsis
  type Char = {
    poder:string, 
    estatura:number
  }

  type Enemi = {
    lider:boolean,
    miembros:string[]
  }

  const charles : Char= {
    poder:"psiquico",
    estatura: 1.78
  };

  const apocalipsis : Enemi = {
    lider:true,
    miembros: ["Magneto","Tormenta","Psylocke","Angel"]
  }

  // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
  let mystique: Char | Enemi;
  // console.log(mystique);

  mystique = charles;
  console.log(mystique);

  mystique = apocalipsis;
  console.log(mystique);

  













})()