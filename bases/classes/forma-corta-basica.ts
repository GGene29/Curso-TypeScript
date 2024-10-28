( ()=> {

    class Cars {
        // public model : string;
        // public year : string;
        static id : number = 20;
        // De manera más común, todo se declara y se crea de una vez en el constructor
        constructor ( 

            public model : string,  
            public year : string,
            id:number = 55,

        ){}
    }

    const auto : Cars = new Cars("JOSE PEREZ" , "25", 2) 
    
    console.log('Nueva clase de autos - resumido');
    
    console.log(auto)

    console.log(Cars.id);


})()