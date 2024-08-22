//1. criando um objeto de forma literal

const pessoa1 = {
    nome: 'João',
    idade: 30,
    saudacao: function(){
        return `Oi! Meu nome é ${this.nome}`
    }
}

console.log(pessoa1.nome)
console.log(pessoa1.idade)
console.log(pessoa1)

//2. criando um objeto usando o construtor de Object()

const pessoa2 = new Object()
console.log(pessoa2)
//acresenta as propriedades ao objeto vazio
pessoa2.nome = 'Luiz Gonzaga'
pessoa2.idade = 20
pessoa2.saudacao = function(){
    return `Oie! Meu nome é ${this.nome}`
}

console.log(pessoa2.nome)
console.log(pessoa2.idade)
console.log(pessoa2.saudacao)

//3. usando uma função construtora = modelo

function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
    this.saudacao = function(){
        return `OI! Meu nome é ${this.nome}`
    }
}

const joao = new Pessoa('João da Silva', 41)
const maria = new Pessoa('Maria da Silva', 39)

console.log(joao.nome)
console.log(joao.idade)
console.log(joao.saudacao())

//4. usando Object.create()
// criando um prototipo

let pessoaPrototipo = {
    saudacao: function(){
        return `Opa! Meu nome é ${this.nome}`
    }
}

const rafael = Object.create(pessoaPrototipo)
rafael.nome = "Rafael da Silva"
rafael.idade = 30

console.log(rafael)
console.log(rafael.saudacao())