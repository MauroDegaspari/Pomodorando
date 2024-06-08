const html = document.querySelector('html')
const focobtn = document.querySelector('.app__card-button--foco')
const curtobtn = document.querySelector('.app__card-button--curto')
const logobtn = document.querySelector('.app__card-button--longo') 
const image = document.querySelector('.app__image')

focobtn.addEventListener('click', () =>{
    html.setAttribute('data-contexto', 'foco')
    image.setAttribute('src','imagens/foco.png')
})

curtobtn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
    image.setAttribute('src', 'imagens/descanso-curto.png')
})

logobtn.addEventListener('click', () =>{
   html.setAttribute('data-contexto','descanso-longo') 
   image.setAttribute('src','imagens/descanso-longo.png')
})

