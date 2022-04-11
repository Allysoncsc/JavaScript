const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');


for (let p of ps){
    console.log(p);
}
//pega o estilo do body
const estilosBody = getComputedStyle(document.body); 
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
}
























// se a arrow function só tiver uma linha ñ precisa de return
function max(x,y){
    if(x>y) return x;
    return y;   
}
function maior(x,y){ return x>y ? x:y;}
const maxarrow = (x,y) => x > y ? x:y;
console.log(max(10,2));
console.log(maxarrow(10,20));

function fizzBuzz(n){
    if (typeof n !== 'number') return NaN;
    if (n % 3 === 0 && n % === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
    return n;
}

