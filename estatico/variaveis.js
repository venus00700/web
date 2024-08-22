//variaveis ou propriedades estaticas

class Configuração {

    //propriedade estatica
    static versao = '1.0.0'

    //metodo estatico
    static obterVersao(){
        return Configuração.versao
    }
}

console.log(Configuração.versao)
console.log(Configuração.obterVersao())











