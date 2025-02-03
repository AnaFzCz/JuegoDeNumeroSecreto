// let titulo = document.querySelector('h1');
// titulo.innerHTML = ("Juego de número secreto");


// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Escoja un número entre 1 y 10';

let numeroSecreto = generarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Juego de Número Secreto');
exibirTextoNaTela('p', 'Elige un número entre 1 y 10');



function verificarChute() {
    let chute = document.querySelector()


    console.log(numeroSecreto);
}

function generarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}