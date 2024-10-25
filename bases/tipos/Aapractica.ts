(() => {

    // Tipos
    const batman : string= 'Bruce';
    const superman  : string= 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes : [string,string]= [batman,superman];
    const villano:[string,number,boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum Unico {
      minimo = 0,
      medio = 1,
      fuerte = 5,
      superfuerte = 100
    }

    const fuerzaFlash : Unico = Unico.minimo;
    const fuerzaSuperman: Unico = Unico.superfuerte;
    const fuerzaBatman: Unico = Unico.medio;
    const fuerzaAcuaman: Unico = Unico.fuerte;
  

    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }

    function pedir_ayuda():void{
      console.log('Auxilio!!!');
  
    }
  
    // Sin retorno
    function pedir_ayud(value : string) :never {
      console.log('Auxilio!!!');
      throw new Error(value)

    }
  
    // Aserciones de Tipos
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  })()
  
  