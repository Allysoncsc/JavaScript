const pessoa = {
    nome: 'Allyson',
    sobrenome: 'Correia',
    idade: 30,
    endereco: {
        rua: '8',
        numero: 70
    }
};


console.log(pessoa.nome);

//atribuiçao via desestruturação 
// pega o campo com o mesmo nome no array
const {nome, sobrenome: midleName,idade} = pessoa;
console.log(nome, midleName);

const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero)












