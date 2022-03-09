/*
let idade = 16;


function maioridade(idade){
    if(idade >= 18){
        console.log('Você é de maior')
    }else{
        console.log('Menor de idade')
    }
}

maioridade(idade)

for(let i =0; idade <20;i++ ){
    idade++
}


maioridade(idade)*/


nome = 'allyson correia da silva';
conta = 0;
for(let i in nome){
    if(nome[i] === 'a'){
        conta += 1;
    }
}

console.log(`o numero de a's é ${conta}`);

console.log(nome.charAt(3));