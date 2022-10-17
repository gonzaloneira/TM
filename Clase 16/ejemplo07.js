const caja = document.getElementsByClassName('caja')[0]
const rojo = document.getElementById('rojo')
const borde = document.getElementById('borde')
const reset = document.getElementById('reset')

rojo.addEventListener('click', function () {
    caja.classList.add('rojo')

}
)

borde.addEventListener('click', function () {
    caja.classList.add('borde')

}
)

reset.addEventListener('click', function () {
    caja.classList.remove('rojo', 'borde')

}
)