let vetor1 = [3, 5, 7];
vetor1.foo = `Hello`;

for (let i in vetor1) {
    console.log(i);
}

for (let i of vetor1){
    console.log(i);
}