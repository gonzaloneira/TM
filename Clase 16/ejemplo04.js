const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function(e){
    e.preventDefault()

    if(e.currentTarget.nombre.value == ''){
        alert('El campo nombre está vacío')
        return
    }

    if(e.currentTarget.mensaje.value == ''){
        alert('El campo mensaje está vacío')
        return
    }

    alert(`Gracias ${e.currentTarget.nombre.value} por enviarnos el siguiente mensaje "${e.currentTarget.mensaje.value}"`)

})