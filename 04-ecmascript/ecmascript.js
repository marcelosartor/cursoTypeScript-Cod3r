"use strict";
/*
console.log('---------------------------------------')
console.log('this')
console.log('---------------------------------------')
// This
function normalComThis(){
  console.log(this);
}
normalComThis()

const normalComThisEspecial = normalComThis.bind({nome:'Vanessa'})
normalComThisEspecial()

//This???
console.log(this)
const arrowComThis = () => console.log(this)
arrowComThis()
*/
console.log('---------------------------------------');
console.log('Rest & Spred');
console.log('---------------------------------------');
console.log('Spred');
const numbers = [1, 10, 99, -5];
console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3])); // Sem Spred
console.log(Math.max(...numbers)); // com Spred
const turmaA = ['Marcelo', 'João', 'Vanessa'];
const turmaB = ['Fulano', ...turmaA];
console.log('Rest - similar ao varargs do Java');
function retornaArray(...args) {
    return args;
}
const numeros = retornaArray(1, 2, 3, 4, 55, 66, 77, 88, 99);
console.log(numeros);
console.log('---------------------------------------');
console.log('Rest & Spred com tupla');
console.log('---------------------------------------');
const _tupla = [1, 'abc', true];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(1, 'a', true); // sem spred
tuplaParam1(..._tupla); // com spred
function tuplaParam2(...params) {
    console.log(`is array : ${Array.isArray(params)}`);
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(..._tupla);
console.log('---------------------------------------');
console.log('Destructuring (array)');
console.log('---------------------------------------');
const carro = ['motor zetec 1.8', 2020];
const motor = carro[0];
const ano = carro[1];
console.log(`Carro ${motor} ano ${ano}`); // sem destructuring
const [_motor, _ano] = carro;
console.log(`Carro ${_motor} ano ${_ano}`); // com destructuring
console.log('---------------------------------------');
console.log('Destructuring (objeto)');
console.log('---------------------------------------');
const item = { nome: 'SSD', preco: 200 };
console.log(`Item ${item.nome} ano ${item.preco}`); // sem destructuring
const { preco, nome } = item;
console.log(`Item ${nome} ano ${preco}`); // com destructuring
console.log('---------------------------------------');
console.log('Assincronismo ');
console.log('---------------------------------------');
console.log('Exemplo 1');
function esperar1s() {
    setTimeout(() => {
        console.log('exemplo 1s depois....');
    }, 1000);
}
esperar1s();
console.log('Exemplo 2 - Callback - usado antes do async/await e promisses');
function _esperar2s(callback) {
    setTimeout(() => {
        callback('exemplo callcback 2s depois....');
    }, 2000);
}
_esperar2s(function (_resultado) {
    console.log(_resultado);
});
console.log('Exemplo 3 - Promise');
function __esperar3sPromisse() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('exemplo promisse 3s depois....');
        }, 3000);
    });
}
__esperar3sPromisse()
    .then(dado => console.log(dado));
console.log('SW(Star Wars) api');
fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(dados => console.log(dados));
