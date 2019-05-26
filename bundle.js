"use strict";

// 4.1
var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    cidade = empresa.endereco.cidade,
    estado = empresa.endereco.estado;
console.log(nome);
console.log(cidade);
console.log(estado); // 4.2

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
}));
