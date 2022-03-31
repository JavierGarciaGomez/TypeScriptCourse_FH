"use strict";
console.log("************ Lesson 67. Interfaz básica ************");
let flash = {
    name: 'Barry Allen',
    age: 24,
    powers: [1, 2]
};
let superman = {
    name: 'Clark Kent',
    age: 60,
    powers: [1],
    getName() {
        return this.name;
    }
};
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
class Mutant {
    constructor(age, name, realName) {
        this.age = age;
        this.name = name;
        this.realName = realName;
    }
    mutantPower(id) {
        return this.name + ' ' + this.realName;
    }
}
const newMutant = new Mutant(23, 'mut nuevo', 'nombre real');
console.log(newMutant.mutantPower(4));
console.log("************ Lesson 71. Interfaces en funciones ************");
let addNumbersFunction;
addNumbersFunction = (a) => {
    return 10;
};
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
console.log("************ Lesson 72. Ejercicio ************");
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
};
// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
// Cree una interfaz para la siguiente funcion
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
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
class Persona {
}
//# sourceMappingURL=app.js.map