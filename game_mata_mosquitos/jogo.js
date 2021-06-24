//Encontrar altura e largura da página para a geração de inimigos
var altura = 0
var largura = 0
var vidas = 3
var tempo = 10

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal')
{
    criaMosquitoTempo = 1500
}
else if(nivel === 'dificil')
{
    criaMosquitoTempo = 1000
}
else if(nivel === 'BaguioDoidoMemoFi')
{
    criaMosquitoTempo = 500
}

//Funções
function ajustaTamanhoPalcoJogo()
{
    //Define a altura e largura em que o jogo será exibida
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function()
                {
                    tempo-=1
                    if(tempo < 0 )
                    {
                        clearInterval(cronometro)
                        clearInterval(criaMosquito)
                        window.location.href = 'vitoria.html'
                    }
                    else
                    {
                        document.getElementById('cronometro').innerHTML = tempo
                    }
                    
                } , 1000)

function posicaoRandomica()
{
    //Remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito'))
    {
        document.getElementById('mosquito').remove()

        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

        vidas--

        if(vidas == 0)
        {
            window.location.href = "fim_jogo.html"
        }

    }

    //Seleciona posições aleatorias para o surgimento dos mosquitos, arrendonda o valor e mantem eles dentor do alcance de largura e altura
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 90 ? 0 : posicaoX
    posicaoY = posicaoY < 90 ? 0 : posicaoY

    //criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png' 
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left =  posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function()
    {
        this.remove()
    }

    //Cria o mosquito dentro do body
    document.body.appendChild(mosquito)
}

function tamanhoAleatorio()
{
    var classe = Math.floor(Math.random() * 3)

    switch(classe)
    {
        case 0:

            return 'mosquito1'
        case 1:

            return 'mosquito2'
        case 2:
            
            return 'mosquito3'
    }
    
}

function ladoAleatorio()
{
    var classe = Math.floor(Math.random() * 2)

    switch(classe)
    {
        case 0:

            return 'ladoA'
        case 1:

            return 'ladoB'
    }

    
}
