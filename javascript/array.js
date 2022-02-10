let alunos = ['Luiz', 'Maria', 'Allyson'];
console.log(alunos.slice(0, 3));
alunos [0] = 'Eduardo';//substitui a posição 0
alunos.push('Keliane');//adiciona no fim do array
alunos.unshift('Correia'); //adiciona no começo do array
console.log(alunos.slice(0, 3)); //mostra até a posição 2
console.log(alunos instanceof Array); // saber se alunos é um array

let a = 'A';
let b = 'B';
let c = 'C';
//atribuição por desestruturação de array
//const numeros = [1,2,3];
//[a,b,c] = numeros;
//troca a posição dos valores
[a,b,c] = [b,c,a];

const numeros = [1000, 2000, 3000, 4000, 5000];
//pega os valores ,, pula um valor do array
const [um,,tres,,cinco,,] = numeros;

//                0       1       2
//               0 1 2   0 1 2   0 1 2
const matriz = [[1,2,3],[4,5,6],[7,8,9] ];
//imprimir o numero 5
console.log(numero[1][1]);




