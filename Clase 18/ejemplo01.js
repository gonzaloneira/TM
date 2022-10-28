const datosUsuario = [
    {
        nombre: 'Flavia', password: 'abc12344'
    },
    {
        nombre: 'Laura', password: '215478'
    },
    {
        nombre: 'Pablo', password: 'abc34frg'
    },
    {
        nombre: 'Lorena', password: 'kih14juh'
    },
    {
        nombre: 'Virginia', password: 'abc'
    }
]

const soloPassword = datosUsuario.map(function (p) {
    return p.password
})

console.log(soloPassword)