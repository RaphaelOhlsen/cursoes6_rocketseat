//------//
// REST //
//------//

// 1
const usuario = {
  nome: 'Raphael',
  idade: 48,
  empresa: 'Nexel'
}

const { nome, ...resto } = usuario

console.log(nome)
console.log(resto)

// 2
const arr = [1, 2, 3, 4]

const [ a, b, ...c] = arr

console.log(a)
console.log(b)
console.log(c)

// 3
const soma = (...parans) => parans.reduce((total, next) => total + next)


console.log(soma(1,2,3,4))

//--------//
// SPREAD //
//--------//

// 1
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2]

console.log(arr3)

// 2
const user1 = {
  nome: 'Raphael',
  idade: 48, 
  empresa: 'Nexel'
}

const user2 = {
  ...user1,
  nome: 'Mario',
  cidade: 'Vitória'
}

console.log(user2)