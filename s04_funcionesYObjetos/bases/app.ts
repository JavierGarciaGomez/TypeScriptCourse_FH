console.log('************ Lesson 27. funciones básicas ************');

const hero: string = "Flash";

const returnName=():string => hero;

console.log(returnName())

const activateBatSignal = (): string => 'Batiseñal activada'

console.log(typeof activateBatSignal);

const heroName = returnName()
console.log('el hero name', heroName)


console.log('************ Lesson 28. parámetros obligatorios ************');

const getFullName = (firstName:string, lastNAme:string):string => `${firstName} ${lastNAme}`

console.log('imprimo fullname', getFullName('Tony', 'Stark'))


console.log('************ Lesson 29. parámetros opcionales ************');

const getFullName2 = (firstName:string, lastNAme?:string):string => `${firstName} ${lastNAme || '-----'}`

console.log('imprimo fullname', getFullName2('Tony'))