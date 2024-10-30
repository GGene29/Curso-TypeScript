(
()=>{
    class Calculo{
        base : number; //B = base
        altura : number; // h = altura
        perimetro : number; // L = perimetro
        pi? : number = 3.14
        area? :number = 0;
        
        constructor( base : number, altura : number, perimetro : number){
            this.base = base;
            this.altura = altura
            this.perimetro   = perimetro
        }


        calcularAreaC(){
            console.log('Calculo metodo de clase principal Cuadradop');
            
            this.area = this.perimetro * this.perimetro
            // this.area = this.area ^ 2
            
            console.log(`El área calculada fue; en base al perimetro ${this.perimetro}`);
            
            
            return `Área Calculada ${this.area}^2`
        }

        calcuTriangle(){
            console.log('Calculo - metodo de clase principal para triangulo')

            this.area = this.base * this.altura / 2
            return `Area Calculada del Triangulo ${this.area}^2`
        }
    }

    const triangulo = new Calculo(5,6,0)
    console.log(triangulo.calcuTriangle())

    const cuadrado = new Calculo(3,5,9)
    console.log(cuadrado.calcularAreaC())


}
)()