const alerta_erro = (msg) => {
    //function alerta_erro = (msg) { }
    const alerta_erro = (msg) => {
        const alerta = document.getElementById('Alerta')
        alerta.hidden = false
        alerta.innerHTML = msg

        setTimeout(() => {
            alerta.hidden = true
            alerta.innerHTML = ''
        }, 5000)
    } 
}