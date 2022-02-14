/*const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgrousColorBody = estilosBody.backgroundColor;
console.log(backgrousColorBody);

for (let p  of ps) {
    p.style.backgroundColor = backgrousColorBody;
    p.style.color = '#FFFFFF';
}
*/

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = random(min, max);

while ( rand !== 10 ){
    rand = random(min,max);
    console.log(rand);
}

function maior(x,y){
    //if(x>y){return true;}
    //return false; 

    return x>y ? x : y;
}

// arrowfunction que retorna o maior de 2 numeros
const max = (x,y) => { return x>y ? x : y;}
const epaisagem = (largura, altura) => { largura >= altura}