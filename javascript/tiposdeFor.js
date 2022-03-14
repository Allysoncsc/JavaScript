
// aula 55 for in vem o indece e of vem o valor
const frutas = ['pera','maçã','uva'];

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

for (let i in frutas) {
    console.log(frutas[i]); 
    
}

const pessoa = {
    nome: 'Allyson',
    sobrenome: 'Correia',
    idade: 31
};

for (const key in pessoa) {
    console.log(key, pessoa[key]);
}


// aula 56 for of percorre o valor de um array
for (const valor of frutas) {
    console.log(valor);
}