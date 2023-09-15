"use strict";
console.log('---------------------------------------');
console.log('desafio ');
console.log('---------------------------------------');
console.log('Questão 1 ');
/*
1 Abaixo temos um código em JavaScript. "Traduza-o" para TypeScript!
var dobro = function(valor) {
  return valor * 2
}
console.log(dobro(10))
*/
// Minha resolução
const dobro = (valor) => {
    return valor * 2;
};
console.log(dobro(10));
// correcao 
// Minha resolução
const _dobro = (valor) => valor * 2;
console.log(_dobro(10));
console.log('---------------------------------------');
console.log('Questão 2 ');
/*
2 Verifique se há espaço para melhorias nesse trecho de código!
var dizerOla = function (nome) {
if (nome === undefined) { nome = "Pessoa" }
console.log("Ola, " + nome)
}
dizerOla()
dizerOla("Anna")
*/
// Minha resolução
const dizerOla = (nome = "Pessoa") => {
    console.log("Ola, " + nome);
};
dizerOla();
dizerOla("Anna");
// Minha correcao 
const _dizerOla = (nome = "Pessoa") => {
    console.log("Ola, " + nome);
};
_dizerOla();
_dizerOla("Anna");
console.log('---------------------------------------');
console.log('Questão 3 ');
/*
3 Dado esse array, imprima o menor valor!
var nums = [-3, 33, 38, 5]
console.log('???')
*/
// Minha resolução
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
console.log('---------------------------------------');
console.log('Questão 4 ');
/*
4 Adicione os elementos de nums em array !
var nums = [-3, 33, 38, 5]
var array = [55, 20]
console.log(array)
*/
// Minha resolução
const nums_1 = [-3, 33, 38, 5];
var array = [55, 20, ...nums_1];
console.log(array);
// correcao
const _nums_1 = [-3, 33, 38, 5];
const _array = [55, 20];
_array.push(..._nums_1);
console.log(_array);
console.log('---------------------------------------');
console.log('Questão 5 ');
/*
5. Simplifique os trechos de código abaixo utilizando o operador Destructuring!
var notas = [8.5, 6.3, 9.4]
var notas1 = notas[0]
var notas2 = notas[1]
var notas3 = notas[2]
console.log(nota1, nota2, nota3)

var cientista = {primeiroNome: "Will", experiencia: 12}
var primeiroNome = cientista.primeiroNome
var experiencia = cientista.experiencia
console.log(primeiroNome, experiencia)

*/
// Minha resolução
const notas = [8.5, 6.3, 9.4];
const cientista = { primeiroNome: "Will", experiencia: 12 };
const [nota1, nota2, nota3] = notas;
const { primeiroNome, experiencia } = cientista;
console.log(nota1, nota2, nota3);
console.log(primeiroNome, experiencia);
