class List {
  constructor() {
    this.data = []
  }

  add(data) {
    this.data.push(data)
    console.log(this.data)
  }
}

class TodoList extends List {
  constructor() {
    super()

    this.usuario = 'Raphael'
  }

  mostraUsuario() {
    console.log(this.usuario)
  }
}

class Math {
  static soma(a,b) {
    return a + b
  }
}

const MinhaLista = new TodoList()
const $btn = document.querySelector('#novotodo')

$btn.onclick = () => {
  MinhaLista.add('Teste')
}

MinhaLista.mostraUsuario()

console.log(Math.soma(2,2))