const data = new Date(1990, 3, 02, 15,25);//02/04/1990 15:25
console.log(data,toString);

const tresHoras = 60 * 60 * 3 * 1000;// min * h *quanidadedeHoras * millissegundos
const umDia = 60 * 60 * 24 * 1000;
console.log(data,toString) + tresHoras + umDia;

//dataString = valor do tipo tring que representa uma data
const dataAtual= new Date('2022-02-06 22:16');

console.log('Dia', data.getDate(), ' ',dataAtual.getDate());
console.log('Mês', data.getMonth()+1,' ', dataAtual.getMonth());
console.log('Ano', data.getFullYear(), ' ',dataAtual.getFullYear());
console.log('Hora', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Dia semana', data.getDay());// 0 -domingo 6-sabado
