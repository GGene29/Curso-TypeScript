(() => {
    console.log("Actualmente ya no es recomendable usar el var")

    let a = "LET"
    var b = "VAR"

    console.log(a)
    console.log(b)

    const hero :{a:number, b:number} = {
        a: 1,
        b: 2
    }
    console.log(hero)

    // hero = {
    //     a: 5,
    //     b:9
    // }

    hero.b = 60
    console.log("Cambio");
    
    console.log(hero) 

    


})() 