//metodos estaticos
//tudo que é estatico não vai para o objeto quando este é criado

class Calculadora {

    //metodo estatico para somar dois valores
    static somar(a,b){
        return a + b
    }

    //metodo estatico para subtrair dois valores
    static subtrair(a, b){
        return a - b
    }
}

console.log(Calculadora.somar(1, 2))
console.log(Calculadora.subtrair(1, 5)) 