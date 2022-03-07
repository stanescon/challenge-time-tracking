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
    constructor(dia, semana, mes){
    this.dia = dia;
    this.semana = semana;
    this.mes = mes;
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


let horariosSalvos = JSON.parse(localStorage.getItem('horariosSalvos'))
console.log(horariosSalvos)
    let daily;
    let weekly;
    let monthly;


if(!horariosSalvos){
    daily = new IntervalosDeTempo(0, 0, 0, 0, 0, 0);
    weekly = new IntervalosDeTempo(0, 0, 0, 0, 0, 0);
    monthly = new IntervalosDeTempo(0, 0, 0, 0, 0, 0);
    horariosSalvos = new RastreamentoDeTempo(daily, weekly, monthly)
} else {
    daily = horariosSalvos.dia;
    weekly = horariosSalvos.semana;
    monthly = horariosSalvos.mes;
    console.log(weekly)
}


const lista = ['work', 'play', 'study', 'exercise', 'social', 'selfCare']
const horasDia = document.querySelectorAll('.hora-principal-dia');
const horasSemana = document.querySelectorAll('.hora-principal-semana');
const horasMes = document.querySelectorAll('.hora-principal-mes');

for(let i=0; i < horasDia.length; i++ ){
    horasDia[i].innerHTML = `${daily[lista[i]]} hrs`;
    horasSemana[i].innerHTML = `${weekly[lista[i]]} hrs`;
    horasMes[i].innerHTML = `${monthly[lista[i]]} hrs`;
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
                    localStorage.setItem('horariosSalvos', JSON.stringify(horariosSalvos));
                    horasDia[i].innerHTML = `${daily[lista[i]]} hrs`;
                    caixaConf[i].classList.add('oculto');
                } else {
                    alert('Add time')
                }          
            } else if(selecao == 'add-semana'){
                if(horas){
                    weekly[lista[i]] += horas;
                    localStorage.setItem('horariosSalvos', JSON.stringify(horariosSalvos));
                    horasSemana[i].innerHTML = `${weekly[lista[i]]} hrs`;
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
