"use strict";

var arr = [1, 3, 4, 5, 8, 9]; // Método 'MAP' percorre um vetor e consegue-se
//  manipular os elementos do vetor

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); // Método 'RECDUCE' reune todos os elementos do vetor e 
// transforma em uma unica informação

var letters = ['R', 'a', 'p', 'h', 'a', 'e', 'l'];
var word = letters.reduce(function (total, next) {
  return total + next;
});
console.log(word); // Método 'FILTER' filtra um vetor e retorna no novo vetor
// somente so valores que passam por análise de verdadeiro 

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); // Método 'FIND' usado para emcontrar um elemento em um vetor

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find);

var teste = function teste() {
  return {
    nome: 'Raphael',
    sobrenome: 'Ohlsen'
  };
};

console.log(teste().sobrenome);
