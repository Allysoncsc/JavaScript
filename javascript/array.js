let alunos = ['Luiz', 'Maria', 'Allyson'];

alunos [0] = 'Eduardo';
alunos.push('Keliane');//adiciona no fim do array
alunos.unshift('Correia'); //adiciona no começo do array
console.log(alunos.slice(0, 3)); //mostra até a posição 2
console.log(alunos instanceof Array); // saber se alunos é um array