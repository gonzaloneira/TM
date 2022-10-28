const edad = parseInt(prompt('Ingrese su edad', ''))

if (Number.isNaN(edad)) {
    alert('Ingrese una edad válida en números')
}
else if (edad >= 18) {
    alert(`Con ${edad} años puedes conducir`)
}
else (
    alert(`Con ${edad} años NO puedes conducir`)
)