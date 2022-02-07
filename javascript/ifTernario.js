const pontuacao = 1000;
const nivelUsuario = pontuacao >= 1000 ? 'usuário VIP' : 'Usuário normal';


// se croselecionada = null corpadrao = preta 
const corSelecionada = null;
const corPadrao = corSelecionada || 'preta';

console.log(nivelUsuario, corPadrao);