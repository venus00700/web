// testedb.js

import { apagarProduto, atualizarProduto, buscarProdutosPorId, inserirProduto, listarProdutos, listarProdutosPorCategoria } from "./db.js";

console.log('Listando todos os produtos...')
const lista = await listarProdutos()
lista.forEach(item => {
    //console.log(item)
})

console.log('Buscando produto com id=2')
const produto = await buscarProdutosPorId(2)
console.log(produto)

console.log('Produtos por categoria')
const porCategoria = await listarProdutosPorCategoria(1)
console.log(porCategoria)

console.log('Inserindo um produto')
// objeto javascript
const p = {
    descricao: 'Barra de Cereais Vegana',
    categoria: 1,
    preco: 19.99,
    quantidade: 2,
    url: 'cereais.png'
}

const inseriu = await inserirProduto(p)
if (inseriu.affectedRows == 1){
    p.id = inseriu.insertId
    console.log(p)
} else {
    console.log('Erro ao inserir produto')
}

console.log('Atualizando produto...')

const p2 = {
    id: 10,
    descricao: 'Barra de Cereais Vegana 2',
    categoria: 2,
    preco: 29.99,
    quantidade: 3,
    url: 'cereais2.png'
}

const atualizou = await atualizarProduto(p2)
console.log(atualizou.affectedRows == 1) // true

console.log('Apagando produto...')
const apagou = await apagarProduto(20) 
console.log(apagou.affectedRows == 1)