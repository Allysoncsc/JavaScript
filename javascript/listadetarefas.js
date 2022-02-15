const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

btnTarefa.addEventListener('click', function () {
    //se não tiver nenhum valor não adiciona
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})


function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}


function criaLi() {
    const li = document.createElement('li');
    return li;
}

function limpaInput() {
    inputTarefa.value = '';
    //volta para o input
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += '  ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    //botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title','Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

document.addEventListener('click', function(e){
    const el = e.target;
    //verifica se o botao que contém a classe apagar foi clicado
    if(el.classList.contains('apagar')){
        //remove a classe mãe do elemento
        el.parentElement.remove();
        salvarTarefas();
    }
});


function salvarTarefas(){
    //seleciona todas as li da classe atrefas
    const liTarefas = tarefas.querySelectorAll('li');
    const listDeTarefas = [];

    for(let tarefa of liTarefas){
        //capturando o texto e tirando o apagar e dando um push no array
        let tarefaTexto = tarefa.innerText;
        console.log(tarefaTexto);
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        console.log(tarefaTexto);
        listDeTarefas.push(tarefaTexto);
    }
    //transformando o array em string json
    const tarefasJson = JSON.stringify(listDeTarefas);
    //salvando no navegador
    localStorage.setItem('tarefas',tarefasJson);
}

//carregar as tarefas do localstorage
function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    //converte para array
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }

}
adicionaTarefasSalvas()


