"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo a salvo!';
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return 'Mundo conquistado';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    // console.log(wolverine.salvarMundo());
    // console.log(magneto.conquistarMundo());
    const printName = (character) => {
        console.log(character.realName);
    };
    // printName( magneto );
})();
//# sourceMappingURL=abstract.js.map