( ()=> {

    class Person {
        public name : string;
        public age : string;
        private id? : number;

        constructor (name : string, age : string) {
            this.name = name;
            this.age = age;
        }
    }

    const jose :Person = new Person("JOSE PEREZ" , "25") 

    console.log(jose)

})()