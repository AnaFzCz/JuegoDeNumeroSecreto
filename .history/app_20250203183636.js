
// // DESAFIO 1
// // 2.
// // 
// let titulo = document.querySelector('h1');
// titulo.innerHTML = ("Hora do Desafio");

// // 3.Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

// function verificarChute() {
//     console.log('El botón fue cliqueado');
// }

// //4. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

// function mensajeAll() {
//     alert('Eu amo JS');
// }

// // 5. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.


// function preguntasUsuario() {
//     let nome = prompt('Cuál es tu nombre?');
//     let ciudad = prompt(`En que ciudad de Brasil te encuentras ${nome}?`);
//     alert(`Estuve en ${ciudad} y te recuerdo ${nome}`);
// }

// //6. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

// function sumaDosNumeros() {
//     let valor1 = parseInt(prompt('Ingresa el primer número'));
//     let valor2 = parseInt(prompt(`Ingresa el segundo número`));
//     let resultado = (valor1 + valor2);
//     alert(`La suma de ${valor1} + ${valor2} es ${resultado}`);
// }

// // DESAFIO 2
// // Criar uma função que exibe "Olá, mundo!" no console.

// function mensaje1() {
//     console.log("Olá, mundo!");
// }

// // Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

// function mensaje2() {
//     let nome = prompt('Cuál es tu nombre?');
//     console.log(`Olá, ${nome}!`);
// }

// // Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
// function calcularDobro(numero) {
//     return numero * 2;
// }

// let resultadoDobro = calcularDobro(5);
// console.log(resultadoDobro);

// // Criar uma função que recebe três números como parâmetros e retorna a média deles.
// // function encontrarMaior(a, b) {
// //     return a > b ? a : b;
// // }

// let maiorNumero = encontrarMaior(15, 9);
// console.log(maiorNumero);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

// function calcularMedia(a, b, c) {
//     return (a + b + c) / 3;
// }

// let media = calcularMedia(4, 7, 10);
// console.log(media);

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
// function encontrarMaior(a, b) {
//     return a > b ? a : b;
// }

// let maiorNumero = encontrarMaior(15, 9);
// console.log(maiorNumero);

//   DESAFIO 3

// 1.Crie uma função que calcule o índice de massa corporal(IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

let altura = prompt('Cuál es tu altura?')//metros
let peso = prompt('Cuál es tu peso?');//kilos

function calculoIndiceMasaCorporal(altura, peso) {
    let IMC = peso / (altura * altura);
    return console.log(`tu IMC es${IMC}`);
}




// 2.Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

// 3.Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais.Para isso, considere a cotação do dólar igual a R$4, 80.

// 4.Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

// 5.Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro.Considere Pi = 3, 14.

// 6.Crie uma função que mostre na tela a tabuada de um número dado como parâmetro