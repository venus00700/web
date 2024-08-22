// POO 1 = Programação Orientada a Objetos

//Conceito de objetos

const pessoa1 = {
    //propriedade ou chave:valor
    nome: 'Rafael',
    idade: 15,
    altura: 1.60
} 

console.log(pessoa1) 
console.log(pessoa1.nome) 
console.log(pessoa1.idade) 
console.log(pessoa1.altura)

const idade = pessoa1.idade 

const pessoa2 = {
    //propriedade ou chave:valor
    nome: 'Gabriel',
    idade: 17,
    altura: 1.70
} 

console.log(pessoa2)
console.log(pessoa2['nome'])
console.log(pessoa2['idade'])
console.log(pessoa2['altura'])

const pessoa3 = {
    //propriedade ou chave:valor
    nome: 'Maria',
    idade: 19,
    altura: 1.80
} 
//
const arrPessoas = [pessoa1, pessoa2, pessoa3]
console.log(arrPessoas[0].nome)
console.log(arrPessoas[1].nome)
console.log(arrPessoas[2].nome) 