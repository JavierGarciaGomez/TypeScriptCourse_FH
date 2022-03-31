console.log("************ Lesson 35. basic objects ************");

let flash = {
  name: "Barry Allen",
  age: 24,
  powers: ['súpervelocidad', 'viajar en el tiempo']
}

// typescript will ask me for the inferred properties
// flash = {
//   name2: 'Hola'
// }

console.log(flash)

console.log("************ Lesson 36. Cómo crear objetos específicos ************");
let flash2: {name: string, age?: number, powers: string[]} = {
  name: "Barry Allen",
  age: 24,
  powers: ['súpervelocidad', 'viajar en el tiempo']
}

flash2 = {
  name: "Barry Allen",
  powers: ['súpervelocidad', 'viajar en el tiempo']
}

console.log("************ Lesson 37. Métodos dentro de objetos ************");
let flash3: {name: string, age?: number, powers: string[], getName: ()=>string } = {
  name: "Barry Allen",
  age: 24,
  powers: ['súpervelocidad', 'viajar en el tiempo'],
  getName():string{return this.name},
}

console.log(flash3.getName());

console.log("************ Lesson 38. Problema con la definición en línea ************");

// ...

console.log("************ Lesson 39. Tipos personalizados ************");
type Hero = {
  name: string; 
  age?: number,
  powers: string[];
  getName?: () => string;
}

let flash4: Hero = {
  name: "Barry Allen",
  age: 24,
  powers: ['súpervelocidad', 'viajar en el tiempo'],
  getName():string{return this.name},
}

let superman: Hero = {
  name: "Clark Kent",
  powers: ['súpervelocidad', 'otras cosas'],  
}


console.log("************ Lesson 40. Múltiples tipos permitidos ************");

type Hero2 = {
  name: string; 
  age?: number,
  powers: string[];
  getName?: () => string;
}

let myCustomVariable: string |number | Hero ="UN HEROE";
console.log(myCustomVariable);


console.log("************ Lesson 41. Ejercicio ************");

type Carro = {
  carroceria: string,
  modelo: string,
  antibalas: boolean,
  pasajeros: number,
  disparar?: () => void,
}

// Objetos
const batimovil:Carro = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee:Carro = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};

type Villain= {nombre: string, edad?: number, mutante: boolean};

// Villanos debe de ser un arreglo de objetos personalizados
const villanos:Villain[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

type Charles = {poder: string, estatura: number}
// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
const charles:Charles = {
  poder:"psiquico",
  estatura: 1.78
};

type Apocalipsis={lider:boolean, miembros: string[]}
const apocalipsis:Apocalipsis = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique:Charles|Apocalipsis;

mystique = charles;
mystique = apocalipsis;
