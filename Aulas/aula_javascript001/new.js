'use strict';

function Animal(){
    this.qtdepatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.__proto__ === Animal.prototype);
//true

console.log(Animal.__proto__ === Function.prototype);
//true