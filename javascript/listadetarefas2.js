const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = documnent.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

btnTarefa.addEventListener('click', function(e){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    limpaInput();
    criaBotaoApagar(li);
}

inputTarefa.addEventListener('keypress', function(){
    if(e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

function criaLi(){
    const li = document.createElement('li');
    return li;
}
function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    //botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'apagar esta tarefa');
    botaoApagar.innerText = 'Apagar';
    li.appendChild(botaoApagar);
}
function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

document.addEventListener('click',function(e){
    const el = e.target;

    if(el.classList.contais('apagar')){
        el.parentElement.remove();
    }
});