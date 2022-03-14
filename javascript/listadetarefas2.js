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

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

