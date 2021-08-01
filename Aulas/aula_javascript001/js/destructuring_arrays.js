/*
var arr = ['Apple', 'Banana', 'Orange'];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];

//Destructuring Assignment

var [apple2, banana2, orange2] = ['Apple', 'Banana', 'Orange'];

console.log(apple, apple2);
*/

var arr = [{ name: 'Apple', type: 'fruit' }];

var fruit1 = arr[0].name;

//Destructuring Assignment

var [{ name: nomeDaFruta }] = arr;

console.log(nomeDaFruta);