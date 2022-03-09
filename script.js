const menu = document.querySelectorAll('.item-menu');
const horas = document.querySelectorAll('.hora');
const menuDia = document.querySelector('.menu-dia');
const menuSemana = document.querySelector('.menu-semana');
const menuMes = document.querySelector('.menu-mes');

menuDia.onclick = function () {
    for (let i=0; i < menu.length; i++){
        menu[i].classList.remove('botao-ativo');
    }
    menuDia.classList.add('botao-ativo');

    for (let i=0; i < horas.length; i++) {
        horas[i].classList.add('oculto');
    }
    const horasPrincipais = document.querySelectorAll('.hora-principal-dia');
    const ultimasHoras = document.querySelectorAll('.hora-ultimo-dia');
    for (let i=0; i < horasPrincipais.length; i++) {
        horasPrincipais[i].classList.remove('oculto');
        ultimasHoras[i].classList.remove('oculto');
    }
}




menuSemana.onclick = function () {
    for (let i=0; i < menu.length; i++){
        menu[i].classList.remove('botao-ativo');
    }
    menuSemana.classList.add('botao-ativo');

    for (let i=0; i < horas.length; i++) {
        horas[i].classList.add('oculto');
    }

    const horasPrincipais = document.querySelectorAll('.hora-principal-semana');
    const ultimasHoras = document.querySelectorAll('.hora-ultima-semana');
    for (let i=0; i < horasPrincipais.length; i++) {
        horasPrincipais[i].classList.remove('oculto');
        ultimasHoras[i].classList.remove('oculto');
    }
}




menuMes.onclick = function () {
    for (let i=0; i < menu.length; i++){
        menu[i].classList.remove('botao-ativo');
    }
    menuMes.classList.add('botao-ativo');

    for (let i=0; i < horas.length; i++) {
        horas[i].classList.add('oculto');
    }
    const horasPrincipais = document.querySelectorAll('.hora-principal-mes');
    const ultimasHoras = document.querySelectorAll('.hora-ultimo-mes');
    for (let i=0; i < horasPrincipais.length; i++) {
        horasPrincipais[i].classList.remove('oculto');
        ultimasHoras[i].classList.remove('oculto');
    }
}

class RastreamentoDeTempo {
    dia;
    semana;
    mes;
    ultimoDia;
    ultimaSemana;
    ultimoMes;
    constructor(dia, semana, mes, ultimoDia, ultimaSemana, ultimoMes){
    this.dia = dia;
    this.semana = semana;
    this.mes = mes;
    this.ultimoDia = ultimoDia;
    this.ultimaSemana = ultimaSemana;
    this.ultimoMes = ultimoMes
    }
}

class IntervalosDeTempo {
    work;
    play;
    study;
    exercise;
    social;
    selfCare;
    constructor(wo,pl,st,ex,so,se){
    this.work = wo;
    this.play = pl;
    this.study = st;
    this.exercise = ex;
    this.social = so;
    this.selfCare = se
    }

    addTimeDia(valor){
        
    }
   
}

//const data = new Date()
const data = new Date()



// let diasDoMes = localStorage.getItem('diasDoMes')
// let listaDiaDoMes = []
// if(!diasDoMes){
//     listaDiaDoMes = []
// } else {
//     listaDiaDoMes = diasDoMes.split(',', 1)
//     listaDiaDoMes[0] = parseInt(listaDiaDoMes[0], 10);
// }
// listaDiaDoMes.unshift(data.getDate())  // ESSA LISTA CONTEM O DIA DO MES ATUAL E O DIA DO MES DO ULTIMO ACESSO
// localStorage.setItem('diasDoMes', listaDiaDoMes.toString());


