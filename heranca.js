
//classe mãe ou superclasse
class Animal{

    constructor(nome){ this.nome = nome }

    //metodo que sera herdado
    falar(){ console.log(`${this.nome} faz um som`) }
}

//classe filha
class Cao extends Animal{

    //sobrescrita de metodo
    //sobrescreve o metodo falar da classe mãe
    falar(){
        console.log(`${this.nome} late: Au Au Au`)
    }

}

class Gato extends Animal{
    //sobrescreve o metodo falar da classe mãe
    falar(){ console.log(`${this.nome} mia: Miau Miau Miau`) }

    arranhar(){ console.log(`${this.nome} arranhando o sofá`) } 

    comer(){ this.#comendowyskas() }
    //metodo privado
    #comendowyskas(){ console.log('Gato comendo wyskas...') } 
}

toto = new Cao('Totó')
toto.falar() 

tom = new Gato('Tom')
tom.falar()
tom.arranhar()
tom.comer()

//exemplo de POLIMORFISMO 
//criando um array de animais
const animais = [new Animal('xxx'), new Cao('Scooby'), new Gato('Felix')] 
animais.forEach(animal => animal.falar())