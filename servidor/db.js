// importa o modulo mysql
import mysql from 'mysql2/promise'


async function conectar() {

    if (global.conexao && global.conexao.state != 'disconnected')
        return global.conexao

    // cria uma conexão com o banco de dados
    const conexao = mysql.createConnection({
        user: 'root',
        password: 'softgraf',
        host: 'localhost',
        port: 3306,
        database: 'mundoverde'
    })

    console.log('Conectou ao MySQL')
    // objeto de acessso global
    global.conexao = conexao
    // retorna uma conexão
    return conexao
}

// conectar()

export async function listarProdutos() {
    // obtem a aconexao, await é para esta funcao esperar a outra responder para continuar, async e await sao usados juntos
    const con = await conectar()
    const sql = 'SELECT * FROM Produtos'
    const [dados] = await con.query(sql)
    return dados
}

export async function buscarProdutosPorId(id) {
    const con = await conectar()
    const sql = 'SELECT * FROM Produtos WHERE id=?'
    // obtém somente primeiro item da lista
    const [produto] = await con.query(sql, id)
    return produto
}

export async function listarProdutosPorCategoria(categoria) {
    const con = await conectar()
    const sql = 'SELECT * FROM Produtos WHERE categoria=?'
    const [lista] = await con.query(sql, categoria)
    return lista
} 

export async function inserirProduto(produto){
    const con = await conectar()
    const sql = 'INSERT INTO Produtos (descricao, categoria, preco, quantidade, url) VALUES (?, ?, ? , ?, ?)' 
    const valores = [produto.descricao, produto.categoria, produto.preco, produto.quantidade, produto.url] 
    const retorno = await con.query(sql, valores) 
    return retorno[0]
}

export async function atualizarProduto(produto){
    const con = await conectar()
    const sql = 'UPDATE Produtos SET descricao=?, categoria=?, preco=?, quantidade=?, url=? WHERE id=?'
    const valores = [produto.descricao, produto.categoria, produto.preco, produto.quantidade, produto.url, produto.id]
    const retorno = await con.query(sql, valores) 
    return retorno[0]
}

export async function apagarProduto(id){
    const con = await conectar()
    const sql = "DELETE FROM Produtos WHERE id=?"
    const retorno =  await con.query(sql, id)
    return retorno[0]
} 