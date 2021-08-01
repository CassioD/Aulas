const alunos = [
    {name: 'Grace', grade:7},
    {name: 'Jennifer', grade: 4},
    {name: 'Paul', grade: 10}
];


function AlunosAprovados(listadealunos){
    return listadealunos.filter(alunos => alunos.grade >= 7);
}

console.log('Alunos aprovados:');
console.log(AlunosAprovados(alunos));

console.log('\nLista de alunos:');
console.log(alunos);