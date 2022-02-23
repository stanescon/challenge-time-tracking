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