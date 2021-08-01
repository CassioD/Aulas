/*
const frutas = ['melancia','banana'];
frutas.push('laranja'); // adiciona uma fruta no final do array //shift(coloca em primeiro)
console.log(frutas); //vai exibir todas as frutas
*/

/*
const frutas = ['melancia','banana','laranja'];
frutas.pop(); //tira o último item do array //unshift(tira o primeiro)
console.log(frutas); // mostra o array sem o último item
*/
/*
const frutas = ['melancia','banana','laranja'];
const salgados = ['coxinha','kibe','empada'];
const alimentos = frutas.concat(salgados);

console.log(frutas);
console.log(salgados);
console.log(alimentos);
*/

/*
const frutas = ['melancia','banana','laranja'];
frutas.forEach((fruta, index, arr) => console.log(index, fruta, arr));
*/
/*
const arr = [1, 2, 3, 4, 5];
arr.map(value => value * 2);
console.log(arr);
// [2, 4, 6, 8, 10]
*/
const arr = [1, 3, 2, 4, 5];
const primeiroMaiorQueDois = arr.find(value => value > 2); //3
const primeiroIndexMaiorQueDois = arr.findIndex(value => value > 2); //2
const todosMaioresQueDois = arr.filter(value => value > 2); // 3, 4 e 5
arr.sort(); //1, 2, 3, 4, 5 Ordena o array segundo alguma condição
arr.reverse(); //5, 4, 3, 2, 1  Reverte a ordem do array
arr.join('-'); //"1-2-3-4-5"

console.log(primeiroMaiorQueDois);
console.log(primeiroIndexMaiorQueDois);
console.log(todosMaioresQueDois);