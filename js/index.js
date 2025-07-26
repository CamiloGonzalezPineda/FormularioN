const formulario = document.querySelector('form')
const btn = document.querySelector('.btn')
const btnD= document.querySelector('.back')

window.addEventListener('pageshow', ()=>{
    formulario.reset()
})

btnD.addEventListener('click',(e)=>{
    window.location.href="index.html"
})