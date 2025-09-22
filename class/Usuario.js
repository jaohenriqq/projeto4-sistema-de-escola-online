
class Usuario{
    #nome
    #idade
    constructor(nome,idade){
       this.#nome = nome
       this.#idade = idade
    }

    acessoPainel(){
        return `acesso ao sistema escolar`
    }

    getNome() {
        return this.#nome;
    }
}

module.exports = Usuario