//AULA 45
//alert('Ceará');
//CAPTURAR EVENTO DE SUBMIT
const form = document.querySelector('#form');

//captura evento e chama função
form.addEventListener('submit', function(e){
    e.preventDefault();
    //console.log('Evento prevenido');
    //setResultado('Olá mundo');

    
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // se peso falso
    if(!peso){
        setResultado('peso invalido',false);
        return;
    }

    if(!altura){
        setResultado('altura invalida',false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    console.log(imc, nivelImc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);
});

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 
    'sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']; 
    if(imc >=39.9){return nivel[5];}
    if(imc >=34.9){ return nivel[4]; }
    if(imc >=29.9){return nivel[3];} 
    if(imc >= 24.9 ){return nivel[2];}
    if(imc >=18.5){return nivel[1];}
    if(imc <18.5){ return nivel[0];}
}

function getImc(peso, altura){
    const imc = peso/altura ** 2;
    return imc.toFixed(2);
}

function criaP(){
         //criando um paragrafo
    const p = document.createElement('p');
    //p.classList.add('paragrafo-resultado'); criando classe
    //p.innerHTML = "Qualquer coisa";
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    //resultado.innerHTML = `<p>${msg}</p>`;
    resultado.innerHTML = '';

    const p = criaP();
    p.innerHTML = msg;
   //insere um elemento da div

   if(isValid){p.classList.add('paragrafo-resultado')
    }else{p.classList.add('bad')    }
    resultado.appendChild(p);

}
