// Webpack 

console.log('Hola Mundo!!!');
// Las dependencias se declaran en el package.json
// No toque el package.lock.json

// Uso de importaciones
// import Clase from ruta
import { Hero } from "./classes/Hero"; 


const bakugo = new Hero("Dios de las explosiones", 5, 16);

class NewHero extends Hero {
    constructor(texto : string){
        super("Todoroki" , 6,4)
    }
    
}

console.log({ bakugo });
const heroe = new NewHero("Descripción")
console.log(heroe);




