import { getPokemon } from './generics/get-pokemon';
import { genericFunctionArrow } from './generics/generics';
import { Hero } from './interfaces';




getPokemon(4)
    .then( pokemon => console.log( pokemon ) )
    .catch( error => console.error( error ) )
    .finally( () => console.log('Fin de getPokemon')  )



const deadpool = {name: 'Deadpool', realName: 'Wade Winston', dangerLevel: 130};

console.log(genericFunctionArrow(deadpool).dangerLevel);
console.log(genericFunctionArrow<Hero> (deadpool).name);