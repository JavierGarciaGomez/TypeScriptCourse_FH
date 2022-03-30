"use strict";
var _a;
console.log('************ Lesson 13. inferir tipos ************');
const num = 10;
let num2 = 20;
let text;
const sayHello = (msg) => console.log(msg);
sayHello('Hola, amigos míos');
console.log('************ Lesson 14. booleans ************');
let isSuperman = true;
console.log('************ Lesson 15. números ************');
let avengers = 10;
console.log(avengers);
const enemies = 20;
if (avengers < enemies) {
    console.log('Estamos en problemas');
}
else {
    console.log('Nos salvamos');
}
console.log('************ Lesson 16. strings ************');
const bat = 'Batman';
const linternaVerde = "Linterna´s verde";
const volcanNegro = `volcan`;
console.log(`I'm ${bat}`);
console.log(bat.toUpperCase());
console.log(((_a = bat[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
console.log('************ Lesson 17. any ************');
let anAvenger = '123';
const itExists = false;
let power;
// no help
anAvenger.charAt(0);
// is better to define
let anAvenger2 = '123';
const itExists2 = false;
let power2;
anAvenger2.charAt(0);
console.log('************ Lesson 18. arrays ************');
const numbers = [1, 2, 3, 4, '5', 6, 7];
// inferes that is or num or str
// numbers.push(true)
const newNumbers = [1, 2, 3, 4, '5', 6, 7];
console.log('************ Lesson 19. tuplas ************');
const hero19 = ['DrStrange', 100];
console.log(hero19);
console.log('************ Lesson 20. enum ************');
var AudioLevel;
(function (AudioLevel) {
    AudioLevel[AudioLevel["min"] = 1] = "min";
    AudioLevel[AudioLevel["medium"] = 2] = "medium";
    AudioLevel[AudioLevel["max"] = 10] = "max";
})(AudioLevel || (AudioLevel = {}));
const currentAudio = AudioLevel.medium;
console.log({ AudioLevel, currentAudio });
console.log('************ Lesson 21. void ************');
const callBatman = () => { console.log('im not returning nothing. Im void'); };
const a = callBatman();
console.log('a function print', a);
console.log('************ Lesson 22. never ************');
const error = (message) => {
    throw new Error(message);
};
error('es un error');
console.log('************ Lesson 23. null y undefined ************');
let nada = undefined;
console.log(nada);
console.log('************ Lesson 24. ejercicio #1 ************');
// Tipos
const batman = 'Bruce';
const superman = 'Clark';
const existe = false;
// Tuplas
const parejaHeroes = [batman, superman];
const villano = ['Lex Lutor', 5, true];
// Arreglos
const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
//Enumeraciones
var fuerza;
(function (fuerza) {
    fuerza[fuerza["acuaman"] = 0] = "acuaman";
    fuerza[fuerza["batman"] = 1] = "batman";
    fuerza[fuerza["flash"] = 5] = "flash";
    fuerza[fuerza["superman"] = 100] = "superman";
})(fuerza || (fuerza = {}));
const fuerzaFlash = fuerza.flash;
const fuerzaSuperman = fuerza.superman;
const fuerzaBatman = fuerza.batman;
const fuerzaAcuaman = fuerza.acuaman;
// Retorno de funciones
function activar_batiseñal() {
    return 'activada';
}
function pedir_ayuda() {
    console.log('Auxilio!!!');
}
// Aserciones de Tipo
const poder = '100';
const largoDelPoder = poder.length;
console.log(largoDelPoder);
