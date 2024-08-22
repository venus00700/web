class Conta {
    //campo ou propriedades privada
    #numero
    #saldo
    #titular

    constructor(numero, titular, saldoInicial) {
        this.#numero = numero
        this.#titular = titular
        this.#saldo = saldoInicial
    }
    //getters
    get saldo() { return this.#saldo }

    get titular() { return this.#titular }

    get numero() { return this.#numero }

    //setter
    set titular(titular) { this.#titular = titular }

    depositar(valor) { this.#saldo += valor }

    sacar(valorsaque) {
        if (valorsaque <= this.#saldo)
            this.#saldo -= valorsaque
        else
            console.log('*** Sem saldo')
    }

    toString(){ return `Numero: ${this.#numero} Titular: ${this.#titular} Saldo: R$ ${this.#saldo}` }

}

//cria objetos
const conta1 = new Conta(1, 'Jose da Silva', 100)
const conta2 = new Conta(2, 'Maria da Silva', 0)

conta1.depositar(100)
conta1.sacar(150)
console.log(conta1.saldo)
console.log(conta1.numero)
console.log(conta1.titular)
console.log(conta1.toString()) 

conta2.titular = 'Jovana Paz'
console.log(conta2.titular)


