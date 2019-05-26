// 2.1 - MAP

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ]

 const idade = usuarios.map(usuario => usuario.idade)

 console.log(idade)

 // 2.2 - FILTER

 const query = usuarios.filter( ({ idade , empresa }) => ( idade >= 18 && empresa === 'Rocketseat'))

 console.log(query)

 // 2.3 - FIND 

 const queryEmpresa = usuarios.find( ({ empresa }) => empresa === 'Google')

 console.log(queryEmpresa)

 // 2.4 - Unindo Operações 

 const queryIdade = usuarios
  .map( usuario => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter( ({ idade }) => idade <= 50)

 console.log(queryIdade)