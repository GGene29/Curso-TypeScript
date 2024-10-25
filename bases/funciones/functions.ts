(()=>{

    const personaje: string = 'Deku';

    function returnName ():string {
        return personaje;
    }

    const llamado = ():string => {
        return 'Llamado al personaje';
    }

    console.log(typeof llamado);

    
})()