alert('Eu sou Ceará');

//aula 54 min 

const elementos = [
    {tag: 'p', texto:'texto 1 paragrafo'},
    {tag: 'div', texto:'texto 2 div'},
    {tag: 'section', texto:'texto 3 section'},
    {tag: 'footer', texto:'texto 4 footer'}
];

//funciona no nodejs
console.log(elementos);

const container = document.querySelector('.container');

// criar uma div para adicionar os outros elementos
const div = document.createElement('div');

for(let i = 0; i< elementos.length; i++){
    //console.log(elementos[i]);
    //associação pordesestruturação
    let {tag, texto} = elementos[i];
    //criando a tag e colocando o textp
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    
    div.appendChild(tagCriada);

    //como não tem tag só texto pode ser usado innerText
    //tagCriada.innerText = texto;
    //colcoando a tag dentro da div

    //let textoCriado = document.createTextNode(texto).
    //tagCriada.appendChild(textoCriado);
    //div.appendChild(tagCriada);

}

container.appendChild(div);


