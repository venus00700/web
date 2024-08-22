console.time()

var msg = 'Primeira mensagem'
/* string template */
console.log(`Isto é uma string template : ${msg}`) 

for (let i=0; i<5; i++){
    console.log(`Contador i=${i}`)
}

console.timeEnd()