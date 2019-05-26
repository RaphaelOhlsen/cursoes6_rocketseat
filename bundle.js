"use strict";

// 2.1 - MAP
var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idade = usuarios.map(function (usuario) {
  return usuario.idade;
});
console.log(idade); // 2.2 - FILTER

var query = usuarios.filter(function (_ref) {
  var idade = _ref.idade,
      empresa = _ref.empresa;
  return idade >= 18 && empresa === 'Rocketseat';
});
console.log(query); // 2.3 - FIND 

var queryEmpresa = usuarios.find(function (_ref2) {
  var empresa = _ref2.empresa;
  return empresa === 'Google';
});
console.log(queryEmpresa);
