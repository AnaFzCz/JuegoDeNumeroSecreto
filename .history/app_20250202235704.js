
// DESAFIO 1
// 2. let titulo = document.querySelector('h1');
titulo.innerHTML = ("Hora do Desafio");

// 3.Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

function verificarChute() {
    console.log('El botón fue cliqueado');
}

//4. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

function mensajeAll() {
    alert('Eu amo JS');
}

// 5. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.


function preguntasUsuario() {
    let nome = prompt('Cuál es tu nombre?');
    let ciudad = prompt(`En que ciudad de Brasil te encuentras ${nome}?`);
    alert(`Estuve en ${ciudad} y te recuerdo ${nome}`);
}

//6. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

function sumaDosNumeros() {
    let valor1 = prompt('Ingresa el primer número');
    let valor2 = prompt(`Ingresa el primer número`);
    let resultado = valor1 + valor2;
    alert(`La suma de ${valor1} + ${valor2} es ${resultado}`);
}
