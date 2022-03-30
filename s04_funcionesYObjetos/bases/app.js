"use strict";
console.log("************ Lesson 27. funciones básicas ************");
const hero = "Flash";
const returnName = () => hero;
console.log(returnName());
const activateBatSignal = () => "Batiseñal activada";
console.log(typeof activateBatSignal);
const heroName = returnName();
console.log("el hero name", heroName);
console.log("************ Lesson 28. parámetros obligatorios ************");
const getFullName = (firstName, lastNAme) => `${firstName} ${lastNAme}`;
console.log("imprimo fullname", getFullName("Tony", "Stark"));
console.log("************ Lesson 29. parámetros opcionales ************");
const getFullName2 = (firstName, lastNAme) => `${firstName} ${lastNAme || "-----"}`;
console.log("imprimo fullname", getFullName2("Tony"));
console.log("************ Lesson 30. parámetros por defecto ************");
const getFullName3 = (firstName, lastNAme, upper = true) => {
    return upper
        ? `${firstName} ${lastNAme || "-----"}`.toUpperCase()
        : `${firstName} ${lastNAme || "-----"}`;
};
console.log("imprimo fullname", getFullName3("Tony", "stark", true));
console.log("************ Lesson 31. parámetros rest ************");
const getFullName4 = (firstName, ...restArgs) => {
    return `${firstName} ${restArgs.join(" ")}`;
};
console.log("imprimo fullname", getFullName4("Clark", "Joseph", "Kent", "AKA", "Superman"));
console.log("************ Lesson 32. type function ************");
const addNumbers = (num1, num2) => num1 + num2;
const greet = (name) => `Hola ${name}`;
const saveTheWorld = () => `El mundo está salvado`;
let myFunc;
myFunc = 10;
myFunc = addNumbers;
console.log(myFunc(1, 2));
myFunc = greet;
console.log(myFunc('Javi'));
myFunc = saveTheWorld;
console.log(myFunc());
// define the function as function
let myFunc2;
myFunc2 = addNumbers;
console.log(myFunc2(1, 2));
myFunc2 = greet;
console.log(myFunc2('Javi'));
myFunc2 = saveTheWorld;
console.log(myFunc2());
// define the function as a specific function
let myFunc3;
myFunc3 = addNumbers;
console.log(myFunc3(1, 2));
let myFunc4;
myFunc4 = greet;
console.log(myFunc4('Javi'));
let myFunc5;
myFunc5 = saveTheWorld;
console.log(myFunc5());
console.log("************ Lesson 33. Ejercicio 2 ************");
// Funciones Básicas
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
//Parametros por defecto
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
// Rest?
const unirheroes = (...personas) => {
    return personas.join(", ");
};
// Tipo funcion
const noHaceNada = (numero, texto, booleano, arreglo) => { };
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