let oneJan = new Date(data.getFullYear(),0,1); //aqui retorna o dia 01 - janeiro(0) - ano, no milisegundo 0
let numeroDeDiasDoAno = Math.ceil((data - oneJan) / (24 * 60 * 60 * 1000)) // dta - oneJan retorna quantos milisegundos de 1 de janeiro ate dia atual, dividindo por 24(horas do dia), 60(minutos da hora), 60(segundos do minuto), 1000(milisegundos do segundo) obtemos a quantidade em dias
let primeiroDomingo;
let semanaDoAno;
let listaSemanas = []
let listaDiasDoAno = []
let semanas = localStorage.getItem('semanas')
let dias = localStorage.getItem('dias')
if(!semanas){
    listaSemanas = []
} else {
    listaSemanas = semanas.split(',', 1);
    listaSemanas[0] = parseInt(listaSemanas[0], 10);
    listaDiasDoAno = dias.split(',', 1);
    listaDiasDoAno[0] = parseInt(listaDiasDoAno[0], 10);
}
if(oneJan.getDay() == 0){
    primeiroDomingo = 1
    semanaDoAno = Math.ceil(numeroDeDiasDoAno / 7)
} else {
    primeiroDomingo = (7 - (oneJan.getDay() % 7)) + 1
    semanaDoAno = Math.ceil((numeroDeDiasDoAno - primeiroDomingo + 1) / 7) + 1
}
listaSemanas.unshift(semanaDoAno) // ESSA LISTA CONTEM A SEMANA ATUAL E A SEMANA DO ULTIMO ACESSO
localStorage.setItem('semanas', listaSemanas.toString());
listaDiasDoAno.unshift(numeroDeDiasDoAno) // ESSA LISTA CONTEM O DIA DO ANO ATUAL E O DIA DO ANO DO ULTIMO ACESSO
localStorage.setItem('dias', listaDiasDoAno.toString())


let meses = localStorage.getItem('meses');
let mesAtual = data.getMonth()
let listaMeses = []
if(!meses){
    listaMeses = []
} else {
    listaMeses = meses.split(',',1);
    listaMeses[0] = parseInt(listaMeses[0], 10)
}
listaMeses.unshift(mesAtual) // ESSA LISTA CONTEM O MES ATUAL E O MES DO ULTIMO ACESSO
localStorage.setItem('meses', listaMeses.toString())


console.log(listaDiasDoAno);
console.log(listaSemanas);
console.log(listaMeses);

const lista = ['work', 'play', 'study', 'exercise', 'social', 'selfCare']
const horasDia = document.querySelectorAll('.hora-principal-dia');
const horasSemana = document.querySelectorAll('.hora-principal-semana');
const horasMes = document.querySelectorAll('.hora-principal-mes');
const ultimoDia = document.querySelectorAll('.hora-ultimo-dia');
const ultimaSemana = document.querySelectorAll('.hora-ultima-semana');
const ultimoMes = document.querySelectorAll('.hora-ultimo-mes');



let horariosSalvos = JSON.parse(localStorage.getItem('horariosSalvos'))
let daily;
let weekly;
let monthly;
let lastDay;
let lastWeekly;
let lastMonthly;

function mudarDia(resposta) {
    let modo = resposta
    if(modo == 'consecutivo'){
        lastDay = horariosSalvos.ultimoDia;
        for(let i = 0; i < 6; i++){
            lastDay[lista[i]] = horariosSalvos.dia[lista[i]];
        }
    } else if(modo == 'naoconsecutivo'){
        lastDay = horariosSalvos.ultimoDia;
        for(let i = 0; i < 6; i++){
            lastDay[lista[i]] = 0;
        }
    }
    localStorage.setItem('horariosSalvos', JSON.stringify(horariosSalvos))
    
    for(let i = 0; i < 6; i++){
        horariosSalvos.dia[lista[i]] = 0
    }
    localStorage.setItem('horariosSalvos', JSON.stringify(horariosSalvos))
    
    horariosSalvos = JSON.parse(localStorage.getItem('horariosSalvos'))
    daily = horariosSalvos.dia;
    weekly = horariosSalvos.semana;
    monthly = horariosSalvos.mes;
    lastWeekly = horariosSalvos.ultimaSemana;
    lastMonthly = horariosSalvos.ultimoMes;
}
function mudarSemana(resposta) {
    let modo = resposta
    if(modo == 'consecutivo'){
        lastWeekly = horariosSalvos.ultimaSemana;
        for(let i = 0; i < 6; i++){
            lastWeekly[lista[i]] = horariosSalvos.semana[lista[i]];
        }
    } else if(modo == 'naoconsecutivo'){
        lastWeekly = horariosSalvos.ultimaSemana;
        for(let i = 0; i < 6; i++){
            lastWeekly[lista[i]] = 0;
        }
    }    
    localStorage.setItem('horariosSalvos', JSON.stringify(horariosSalvos));
    
    for(let i = 0; i < 6; i++){
        horariosSalvos.semana[lista[i]] = 0
    }
    localStorage.setItem('horariosSalvos', JSON.stringify(horariosSalvos))
    
    horariosSalvos = JSON.parse(localStorage.getItem('horariosSalvos'))
    daily = horariosSalvos.dia;
    weekly = horariosSalvos.semana;
    monthly = horariosSalvos.mes;
    lastDay = horariosSalvos.ultimoDia;
    lastMonthly = horariosSalvos.ultimoMes;
}
function mudarMes(resposta){
    let modo = resposta
    if(modo == 'consecutivo'){
        lastMonthly = horariosSalvos.ultimoMes;
        for(let i = 0; i < 6; i++){
            lastMonthly[lista[i]] = horariosSalvos.mes[lista[i]];
        }
    } else if(modo == 'naoconsecutivo'){
        lastMonthly = horariosSalvos.ultimoMes;
        for(let i = 0; i < 6; i++){
            lastMonthly[lista[i]] = 0;
        }
    }    
    localStorage.setItem('horariosSalvos', JSON.stringify(horariosSalvos));
    
    for(let i = 0; i < 6; i++){
        horariosSalvos.mes[lista[i]] = 0
    }
    localStorage.setItem('horariosSalvos', JSON.stringify(horariosSalvos))
    
    horariosSalvos = JSON.parse(localStorage.getItem('horariosSalvos'))
    daily = horariosSalvos.dia;
    weekly = horariosSalvos.semana;
    monthly = horariosSalvos.mes;
    lastDay = horariosSalvos.ultimoDia;
    lastWeekly = horariosSalvos.ultimaSemana;
}




