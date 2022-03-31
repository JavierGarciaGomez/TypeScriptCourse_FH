console.log("************ Lesson 52. desustructuración de objetos ************");

type Avengers = {
    nick: string;
    ironman: string;
    activo: boolean;
    poder: number;
}

const avengers: Avengers= {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Jr.",
    activo: true,
    poder: 1500
}

const {nick, ironman, poder} = avengers;

const printAvenger = (avengers: Avengers)=>{
    console.log(avengers.ironman)
}

const printAvenger2 = ({ironman, ...rest}:Avengers)=>{
    console.log(ironman);
    console.log(rest)
}

printAvenger(avengers)
printAvenger2(avengers)

console.log("************ Lesson 53. desustructuración de arreglos ************");
const avengersArr: string[] = ['Cap. Ameerica', 'Ironman', 'Hulk'];
const [, , hulk ] = avengersArr;

console.log(hulk)

console.log("************ Lesson 54. for of ciclo ************");

type Avenger = {
    name: string, weapon: string
}

const thor: Avenger = {name: "Thor", weapon: "Mace"}
const blackWidow: Avenger = {name: "Natasha", weapon: "Gun"}


const avengers2: Avenger[] = [thor, blackWidow]

for ( const avenger of avengers2) {
    console.log('avenger:', avenger.name)
}

console.log("************ Lesson 55. Clases ************");
