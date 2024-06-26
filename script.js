// .classList -> alterar dinamicamente a classe 

const html = document.querySelector('html')
const focobtn = document.querySelector('.app__card-button--foco')
const curtobtn = document.querySelector('.app__card-button--curto')
const logobtn = document.querySelector('.app__card-button--longo') 
const image = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const playMusic = document.querySelector('#alternar-musica')
const btnStart = document.querySelector('#start-pause')
const btnIniciarouPausar = document.querySelector('#start-pause span')
const tempoTela = document.querySelector('#timer')
const musica = new Audio('sons/luna-rise-part-one.mp3')
const audioPlay = new Audio('sons/play.way')
const audioPause = new Audio('sons/pause.mp3')
const audioFinal = new Audio('sons/beep.mp3')

musica.loop = true

let tempoDescrescente = 1500
let intervalo = null

function alterarContexto(contexto){
    mostrarTempo()
    html.setAttribute('data-contexto', contexto)
    image.setAttribute('src',`imagens/${contexto}.png`)
    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
            focobtn.classList.add('active') 
            curtobtn.classList.remove('active')
            logobtn.classList.remove('active') 
            break;
        case 'descanso-curto':
            titulo.innerHTML = `Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa.</strong>`
            curtobtn.classList.add('active')
            focobtn.classList.remove('active')
            logobtn.classList.remove('active')
            break;

        case 'descanso-longo':
            titulo.innerHTML = `Hora de respirar!<br>
            <strong class="app__title-strong">Faça uma pausa lonja.</strong>` 
            logobtn.classList.add('active')
            focobtn.classList.remove('active')
            curtobtn.classList.remove('active')
            break;
        default:
            break;
    }
}

playMusic.addEventListener('change', () => {
    if(musica.paused){
        musica.play();
    }else{
        musica.pause();
    }
})

focobtn.addEventListener('click', () =>{
        tempoDescrescente = 1500
        alterarContexto('foco')
})

curtobtn.addEventListener('click', () => {
    tempoDescrescente = 300
    alterarContexto('descanso-curto')
})

logobtn.addEventListener('click', () =>{
    tempoDescrescente = 900
   alterarContexto('descanso-longo')
})


//Cronometro
const contagemRegressica = () => {
    if(tempoDescrescente <= 0){
        audioFinal.play()
        alert("tempo finalizado")
        zerar()
        return
    }

    tempoDescrescente -= 1
    mostrarTempo()
}

btnStart.addEventListener('click', iniciarOuPausarContagem)

function iniciarOuPausarContagem(){
    if(intervalo){
        audioPause.play()
        zerar()
        return
    }
    audioPlay.play()
    intervalo = setInterval(contagemRegressica, 1000);
    btnIniciarouPausar.textContent = "Pausar"

}

function zerar(){
    clearInterval(intervalo)
    btnIniciarouPausar.textContent = "Retomar"
    intervalo = null
}

function mostrarTempo(){
    const tempo = new Date(tempoDescrescente * 1000)
    const tempoFomatado = tempo.toLocaleTimeString('pt-BR', {minute: '2-digit', second: '2-digit'})
    tempoTela.innerHTML = `${tempoFomatado}`
}


mostrarTempo()