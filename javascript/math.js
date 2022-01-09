//let num1 = 9.54578;
//let num2 = Math.floor(num1); arredonda para cima
//let num2 = Math.ceil(num1); arredonda paraq baixo
//let num2 = Math.round(num1); arredonda <5 = para cima; >5 para baixo
//console.log(num2);
//console.log(Math.round(Math.random() * (10 - 5)));
//console.log(Math.pow(2,10));
//console.log(2 ** 10);

//const numero = prompt('Digite seu numero: '); retorna string
let numero = prompt('Digite seu numero: ');
numero = Number(numero);
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu numero + 2 é ${numero + 2}. </p>`;