
// DESAFIO 1
// 2.
// 
let titulo = document.querySelector('h1');
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
    let valor1 = parseInt(prompt('Ingresa el primer número'));
    let valor2 = parseInt(prompt(`Ingresa el segundo número`));
    let resultado = (valor1 + valor2);
    alert(`La suma de ${valor1} + ${valor2} es ${resultado}`);
}

// DESAFIO 2
// Criar uma função que exibe "Olá, mundo!" no console.

function mensaje1() {
    console.log("Olá, mundo!");
}

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function mensaje2() {
    let nome = prompt('Cuál es tu nombre?');
    console.log(`Olá, ${nome}!`);
}

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function mensaje(numero) {
    let nome = prompt('Cuál es tu nombre?')
    let numero = prompt('Ingreso un número');
    let resultadoDoble = numero * 2;
    console.log(`Olá, ${nome}, el doble es ${resultadoDoble}!`);
}

// Criar uma função que recebe três números como parâmetros e retorna a média deles.

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo