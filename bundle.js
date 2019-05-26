"use strict";

var usuario = {
  nome: 'Raphael',
  sobresone: 'Ohlsen',
  idade: '48',
  endereco: {
    cidade: 'Vitoria',
    estado: 'Espírito Santo'
  }
};

function mostraNome(_ref) {
  var nome = _ref.nome,
      estado = _ref.endereco.estado;
  console.log(nome);
  console.log(estado);
}

mostraNome(usuario);
