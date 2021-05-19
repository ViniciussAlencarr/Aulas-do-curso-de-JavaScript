const soma = x => x.map(x => x + 2)
const mult = x => x.map(x => x * 2)
const div = x => x.map(x => x / 2)

const resultado = soma(mult(div([2,4,6])))

console.log(resultado)