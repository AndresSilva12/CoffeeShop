// const formulario = document.querySelector('form')
// formulario.addEventListener('submit', () => {
//     const nombre = formulario.elements['nombre']
//     const apellido = formulario.elements['apellido']
//     const email = formulario.elements['email']
//     const mensaje = formulario.elements['mensaje']

//     const infoCliente = {
//         nombre: nombre.value,
//         apellido: apellido.value,
//         email: email.value,
//         mensaje: mensaje.value
//     }

//     const archivoJson = JSON.stringify(infoCliente)
//     alert('Datos enviados correctamente')
// })

const anterior = document.querySelector(".prev")
const siguiente = document.querySelector(".next")
const slider = document.querySelector(".hero-list")
let indice = 0;
const totalSlides = document.querySelectorAll(".hero-list > div").length;

function slideSiguiente() {
    indice = (indice + 1)% totalSlides
    slider.style.transform = `translateX(-${indice * 100}vw)`;
}

anterior.addEventListener('click', slideSiguiente)
siguiente.addEventListener('click', slideSiguiente)

