(() => {
    this.nome = 'Vinicius'
    const aux = () => this.nome;

    function getNome() {return this.nome;}

    const user = {
        nome: 'Alex',
        aux,
        getNome
    }
    console.log(user.aux())
    console.log(user.getNome())
})()