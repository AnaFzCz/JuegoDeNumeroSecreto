// let titulo = document.querySelector('h1');
// titulo.innerHTML = ("Juego de número secreto");


// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Escoja un número entre 1 y 10';

let numeroSecreto = generarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Juego de Número Secreto');
exibirTextoNaTela('p', 'Elige un número entre 1 y 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    // console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acerto');
        let palabratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Descubriste el número secreto con ${tentativas} ${palabratentativa}`;

        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute;

    } else {
        if (chute > numeroSecreto)
            exibirTextoNaTela('p', 'el numero secreto es menor');
        else {
            exibirTextoNaTela('p', 'el número secreto es mayor');
        }
        // tentativas=tentativas+1;
        tentativas++;
        limparCampo();
    }

}

function generarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo(params) {
    chute = document.querySelector('input');
    chute.value('');
}