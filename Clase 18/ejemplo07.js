const nombre = prompt('Ingrese su nombre', '')
const today = new Date()
const hrs = today.getHours()

if (hrs < 12) {
    document.write(`Buenos días ${nombre}`)
} else if (hrs >= 12 && hrs <= 19) {
    document.write(`Buenos tardes ${nombre}`)
} else {
    document.write(`Buenas noches ${nombre}`)
}