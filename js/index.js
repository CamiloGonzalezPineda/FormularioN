const formulario = document.querySelector('form')
const btn = document.querySelector('.btn')
const inputs = document.querySelectorAll('input,textarea')
window.addEventListener('pageshow', ()=>{
    formulario.reset()
})


btn.addEventListener('click', ()=>{

let mostrar = false

             const mensajeE = document.querySelector('.red')
             if(mensajeE){mensajeE.remove()}

inputs.forEach(bt => {
   if(bt.value === ""){ // evalua que este vacio
    mostrar= true // muestra el boton
   }
});
             if(mostrar){

                const ale= document.createElement('div') // crea un div 
                ale.classList.add('red') // da un clase al div
                const tex = document.createElement('p') // crea un parrafo 
                tex.textContent = "Completa los campos" // le agrega texto al parrafo 
                
                ale.appendChild(tex) // crea los bottones 
                formulario.appendChild(ale) // cre el boton

                  setTimeout(() => {
    ale.remove()
  }, 1000);

 
            }
})

