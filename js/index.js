const formulario = document.querySelector('form')
const btn = document.querySelector('.btn')
const inputs = document.querySelectorAll('.texto')
const alerta = document.querySelector('.alerta')
window.addEventListener('pageshow', () => {
    formulario.reset()
})


btn.addEventListener('click', (e) => {
   
e.preventDefault()
    let mostrar = false

    const mostraE = document.querySelector('.red')
    if (mostraE) { mostraE.remove() }

    inputs.forEach(inp => {
        if (inp.value.trim() === "") {
            mostrar = true
        }
    });

    if (mostrar) {

        const ale = document.createElement('div') // crea un div 
        ale.classList.add('red') // da un clase al div
        const tex = document.createElement('p') // crea un parrafo 
        tex.textContent = "Completa los campos" // le agrega texto al parrafo 

        ale.appendChild(tex) // crea los bottones 
        alerta.appendChild(ale) // agrega el botton en la parte de arriiba 

        setTimeout(() => {
            ale.remove()
        }, 1000);
    }else{
        formulario.submit()
    }

})
