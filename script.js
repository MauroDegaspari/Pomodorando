const html = document.querySelector('html')
const focobtn = document.querySelector('.app__card-button--foco')
const curtobtn = document.querySelector('.app__card-button--curto')
const logobtn = document.querySelector('.app__card-button--longo') 

focobtn.addEventListener('click', () =>{
    html.setAttribute('data-contexto', 'foco')
})

curtobtn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
})

logobtn.addEventListener('click', () =>{
   html.setAttribute('data-contexto','descanso-longo') 
})

