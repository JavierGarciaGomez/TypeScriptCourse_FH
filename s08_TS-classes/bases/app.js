"use strict";
console.log("************ Lesson 58. Definición de una clase básica ************");
class Avenger {
    constructor(name, team) {
        this.name = name,
            this.team = team;
    }
}
Avenger.avgAge = 35;
const antman = new Avenger('Antman', 'avengeres');
console.log(antman.realName);
console.log(Avenger.avgAge);
console.log(antman);
console.log("************ Lesson 59. Forma corta de asignar propiedades ************");
class Avenger2 {
    constructor(name, team, realName) {
        this.name = name;
        this.team = team;
        this.realName = realName;
    }
    static getAvgAge() {
        return this.name;
    }
    getBio() {
        return `${this.name} (${this.team})!!!`;
    }
    getBio2() {
        return `${this.name} (${this.team})!!!`;
    }
}
Avenger2.avgAge = 35;
console.log("************ Lesson 60. Métodos públicos, privados y estáticos ************");
const antman2 = new Avenger2('Antman', 'Capitan', "Scott Lang");
console.log(antman2);
console.log(antman2.getBio());
// this is possible
console.log(antman2.getBio2());
console.log("************ Lesson 61. Herencia, super y extends ************");
class Avenger3 {
    constructor(name, realName) {
        this.name = name;
        this.realName = realName;
        console.log('Constructor avenger llamado');
    }
    getFullName() {
        return `${this.name} ${this.realName}`;
    }
}
class Xmen extends Avenger3 {
    constructor(power, name, realName) {
        super(name, realName);
        this.power = power;
        console.log('constructor xmen llamado');
    }
    getFullNameFromXmen() {
        return super.getFullName();
    }
}
const cyclops = new Xmen('eyeBeam', 'cyclops', 'real name');
console.log(cyclops.getFullNameFromXmen());
console.log("************ Lesson 62. Get set ************");
class Xmen2 extends Avenger3 {
    constructor(power, name, realName) {
        super(name, realName);
        this.power = power;
        console.log('62. constructor ave 3 llamado');
    }
    getFullName() { return this.name + this.realName; }
    setName(name) { this.name = name; }
}
const wolverine = new Xmen2('claws', 'wolverine', 'logan');
console.log(wolverine.getFullName());
wolverine.setName('Nuevo nombre');
console.log(wolverine.getFullName());
console.log("************ Lesson 63. Clases abstractas ************");
class Mutante {
    constructor(name, realName) {
        this.name = name;
        this.realName = realName;
    }
}
class Xmen3 extends Mutante {
    salvarMundo() {
        return 'Mundo a salvo!';
    }
}
class Villian extends Mutante {
    conquistarMundo() {
        return 'Mundo conquistado';
    }
}
const wolverine2 = new Xmen3('Wolverine', 'Logan');
const magneto = new Villian('Magneto', 'Magnus');
console.log(wolverine2.salvarMundo());
console.log(magneto.conquistarMundo());
const printName = (character) => {
    console.log(character.realName);
};
printName(magneto);
console.log("************ Lesson 64. Constructores privadas ************");
class Apocalipsis {
    constructor(name) {
        this.name = name;
    }
    static callApocalipsis() {
        if (!Apocalipsis.intance) {
            Apocalipsis.intance = new Apocalipsis('Soy apocalipsis el único');
        }
        return Apocalipsis.intance;
    }
    changeName(newName) {
        this.name = newName;
    }
}
const apocalipsis1 = Apocalipsis.callApocalipsis();
const apocalipsis2 = Apocalipsis.callApocalipsis();
const apocalipsis3 = Apocalipsis.callApocalipsis();
console.log(apocalipsis1, apocalipsis2, apocalipsis3);
apocalipsis1.changeName('Xavier');
// const apocalipsis1 = new Apocalipsis('Soy Apocalipsis1... el único')
// const apocalipsis2 = new Apocalipsis('Soy Apocalipsis2... el único')
// const apocalipsis3 = new Apocalipsis('Soy Apocalipsis3... el único')
console.log(apocalipsis1, apocalipsis2, apocalipsis3);
//# sourceMappingURL=app.js.map