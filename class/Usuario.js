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
}

module.exports = Usuario