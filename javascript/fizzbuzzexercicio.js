//escreva uma funçaõ que receba um numero
//retorne o seguinte:
//Número é divisível por 3 = Fizz
//Número é divisível por 5 = Buzz
//Número é divisível por 3  e = FizzBuzz
//Número não é divisível por 3 ou 5 = retorna número
//checar se o valor recebido é um número

function fizzBuzz(numero){
    if (typeof numero !== 'number'){return numero;}
    if(numero % 3 === 0 && numero % 5 ===0){return 'FizzBuzz'}
    if(numero % 3 === 0 ){return 'Fizz'}
    if(numero % 5 ===0){return 'Buzz'}
    return numero;
}

for(let i = 0; i<=100;i++){
    console.log(i, fizzBuzz(i))
}