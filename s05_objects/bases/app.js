"use strict";
console.log("************ Lesson 35. basic objects ************");
let flash = {
    name: "Barry Allen",
    age: 24,
    powers: ['súpervelocidad', 'viajar en el tiempo']
};
// typescript will ask me for the inferred properties
// flash = {
//   name2: 'Hola'
// }
console.log(flash);
console.log("************ Lesson 36. Cómo crear objetos específicos ************");
let flash2 = {
    name: "Barry Allen",
    age: 24,
    powers: ['súpervelocidad', 'viajar en el tiempo']
};
flash2 = {
    name: "Barry Allen",
    powers: ['súpervelocidad', 'viajar en el tiempo']
};
console.log("************ Lesson 37. Métodos dentro de objetos ************");
let flash3 = {
    name: "Barry Allen",
    age: 24,
    powers: ['súpervelocidad', 'viajar en el tiempo'],
    getName() { return this.name; },
};
console.log(flash3.getName());
console.log("************ Lesson 38. Problema con la definición en línea ************");
// ...
console.log("************ Lesson 39. Tipos personalizados ************");
let flash4 = {
    name: "Barry Allen",
    age: 24,
    powers: ['súpervelocidad', 'viajar en el tiempo'],
    getName() { return this.name; },
};
let superman = {
    name: "Clark Kent",
    powers: ['súpervelocidad', 'otras cosas'],
};
console.log("************ Lesson 40. Múltiples tipos permitidos ************");
let myCustomVariable = "UN HEROE";
console.log(myCustomVariable);
console.log("************ Lesson 41. Ejercicio ************");
// Objetos
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
// Villanos debe de ser un arreglo de objetos personalizados
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique;
mystique = charles;
mystique = apocalipsis;
