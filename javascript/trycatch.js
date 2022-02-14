//aula 63 e 64
/*
try {
    console.log(naoExiste);
} catch (erro) {
    console.log('Variável não existe');
    console.log(erro);
}

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        // lança erro, string e referencia 
        throw new ReferenceError('x e y precisam ser números.');
    }
    return x + y;
}

try{
    console.log(soma(1,2));
    console.log(soma('1',2));
}catch(erro){
    console.log(erro);
}

try{
    console.log('Abri um arquivo');
    console.log('manipulando o arquivo e gerou erro');
    console.log('fechei o arquivo arquivo');
}catch(erro){
    console.log('tratando erro');
}finally{
    console.log('Finally sempre será executado');
    console.log('Fechar o arquivo arquivo');
}
*/
function retornaHora(data){
    //se a data for enviada e não for uma instância de date
    if (data && !(data instanceof Date)){
        console.log('Não é date');
        throw new TypeError('Esperando instância de Date');
    }
    //se a data não for enviada gera uma data
    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{
        hour:'2-digit',
        minute: '2-digit',
        second:'2-digit',
        hour12:false});
}

const hora = retornaHora();
console.log(hora);