if(!horariosSalvos){
    daily = new IntervalosDeTempo(0, 0, 0, 0, 0, 0);
    weekly = new IntervalosDeTempo(0, 0, 0, 0, 0, 0);
    monthly = new IntervalosDeTempo(0, 0, 0, 0, 0, 0);
    lastDay = new IntervalosDeTempo(0, 0, 0, 0, 0, 0);
    lastWeekly = new IntervalosDeTempo(0, 0, 0, 0, 0, 0);
    lastMonthly = new IntervalosDeTempo(0, 0, 0, 0, 0, 0);
    horariosSalvos = new RastreamentoDeTempo(daily, weekly, monthly, lastDay, lastWeekly, lastMonthly)
} 
// else {
//     daily = horariosSalvos.dia;
//     weekly = horariosSalvos.semana;
//     monthly = horariosSalvos.mes;
//     lastDay = horariosSalvos.ultimoDia;
//     lastWeekly = horariosSalvos.ultimaSemana;
//     lastMonthly = horariosSalvos.ultimoMes;
// }


if(dias && listaDiasDoAno[0] == listaDiasDoAno[1]){
    daily = horariosSalvos.dia;
    weekly = horariosSalvos.semana;
    monthly = horariosSalvos.mes;
    lastDay = horariosSalvos.ultimoDia;
    lastWeekly = horariosSalvos.ultimaSemana;
    lastMonthly = horariosSalvos.ultimoMes;
} else if(dias && listaDiasDoAno[0] != listaDiasDoAno[1] && listaSemanas[0] == listaSemanas[1] && listaMeses[0] == listaMeses[1]){
    if(listaDiasDoAno[0] == listaDiasDoAno[1] + 1){
        mudarDia('consecutivo')
    } else {
        mudarDia('naoconsecutivo')

    }
} else if(dias && listaSemanas[0] != listaSemanas[1]){
    if(listaMeses[0] == listaMeses[1]){
        if(listaDiasDoAno[0] == listaDiasDoAno[1] + 1){
        mudarDia('consetivo')
        mudarSemana('consecutivo')
        } else if(listaSemanas[0] == listaSemanas[1] + 1) {
        mudarDia('naoconsecutivo')
        mudarSemana('consecutivo')
        } else {
        mudarDia('naoconsecutivo')
        mudarSemana('naoconsecutivo')
        }   
    } else {
        if(listaDiasDoAno[0] == listaDiasDoAno[1] + 1){
            mudarDia('consetivo')
            mudarSemana('consecutivo')
            mudarMes('consecutivo')
        } else if(listaSemanas[0] == listaSemanas[1] + 1) {
            mudarDia('naoconsecutivo')
            mudarSemana('consecutivo')
            mudarMes('consecutivo')
        } else if(listaMeses[0] == listaMeses[1] + 1) {
            mudarDia('naoconsecutivo')
            mudarSemana('naoconsecutivo')
            mudarMes('consecutivo')
        } else {
            mudarDia('naoconsecutivo')
            mudarSemana('naoconsecutivo')
            mudarMes('naoconsecutivo')
        }
    }
} else if(dias && listaMeses[0] != listaMeses[1]){
    if(listaSemanas[0] == listaSemanas[1]){
        if(listaDiasDoAno[0] == listaDiasDoAno[1] + 1){
            mudarDia('consecutivo')
            mudarMes('consecutivo')
        } else if(listaMeses[0] == listaMeses[1] + 1) {
            console.log('teste123')
            mudarDia('naoconsecutivo')
            mudarMes('consecutivo')
        } else if(listaMeses[0] != listaMeses[1] + 1){
            mudarDia('naoconsecutivo')
            mudarMes('naoconsecutivo')
        }
    } else if(listaSemanas[0] != listaSemanas[1]){
        if(listaDiasDoAno[0] == listaDiasDoAno[1] + 1){
            mudarDia('consecutivo')
            mudarSemana('consecutivo')
            mudarMes('consecutivo')
        } else if(listaSemanas[0] == listaSemanas[1] + 1){
            mudarDia('naoconsecutivo')
            mudarSemana('consecutivo')
            mudarMes('consecutivo')
        }
        else if(listaMeses[0] == listaMeses[1] + 1){
            mudarDia('naoconsecutivo')
            mudarSemana('naoconsecutivo')
            mudarMes('consecutivo')
        } else {
            mudarDia('naoconsecutivo')
            mudarSemana('naoconsecutivo')
            mudarMes('naoconsecutivo')
        }
    }
}




