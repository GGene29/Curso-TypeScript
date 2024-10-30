(()=>{

    // tienden a ser cascarones base para crear clases
    abstract class Mutante {
        constructor(
            public name : string,
            public realName : string,
        ){

        }
    }

    // No podemos crear isntancias de estas clases pero si otras clases
    // const wolverine = new Mutante ("Garras", "Logan") No es válido

    // Extencion o Herencia de una clase abstracta
    class Xmen extends Mutante {
        salvarMundo(){
            return 'Mundo a salvo'
        }
    }
    // Cada clase puede tener sus propios métodos
    class Villano extends Mutante {
        conquistarMundo(){
            return 'Salvar mundo'
        }
    }

    // Nueva clase, si podemos hacer instancias
    const wolverine =  new Xmen ("Wolverine" , "Logan");

    const magneto = new Villano("Magneto", "Magnus");
    // 
    console.log({magneto});
    console.log(magneto.conquistarMundo());
    
    
    console.log({wolverine});
    console.log(wolverine.salvarMundo());
    
    console.log(Xmen.name);
    console.log(Mutante.name);

    // Las clases abstractas también son útiles para solicitar solo clases de tipo N

    const especifica = (caracter : Mutante) => {
        console.log( ` Nombre dentro ${caracter.realName}`);
        
    }

    especifica(magneto);
    


    // ==========================================================================
    // ================= PRACTICA DE CLASES ABSTRACTAS ==========================
    // ==========================================================================


    abstract class Personaje {
        constructor(
            public nombre : string,
            public nivel : number,
            public vida : number,
            public experiencia: number
        ){}
        
        // Debe hacer daño al enemigo, no al personaje mismo
        abstract atacar() : number;
        
        // Igual al defender, no sería lógico que la vida aumente
        defender(daño:number) : void{
            this.vida = this.vida - daño
        }
    }

    class Guerrero extends Personaje {
        // Define tus propios argumentos en cada clase y los pasas luego al super
        constructor( nombre: string, nivel : number, vida: number, experiencia: number, public habilidad : string )
        { 
            super(nombre,nivel,vida,experiencia);
        }
        // Retorna el daño hacer al enemigo y no restes fuerzas al personaje
        atacar(): number {
            if (this.habilidad === "Comer"){
                return 6
            }
            else {
                // let fuerza : number = 1
                // return this.vida = this.vida - fuerza
                return 3
                
            }
        }

    }

    const guerrero = new Guerrero("Po",4,6,4,"Comer");

    console.log(guerrero);

    class Mago extends Personaje {
        constructor( nombre: string, nivel:number,vida:number,experiencia:number){ 
            super(nombre, nivel , vida, experiencia)
        }

        atacar(): number {
            let daño : number = 2
            return this.vida = this.vida - daño
        }

        
    }
    
    const mago = new Mago('Gandalf',6,4,8);
    console.log(mago);

    const dañoInfligido = guerrero.atacar();

    mago.defender(dañoInfligido);
    console.log(`${guerrero.nombre} atacó a ${mago.nombre} e infligió ${dañoInfligido} de daño.`);
    console.log(`${mago.nombre} ahora tiene ${mago.vida} puntos de vida.`);
    
    
    
    
    
    












})()