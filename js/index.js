// selecionamos elementos del DOM ue se necesitan manipular
const formulario = document.querySelector('form') 
const btn = document.querySelector('.btn')
const inputs = document.querySelectorAll('.texto')
const alerta = document.querySelector('.alerta')

// Reseteamos el formulario automaticamente cuando se regrasa a la pagina
window.addEventListener('pageshow', () => {
    formulario.reset()
})

// Evento para manejar la validacion antes de enviar el formulario
btn.addEventListener('click', (e) => {
   
e.preventDefault()  // Prevenir el envio automatico e inmediato 
    let mostrar = false // Flag de control para mostrar el mendaje de alerta si hay campos vacios 



    inputs.forEach(inp => { // Recoremos todos los inputs para hacer la validar si hay campos vacios 
        if (inp.value.trim() === "") {
            mostrar = true // mostramos la alerta si al menos uno esta vacio
        }
    });

    if (mostrar) {
            const mostraE = document.querySelector('.red') // selecionamos la clase .Red creada abajo para manipularla y poder removerla si ya existe, así evitar duplicaciones.                                       
    if (mostraE) { mostraE.remove() }
            // Creamos la alerta dinamicamente si hay campo vacio 
        const ale = document.createElement('div') // crea un div 
        ale.classList.add('red') // Da un clase al div
        const tex = document.createElement('p') // Crea un parrafo 
        tex.textContent = "Fill in the empty field" // Le agrega texto al parrafo 

        ale.appendChild(tex) // Inserta el parrafo con el texto en el div que se creo
        alerta.appendChild(ale) // agrega el botton en la parte de arriiba del div con la clase alerta.


       
        setTimeout(() => { // Temporizador para que la alerta se remueva luego de un segundo de aparecer.
            ale.remove()
        }, 1000);
    }else{
        formulario.submit() // Si todos los campos estan vacios se envia el formulario 
    }

})


