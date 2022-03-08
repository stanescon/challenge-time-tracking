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

const data = new Date()

let diasDoMes = localStorage.getItem('diasDoMes')
let listaDiaDoMes = []
if(!diasDoMes){
    listaDiaDoMes = []
} else {
    listaDiaDoMes = diasDoMes.split(',', 1)
    listaDiaDoMes[0] = parseInt(listaDiaDoMes[0], 10);
}
listaDiaDoMes.unshift(data.getDate())  // ESSA LISTA CONTEM O DIA DO MES ATUAL E O DIA DO MES DO ULTIMO ACESSO
localStorage.setItem('diasDoMes', listaDiaDoMes.toString());


let oneJan = new Date(data.getFullYear(),0,1); //aqui retorna o dia 01 - janeiro(0) - ano, no milisegundo 0
let numeroDeDiasDoAno = Math.ceil((data - oneJan) / (24 * 60 * 60 * 1000)) // dta - oneJan retorna quantos milisegundos de 1 de janeiro ate dia atual, dividindo por 24(horas do dia), 60(minutos da hora), 60(segundos do minuto), 1000(milisegundos do segundo) obtemos a quantidade em dias
let primeiroDomingo;
let semanaDoAno;
let listaSemanas = []
let semanas = localStorage.getItem('semanas')
if(!semanas){
    listaSemanas = []
} else {
    listaSemanas = semanas.split(',', 1)
    listaSemanas[0] = parseInt(listaSemanas[0], 10);
}
if(oneJan.getDay() == 0){
    primeiroDomingo = 1
    semanaDoAno = Math.ceil(numeroDeDiasDoAno / 7)
} else {
    primeiroDomingo = (7 - (oneJan.getDay() % 7)) + 1
    semanaDoAno = Math.ceil((numeroDeDiasDoAno - primeiroDomingo - 1) / 7) + 1
}
listaSemanas.unshift(semanaDoAno) // ESSA LISTA CONTEM A SEMANA ATUAL E A SEMANA DO ULTIMO ACESSO
localStorage.setItem('semanas', listaSemanas.toString());


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
console.log(listaMeses)







let horariosSalvos = JSON.parse(localStorage.getItem('horariosSalvos'))
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
