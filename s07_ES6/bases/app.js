"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
console.log("************ Lesson 52. desustructuración de objetos ************");
const avengers = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Jr.",
    activo: true,
    poder: 1500
};
const { nick, ironman, poder } = avengers;
const printAvenger = (avengers) => {
    console.log(avengers.ironman);
};
const printAvenger2 = (_a) => {
    var { ironman } = _a, rest = __rest(_a, ["ironman"]);
    console.log(ironman);
    console.log(rest);
};
printAvenger(avengers);
printAvenger2(avengers);
console.log("************ Lesson 53. desustructuración de arreglos ************");
const avengersArr = ['Cap. Ameerica', 'Ironman', 'Hulk'];
const [, , hulk] = avengersArr;
console.log(hulk);
console.log("************ Lesson 54. for of ciclo ************");
const thor = { name: "Thor", weapon: "Mace" };
const blackWidow = { name: "Natasha", weapon: "Gun" };
const avengers2 = [thor, blackWidow];
for (const avenger of avengers2) {
    console.log('avenger:', avenger.name);
}
console.log("************ Lesson 55. Clases ************");
//# sourceMappingURL=app.js.map