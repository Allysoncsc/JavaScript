
fetch('../json/pessoas.json')
  .then(resposta => resposta.json())
//.then(json => console.log(json));
.then(json => carregaElementosnaPagina(json));

// axios('../json/pessoas.json')
// .then(resposta => carregaElementosnaPagina(resposta.data))

function carregaElementosnaPagina(json){
    const table = document.createElement('table');
    for (let pessoa of json){
        //console.log(pessoa.nome);
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        table.appendChild(tr);

    }
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}