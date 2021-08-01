console.log(`\nExemplo da utilização de continue`);
const vetor1 = [1, 2, 3, 4, 5, 6];

for(let contador = 0; contador < vetor1.length; contador++){
    const element = vetor1[contador];

    if(element % 2 === 0){
        continue;
    }

    console.log(element);
}