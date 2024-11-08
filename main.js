const navBtn = document.getElementById('navBtn')
const navBtnIcon = document.getElementById('navBtnIcon')
const navList = document.getElementById('navList')

navBtn.addEventListener('click', () => {
    navList.classList.toggle('hidden')
    if (navBtnIcon.classList.contains('fa-bars-staggered')){
        navBtnIcon.classList.add('fa-bars')
        navBtnIcon.classList.remove('fa-bars-staggered')
        // navBtnIcon.classList.replace('fa-bars-staggered', 'fa-bars')
    }else {
        navBtnIcon.classList.add('fa-bars-staggered')
        navBtnIcon.classList.remove('fa-bars')
        // navBtnIcon.classList.replace('fa-bars', 'fa-bars-staggered')
    }
} )

const carritoBtnAbrir = document.getElementById('carritoBtnAbrir')
const carritoBtnCerrar = document.getElementById('carritoBtnCerrar')
const carritoMenu = document.getElementById('carritoMenu')

function desplegarCarrito() {
    carritoMenu.classList.toggle('hidden')
    if (!navList.classList.contains('hidden')){
        navList.classList.toggle('hidden')
    }
}

carritoBtnAbrir.addEventListener('click', desplegarCarrito)
carritoBtnCerrar.addEventListener('click', desplegarCarrito)


const botones = document.querySelectorAll('.addCarritoBtn')
const cerrarCarritoBtn = document.querySelectorAll('.modalBtnCerrar')
const mensajeVentanaModal = document.getElementById('ventanaModal')

function mostrarModal() {
    mensajeVentanaModal.classList.toggle('hidden')
}

// addCarritoBtn.addEventListener('click', mostrarModal)

botones.forEach(boton => {
    boton.addEventListener('click', mostrarModal)
})

cerrarCarritoBtn.forEach(botonCerrar => {
    botonCerrar.addEventListener('click', mostrarModal)
})