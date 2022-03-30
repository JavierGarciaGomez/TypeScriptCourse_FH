console.log("************ Lesson 27. funciones básicas ************");

const hero: string = "Flash";

const returnName = (): string => hero;

console.log(returnName());

const activateBatSignal = (): string => "Batiseñal activada";

console.log(typeof activateBatSignal);

const heroName = returnName();
console.log("el hero name", heroName);

console.log("************ Lesson 28. parámetros obligatorios ************");

const getFullName = (firstName: string, lastNAme: string): string =>
  `${firstName} ${lastNAme}`;

console.log("imprimo fullname", getFullName("Tony", "Stark"));

console.log("************ Lesson 29. parámetros opcionales ************");

const getFullName2 = (firstName: string, lastNAme?: string): string =>
  `${firstName} ${lastNAme || "-----"}`;

console.log("imprimo fullname", getFullName2("Tony"));

console.log("************ Lesson 30. parámetros por defecto ************");

const getFullName3 = (
  firstName: string,
  lastNAme?: string,
  upper: boolean = true
): string => {
  return upper
    ? `${firstName} ${lastNAme || "-----"}`.toUpperCase()
    : `${firstName} ${lastNAme || "-----"}`;
};

console.log("imprimo fullname", getFullName3("Tony", "stark", true));

console.log("************ Lesson 31. parámetros rest ************");

const getFullName4 = (firstName: string, ...restArgs: string[]): string => {
  return `${firstName} ${restArgs.join(" ")}`;
};

console.log(
  "imprimo fullname",
  getFullName4("Clark", "Joseph", "Kent", "AKA", "Superman")
);


console.log("************ Lesson 32. type function ************");

const addNumbers = (num1: number, num2: number):number => num1+num2
const greet = (name: string): string => `Hola ${name}`
const saveTheWorld = ():string => `El mundo está salvado`

let myFunc;

myFunc= 10;
myFunc=addNumbers;
console.log(myFunc(1,2))
myFunc=greet;
console.log(myFunc('Javi'));
myFunc=saveTheWorld;
console.log(myFunc())

// define the function as function
let myFunc2: Function;

myFunc2=addNumbers;
console.log(myFunc2(1,2))
myFunc2=greet;
console.log(myFunc2('Javi'));
myFunc2=saveTheWorld;
console.log(myFunc2())

// define the function as a specific function
let myFunc3: (num1: number, num2: number) => number;

myFunc3=addNumbers;
console.log(myFunc3(1,2))

let myFunc4: (name: string) => string;
myFunc4=greet;
console.log(myFunc4('Javi'));

let myFunc5: () => string;
myFunc5=saveTheWorld;
console.log(myFunc5())

console.log("************ Lesson 33. Ejercicio 2 ************");
// Funciones Básicas

function sumar( a: number, b: number ): number{
    return a + b;
  }
  
  const contar = ( heroes: string[] ):number => {
    return heroes.length;
  }
  const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
  contar(superHeroes);
  
  //Parametros por defecto
  const llamarBatman = ( llamar:boolean = true ):(void) => {
    if( llamar ){
      console.log("Batiseñal activada");
    }
  }
  
  llamarBatman();
  
  // Rest?
  const unirheroes = ( ...personas:string[] ):string => {
    return personas.join(", ");
  }
  
  
  // Tipo funcion
  const noHaceNada = ( numero?:number, texto?:string, booleano?:boolean, arreglo?:[] ):void=> {}
  
  // Crear el tipo de funcion que acepte la funcion "noHaceNada"
  let noHaceNadaTampoco:()=>void;
  noHaceNadaTampoco = noHaceNada;
  