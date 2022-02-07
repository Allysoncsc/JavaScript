//exercício aula 48

showDate();



function getDia(diaSemana){
    let diaS;
    switch(diaSemana){
        case 0: diaS = 'domingo'; return diaS;
        case 1: diaS = 'segunda-feira'; return diaS;
        case 2: diaS = 'terça-feira'; return diaS;
        case 3: diaS = 'quarta-feira'; return diaS;
        case 4: diaS = 'quinta-feira'; return diaS;
        case 5: diaS = 'sexta-feira'; return diaS;
        case 6: diaS = 'sábado'; return diaS;
    }
}

function getMonth(mes){
    let month;
    switch(mes){
        case 0: month = 'janeiro'; return month;
        case 1: month = 'fevereiro'; return month;
        case 2: month = 'março'; return month;
        case 3: month = 'abril'; return month;
        case 4: month = 'maio'; return month;
        case 5: month = 'junho'; return month;
        case 6: month = 'julho'; return month;
    }
}

function showDate(){
    const date = new Date();
    //selecionar a tag h1 dentro da div exibir
    const exibir = document.querySelector('.exibir h1');
    
    let dia = getDia(date.getDay());
    let mes = getMonth(date.getMonth());
    let diaMes = date.getDate();
    let ano = date.getFullYear(); 

    exibir.innerHTML = ` ${dia}, ${diaMes} de ${mes} de ${ano}`;
}

/*
const exibir = document.querySelector('.exibir h1');
const date = new Date();
const opcoes = { 
    dateStyle: 'full',
    timeStyle: 'short'};
exibir.innerHtml = data.toLocaleDateString('pt-BR',opcoes);


function getDia(diaSemana){
    const diasSemana['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','domingo'];
    return diasSemana[diaSemana];
}
function getMes(month){
    const mes['janeiro','fevereiro','março','abril','maio','junho','julho'];
    return mes[month];
}

*/
