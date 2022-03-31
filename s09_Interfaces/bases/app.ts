console.log("************ Lesson 67. Interfaz básica ************");

interface Hero {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
}


let flash: Hero  = {
    name: 'Barry Allen',
    age: 24,
    powers: [1,2]
} 

let superman: Hero  = {
    name: 'Clark Kent',
    age: 60,
    powers: [1],
    getName() {
        return this.name;
    }
}


console.log("************ Lesson 68. Estructuras complejas ************");
const client = {
    name: 'Fernando',
    age: 25,
    address: {
        id: 125,
        zip: 'KY2 SUD',
        city: 'Ottawa'
    },
    getFullAddress(id) {
        return this.address.city;
    }
};
const client2 = {
    name: 'Melissa',
    age: 30,
    address: {
        city: 'Toronto',
        id: 120,
        zip: 'K2S U2A'
    },
    getFullAddress(id) {
        return this.address.city;
    }
};

console.log("************ Lesson 70. Interfaces en clases ************");

interface Xmen {
    name: string;
    realName: string;
    mutantPower( id: number ):string;
}

interface Human {
    age: number;
}

class Mutant implements Xmen, Human {
    public age: number;
    public name: string;
    public realName: string;

    constructor (age: number, name: string, realName: string){
        this.age=age;
        this.name=name;
        this.realName= realName;
    }
    
    mutantPower( id: number ) {
        return this.name + ' ' + this.realName;
    }
}

const newMutant = new Mutant(23, 'mut nuevo', 'nombre real')
console.log(newMutant.mutantPower(4))

console.log("************ Lesson 71. Interfaces en funciones ************");


    interface addTwoNumbers {
        (a: number, b: number): number;
    }

    let addNumbersFunction: addTwoNumbers;


    addNumbersFunction = (a: number) => {
        return 10;
    }


    (()=> {

    interface addTwoNumbers {
        (a: number, b: number): number;
    }

    let addNumbersFunction: addTwoNumbers;


    addNumbersFunction = (a: number, b: number) => {
        return 10;
    }

})()


console.log("************ Lesson 72. Ejercicio ************");

// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Car {
    encender: boolean,
    velocidadMaxima: number,
    acelerar: () => void
}

const conducirBatimovil = ( auto:Car ):void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
  }
  
  const batimovil:Car = {
    encender:false,
    velocidadMaxima:0,
    acelerar(){
      console.log("...... gogogo!!!");
    }
  }
  
  // Cree una interfaz con que permita utilzar el siguiente objeto
  // utilizando propiedades opcionales
  
  const guason = {
    reir: true,
    comer:true,
    llorar:false
  }
  
  const reir = ( guason ):void => {
    if( guason.reir ){
      console.log("JAJAJAJA");
    }
  }
  
  
  // Cree una interfaz para la siguiente funcion
  
  const ciudadGotica = ( ciudadanos:string[] ):number => {
    return ciudadanos.length;
  }
  
  // Cree una interfaz que obligue crear una clase
  // con las siguientes propiedades y metodos
  
  /*
    propiedades:
      - nombre
      - edad
      - sexo
      - estadoCivil
      - imprimirBio(): void // en consola una breve descripcion.
  */
  class Persona {}
