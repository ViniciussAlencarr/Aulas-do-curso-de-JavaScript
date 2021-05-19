const sexos = {
    homem: Symbol('M'),
    mulher: Symbol('F')
}

const users = [
    {
        nome: 'Vinicius',
        sobrenome: 'Alencar',
        sexo : sexos.homem
    },
    {
        nome: 'Brenda',
        sobrenome: 'Xavier',
        sexo : sexos.mulher
    },
    {
        nome: 'Roberto',
        sobrenome: 'Rodrigues',
        sexo : sexos.homem
    }
]

const homi = users.filter(macho => macho.sexo === sexos.homem)
console.log(homi)

users.forEach(user => {
    console.log(user.nome)    
});