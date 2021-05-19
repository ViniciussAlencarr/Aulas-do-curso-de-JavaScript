const students = [
    {
        'nome': 'Vinicius',
        'nota': 7.5
    },
    {
        'nome': 'Brenda',
        'nota': 4
    },
    {
        'nome': 'Roberto Campos Neto',
        'nota': 7
    },
    {
        'nome': 'Rodrigo',
        'nota': 4
    }
]

function aux(student) {
    return student.filter(student => student.nota >= 7);
}

console.log('Alunos aprovados')
const a = aux
console.log(a(students))