// function validar_formulario(){ }
const validar_formulario = () => {

    const descricao = document.getElementById('descricao').value
    const preco = document.getElementById('preco').value
    const quantidade = document.getElementById('quantidade').value
    if(!descricao){
        alerta_erro('Faltou campo descrição!')
        return false

    } else if (!preco){
        alerta_erro('Faltou campo preço!')
        return false
        
    } else if (!quantidade){
        alerta_erro('Faltou campo quantidade!')
        return false
    } 
    return true
}