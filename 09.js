function Pessoa(args) {
  return {
    nome: 'Vinicius',
    sobrenome: 'Alencar',
    ...args
  }
}

let p1 = Pessoa({age: 19})

function Carro() {
  if (!Carro.instance) {
    Carro.instance = this;
  }
  return Carro.instance;
}

c1 = Carro.call({marca: 'Ford'})
/* console.log(c1) */
c2 = Carro.call({marca: "Volksvagem"})
/* console.log(c2) */

let kj = true

function aa(fn) {
  if (kj) {
    return fn()
  }
}
function sum(x,y) {
  return x + y
}

/* console.log(aa(() => sum(2,3))) */
