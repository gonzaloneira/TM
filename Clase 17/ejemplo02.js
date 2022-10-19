function OcultarMensaje(){
    const mensaje = document.getElementById('mensaje')
    mensaje.style.display = 'none'
}

setTimeout(OcultarMensaje,5000) //oculta el div después de 5 segundos