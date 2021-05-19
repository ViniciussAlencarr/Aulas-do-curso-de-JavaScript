const user = {
    nome: 'Vinicius',
    sobrenome: 'Alencar'
}

function aux(user) {
    return {
        ...user,
        fullName: `${ user.nome } ${ user.sobrenome }`
    }
}

const usuario = aux
console.log(usuario(user))