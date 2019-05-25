const arr = [1, 3, 4, 5, 8, 9]

// Método 'MAP' percorre um vetor e consegue-se
//  manipular os elementos do vetor

const newArr = arr.map((item, index) => item + index)

console.log(newArr)

// Método 'RECDUCE' reune todos os elementos do vetor e 
// transforma em uma unica informação

const letters = ['R', 'a', 'p', 'h', 'a', 'e', 'l']
const word = letters.reduce((total, next) => total + next)

console.log(word)

// Método 'FILTER' filtra um vetor e retorna no novo vetor
// somente so valores que passam por análise de verdadeiro 

const filter = arr.filter( item => item % 2 === 0)

console.log(filter)

// Método 'FIND' usado para emcontrar um elemento em um vetor

const find = arr.find( item =>  item === 4)

console.log(find)

const teste = () => ({ nome: 'Raphael', sobrenome: 'Ohlsen'})

console.log(teste().sobrenome)