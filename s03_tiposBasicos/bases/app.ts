console.log('************ Lesson 13. inferir tipos ************');

const num:number = 10;
let num2:number = 20;

let text: string;

const sayHello = (msg: string) => console.log(msg);

sayHello('Hola, amigos míos')

console.log('************ Lesson 14. booleans ************');

let isSuperman= true;

console.log('************ Lesson 15. números ************');

let avengers: number = 10;
console.log(avengers)
const enemies: number = 20;

if(avengers<enemies ) {
    console.log('Estamos en problemas')
} else{
    console.log('Nos salvamos')
}

console.log('************ Lesson 16. strings ************');
const bat:string = 'Batman';
const linternaVerde:string = "Linterna´s verde"
const volcanNegro:string = `volcan`

console.log(`I'm ${bat}`);
console.log(bat.toUpperCase())
console.log(bat[10]?.toUpperCase() || 'No está presente');


console.log('************ Lesson 17. any ************');


let anAvenger: any = '123';
const itExists: any = false;
let power: any;

// no help
anAvenger.charAt(0);

// is better to define
let anAvenger2: string = '123';
const itExists2: boolean = false;
let power2: string;

anAvenger2.charAt(0);


console.log('************ Lesson 18. arrays ************');

const numbers = [1,2,3,4, '5', 6,  7];
// inferes that is or num or str

// numbers.push(true)

const newNumbers: (string | number) [] = [1,2,3,4, '5', 6,  7];

console.log('************ Lesson 19. tuplas ************');

const hero19:[string, number] = ['DrStrange', 100];
console.log(hero19)

console.log('************ Lesson 20. enum ************');
enum AudioLevel {min=1, medium, max=10}

const currentAudio = AudioLevel.medium
console.log({AudioLevel, currentAudio});

console.log('************ Lesson 21. void ************');

const callBatman = ():void => { console.log('im not returning nothing. Im void')}

const a = callBatman();
console.log('a function print', a)

console.log('************ Lesson 22. never ************');

const error = (message: string):never => {
    throw new Error(message)
}

error('es un error');


console.log('************ Lesson 23. null y undefined ************');

let nada: undefined = undefined;
console.log(nada)


console.log('************ Lesson 24. ejercicio #1 ************');

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string,string] = [batman,superman];
    const villano:[string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum fuerza {
        acuaman = 0,
        batman = 1,
        flash = 5,
        superman = 100
    }
    const fuerzaFlash:fuerza = fuerza.flash;
    const fuerzaSuperman:fuerza = fuerza.superman;
    const fuerzaBatman:fuerza = fuerza.batman;
    const fuerzaAcuaman:fuerza = fuerza.acuaman;
  
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  