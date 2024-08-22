// importa o pacote com o protocolo http e salva no objeto http
const http = require('http')

//representa a maquina local
const hostname = '127.0.0.1'

// identifica este programa dentro da maquina local
const port = 3000

// cria um objeto servidor, o qual receber uma requisição e devolve uma resposta
const servidor = http.createServer((req, res) => {
    res.statusCode = 200; // OK
    res.setHeader('Content-Type', 'text/html')
    res.end('<h2>Hello Word</h2>') 
})

// roda o servidor: fica ouvindo na porta 3000 
servidor.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`)
})