for(let i=0; i < horasDia.length; i++ ){
    horasDia[i].innerHTML = `${daily[lista[i]]} hrs`;
    horasSemana[i].innerHTML = `${weekly[lista[i]]} hrs`;
    horasMes[i].innerHTML = `${monthly[lista[i]]} hrs`;
    ultimoDia[i].innerHTML = ` Last day - ${lastDay[lista[i]]} hrs`;
    ultimaSemana[i].innerHTML = ` Last Week - ${lastWeekly[lista[i]]} hrs`;
    ultimoMes[i].innerHTML = ` Last Monthly - ${lastMonthly[lista[i]]} hrs`;
}


const clickConf = document.querySelectorAll('.icon-conf');
const caixaConf = document.querySelectorAll('.caixa-configuracao');
const botaoVoltar = document.querySelectorAll('.voltar');
const botaoAdd = document.querySelectorAll('.add-horas');


for(let i=0; i < clickConf.length; i++){
    clickConf[i].onclick = function(){
        caixaConf[i].classList.remove('oculto')
    }
    botaoVoltar[i].onclick = function() {
        caixaConf[i].classList.add('oculto')
    }
    let intervalo = document.querySelectorAll('.selecionar-intervalo')[i]
    intervalo.addEventListener('change', function(ev){
        let selecao = ev.target.value
        botaoAdd[i].onclick = function() {
            let horas = document.querySelectorAll('.quantidade-de-horas')[i].valueAsNumber
            if(selecao == 'add-dia'){
                if(horas){
                    daily[lista[i]] += horas;
                    weekly[lista[i]] += horas;
                    monthly[lista[i]] += horas;
                    localStorage.setItem('horariosSalvos', JSON.stringify(horariosSalvos));
                    horasDia[i].innerHTML = `${daily[lista[i]]} hrs`;
                    horasSemana[i].innerHTML = `${weekly[lista[i]]} hrs`;
                    horasMes[i].innerHTML = `${monthly[lista[i]]} hrs`;
                    caixaConf[i].classList.add('oculto');
                } else {
                    alert('Add time')
                }          
            } else if(selecao == 'add-semana'){
                if(horas){
                    weekly[lista[i]] += horas;
                    monthly[lista[i]] += horas;
                    localStorage.setItem('horariosSalvos', JSON.stringify(horariosSalvos));
                    horasSemana[i].innerHTML = `${weekly[lista[i]]} hrs`;
                    horasMes[i].innerHTML = `${monthly[lista[i]]} hrs`;
                    caixaConf[i].classList.add('oculto');
                } else {
                    alert('Add time')
                } 
            } else if(selecao == 'add-mes'){
                if(horas){
                    monthly[lista[i]] += horas;
                    localStorage.setItem('horariosSalvos', JSON.stringify(horariosSalvos))
                    horasMes[i].innerHTML = `${monthly[lista[i]]} hrs`;
                    caixaConf[i].classList.add('oculto');
                } else {
                    alert('Add time')
                } 
            }
        }
    })
    botaoAdd[i].onclick = function() {
        alert('Select the range')
    }
}
