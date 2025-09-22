
class Nota{
    constructor(valor,materia){
        this.valor = valor
        this.materia = materia
    }

    adicionarNota(){
        return `${this.valor } ${this.materia }`
    }
}

module.exports = Nota