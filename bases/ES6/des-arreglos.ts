( () => {

    // Des-Estructuración de Arrays - Arreglos
    const personajes: string[] = ["Cap America" , "Batman" , "Hulk", 'Otro']

    console.log('Muestra del tercer valor del array por posición');
    
    console.log(personajes[2]);

    console.log('Des-estructuración');
// Se coloca una coma " , " para variar entre los espacios y le asignamos una 'variable'
    const [ primero, segundo, ...resto] = personajes;
    console.log(primero)
    console.log(segundo);
    console.log(resto);
    

    

    
})()