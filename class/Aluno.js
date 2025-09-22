const Usuario = require('./Usuario')


class Aluno extends Usuario{
    constructor(nome, idade){
        super(nome, idade)
        this.notas = []
    }
    adicionarNota(nota) {
        this.notas.push(nota)
    }
    acessoPainel(){
        return `Painel do Aluno: consultar notas e disciplinas`
    }
}




module.exports = Aluno