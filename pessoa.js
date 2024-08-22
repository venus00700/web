
//declaração da classe
class Pessoa {

    //variaveis
    //ex: cpf = '000000000-00' 
    
    //propriedades privadas (encapsulamento)
    #nome
    #idade

    //construtor da classe
    constructor (nome, idade){this.nome = nome, this.idade = idade}

    //metodo da classe
    falar(){console.log(`Oi, meu nome é ${this.#nome} e tenho ${this.#idade}`)}} 

//cria objetos
const pessoa1 = new Pessoa('José', 30); pessoa1.falar()
const  pessoa2 = new Pessoa('Maria', 29); pessoa2.falar() 

