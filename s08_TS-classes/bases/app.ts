console.log("************ Lesson 58. Definición de una clase básica ************");

class Avenger {
    private name: string;
    private team: string;
    public realName?: string;
    static avgAge: number = 35;
    constructor( 
        name: string, 
        team: string,         
    ) {
        this.name=name,
        this.team=team;
    }

}
const antman: Avenger = new Avenger('Antman', 'avengeres');
console.log( antman.realName )

console.log(Avenger.avgAge);
console.log(antman)

console.log("************ Lesson 59. Forma corta de asignar propiedades ************");

class Avenger2 {
    static avgAge: number = 35;
    static getAvgAge() {
        return this.name;
    }

    constructor( 
        private name: string, 
        private team: string, 
        public realName?: string,
    ) {}

    public getBio() {
        return `${ this.name } (${ this.team })!!!`
    }

    private getBio2() {
        return `${ this.name } (${ this.team })!!!`
    }
}


console.log("************ Lesson 60. Métodos públicos, privados y estáticos ************");

const antman2: Avenger2 = new Avenger2('Antman', 'Capitan', "Scott Lang");
console.log(antman2)
console.log(antman2.getBio())
// this is possible
console.log(antman2.getBio2())


console.log("************ Lesson 61. Herencia, super y extends ************");
class Avenger3{
    constructor(public name: string, public realName: string){
        console.log('Constructor avenger llamado')
    }

    protected getFullName() {
        return `${this.name} ${this.realName}`
    }
}

class Xmen extends Avenger3{
    constructor(public power: string, name: string, realName: string){
        super(name, realName)
        console.log('constructor xmen llamado')
    }
    public getFullNameFromXmen(){
        return super.getFullName()
    }
}

const cyclops: Xmen=new Xmen('eyeBeam', 'cyclops', 'real name');
console.log(cyclops.getFullNameFromXmen());


console.log("************ Lesson 62. Get set ************");

class Xmen2 extends Avenger3{
    constructor(public power: string, name: string, realName: string){
        super(name, realName);
        console.log('62. constructor ave 3 llamado')
    }

    public getFullName()  {return this.name+this.realName}
    public setName(name:string) {this.name=name}
}

const wolverine:Xmen2 = new Xmen2('claws','wolverine', 'logan');
console.log(wolverine.getFullName())
wolverine.setName('Nuevo nombre')
console.log(wolverine.getFullName())

console.log("************ Lesson 63. Clases abstractas ************");
abstract class Mutante {
    constructor(
        public name: string,
        public realName: string
    ){}
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


const wolverine2 = new Xmen3('Wolverine','Logan');
const magneto = new Villian('Magneto','Magnus');

console.log(wolverine2.salvarMundo());
console.log(magneto.conquistarMundo());
const printName = ( character: Mutante ) => {
    console.log( character.realName );
}

printName( magneto );

console.log("************ Lesson 64. Constructores privadas ************");

class Apocalipsis {

    static intance:Apocalipsis;

    private constructor( public name: string ) {}

    static callApocalipsis(): Apocalipsis {
        if ( !Apocalipsis.intance ) {
            Apocalipsis.intance = new Apocalipsis('Soy apocalipsis el único');
        }

        return Apocalipsis.intance;
    }

    changeName( newName: string ):void {
        this.name = newName;
    }

}


const apocalipsis1 = Apocalipsis.callApocalipsis()
const apocalipsis2 = Apocalipsis.callApocalipsis()
const apocalipsis3 = Apocalipsis.callApocalipsis()

console.log(apocalipsis1, apocalipsis2, apocalipsis3);

apocalipsis1.changeName('Xavier');

// const apocalipsis1 = new Apocalipsis('Soy Apocalipsis1... el único')
// const apocalipsis2 = new Apocalipsis('Soy Apocalipsis2... el único')
// const apocalipsis3 = new Apocalipsis('Soy Apocalipsis3... el único')

console.log(apocalipsis1, apocalipsis2, apocalipsis3);