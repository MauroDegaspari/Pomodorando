// .classList -> alterar dinamicamente a classe 


const html = document.querySelector('html')
const focobtn = document.querySelector('.app__card-button--foco')
const curtobtn = document.querySelector('.app__card-button--curto')
const logobtn = document.querySelector('.app__card-button--longo') 
const image = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const playMusic = document.querySelector('#alternar-musica')
const musica = new Audio('sons/luna-rise-part-one.mp3')
const btnStart = document.querySelector('#start-pause')
musica.loop = true

let tempoDescrescente = 5
let intervalo = null

function alterarContexto(contexto){
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
        alterarContexto('foco')
})

curtobtn.addEventListener('click', () => {
    alterarContexto('descanso-curto')
})

logobtn.addEventListener('click', () =>{
   alterarContexto('descanso-longo')
})


//Cronometro
const contagemRegressica = () => {
    if(tempoDescrescente <= 0){
        zerar()
        alert("tempo finalizado")
        return
    }

    tempoDescrescente -= 1
    console.log('Temporizador: ' + tempoDescrescente)
}

btnStart.addEventListener('click', iniciarOuPausarContagem)

function iniciarOuPausarContagem(){
    if(intervalo){
        zerar()
        return
    }
    intervalo = setInterval(contagemRegressica, 1000);
}

function zerar(){
    clearInterval(intervalo)
    intervalo = null
}