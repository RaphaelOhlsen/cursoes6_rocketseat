"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
console.log(queryEmpresa); // 2.4 - Unindo Operações 

var queryIdade = usuarios.map(function (usuario) {
  return _objectSpread({}, usuario, {
    idade: usuario.idade * 2
  });
}).filter(function (_ref3) {
  var idade = _ref3.idade;
  return idade <= 50;
});
console.log(queryIdade);
