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
}

let daily = new IntervalosDeTempo('0hr', '0hr', '0hr', '0hr', '0hr', '0hr');
let weekly = new IntervalosDeTempo('0hr', '0hr', '0hr', '0hr', '0hr', '0hr');
let monthly = new IntervalosDeTempo('0hr', '0hr', '0hr', '0hr', '0hr', '0hr');
let horariosSalvos = new RastreamentoDeTempo(daily, weekly, monthly)

localStorage.setItem('horariosSalvos', JSON.stringify(horariosSalvos))

document.querySelectorAll('.hora-principal-dia')[0].innerHTML = horariosSalvos.dia.work;
document.querySelectorAll('.hora-principal-dia')[1].innerHTML = horariosSalvos.dia.play;
document.querySelectorAll('.hora-principal-dia')[2].innerHTML = horariosSalvos.dia.study;
document.querySelectorAll('.hora-principal-dia')[3].innerHTML = horariosSalvos.dia.exercise;
document.querySelectorAll('.hora-principal-dia')[4].innerHTML = horariosSalvos.dia.social;
document.querySelectorAll('.hora-principal-dia')[5].innerHTML = horariosSalvos.dia.selfCare;

document.querySelectorAll('.hora-principal-semana')[0].innerHTML = horariosSalvos.semana.work;
document.querySelectorAll('.hora-principal-semana')[1].innerHTML = horariosSalvos.semana.play;
document.querySelectorAll('.hora-principal-semana')[2].innerHTML = horariosSalvos.semana.study;
document.querySelectorAll('.hora-principal-semana')[3].innerHTML = horariosSalvos.semana.exercise;
document.querySelectorAll('.hora-principal-semana')[4].innerHTML = horariosSalvos.semana.social;
document.querySelectorAll('.hora-principal-semana')[5].innerHTML = horariosSalvos.semana.selfCare;

document.querySelectorAll('.hora-principal-mes')[0].innerHTML = horariosSalvos.mes.work;
document.querySelectorAll('.hora-principal-mes')[1].innerHTML = horariosSalvos.mes.play;
document.querySelectorAll('.hora-principal-mes')[2].innerHTML = horariosSalvos.mes.study;
document.querySelectorAll('.hora-principal-mes')[3].innerHTML = horariosSalvos.mes.exercise;
document.querySelectorAll('.hora-principal-mes')[4].innerHTML = horariosSalvos.mes.social;
document.querySelectorAll('.hora-principal-mes')[5].innerHTML = horariosSalvos.mes.selfCare;


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
            let horas = document.querySelectorAll('.quantidade-de-horas')[i].value;
            console.log(selecao)
            if(selecao == 'add-dia'){
                console.log('teste')
            } else if(selecao == 'add-semana'){
                console.log('teste2')
            } else if(selecao == 'add-mes'){
                console.log('teste3')
            } else if(!selecao){
                alert('teste')
            }
        }
    })
}