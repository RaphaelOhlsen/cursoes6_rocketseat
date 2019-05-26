const usuario = {
  nome: 'Raphael',
  sobresone: 'Ohlsen',
  idade: '48',
  endereco: {
    cidade: 'Vitoria',
    estado: 'Espírito Santo'
  }
}

function mostraNome({ nome, endereco: { estado }}) {
  console.log(nome)
  console.log(estado)
}

mostraNome(usuario)