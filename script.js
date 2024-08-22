var ind_imagem = 1
var opacidade = 1
var reduzir = true



function trocar_imagem(){
    const imagem = document.getElementById('imagem')
    ind_imagem++

    if (ind_imagem > 7)
        ind_imagem = 1
    imagem.src = 'https://softgraf.com/img/img' + ind_imagem + '.jpg' 
}


function mudar_opacidade(){
    const imagem= document.getElementById('imagem')

    if (reduzir)
    opacidade -= 0.1
    else
       opacidade += 0.1

    imagem.style.opacity = opacidade 

    if ((opacidade < 0.1) || (opacidade > 1))
        reduzir = !reduzir
}

function mover_imagem(){
    const imagem = document.getElementById('imagem')
    let margem_esq = parseInt(imagem.style.marginLeft);
    let larg_tela = window.innerWidth
    let larg_img = imagem.clientWidth

    if (Number.isNaN(margem_esq))
        margem_esq = 50
    else 
       margem_esq += 50

    if (margem_esq > larg_tela)
        margem_esq = -larg_img
    
    imagem.style.marginLeft = margem_esq + 'px';
}

function auto_mover(){
    setInterval('mover_imagem()', 500)
}

function auto_trocar(){
    setInterval('trocar_imagem()', 1000)
}

function auto_opacidade(){
    setInterval('mudar_opacidade()', 350)
}

