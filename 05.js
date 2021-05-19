const nomes = {
    nome: 'Vinicius',
    sobrenome: 'Alencar'
}
/* console.log(nomes)
console.log(Object.assign({}, nomes, {age:12}))*/

console.log(nomes) 

/* Object.freeze(nomes) */
nomes.nome = 'Names'
delete nomes.sobrenome
delete nomes.nome
console.log(nomes)
