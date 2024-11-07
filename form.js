const formulario = document.querySelector('form')
formulario.addEventListener('submit', () => {
    const nombre = formulario.elements['nombre']
    const apellido = formulario.elements['apellido']
    const email = formulario.elements['email']
    const mensaje = formulario.elements['mensaje']

    const infoCliente = {
        nombre: nombre.value,
        apellido: apellido.value,
        email: email.value,
        mensaje: mensaje.value
    }

    const archivoJson = JSON.stringify(infoCliente)
    alert('Datos enviados correctamente')
})