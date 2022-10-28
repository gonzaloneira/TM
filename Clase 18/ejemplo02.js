const alumnos = [
    {
        nombre: 'Flavia', edad: 10
    },
    {
        nombre: 'Pablo', edad: 3
    },
    {
        nombre: 'Leo', edad: 5
    },
    {
        nombre: 'Santi', edad: 2
    },
    {
        nombre: 'Emma', edad: 4
    },
    {
        nombre: 'Joaco', edad: 3
    }
]

const chicos = alumnos.filter(
    alumno => alumno.edad <= 4
)

console.log(chicos)

for(let i=0; i<chicos.length; i++){
    document.write(`<p>Niño: ${chicos[i].nombre}, cuya edad es ${chicos[i].edad} </p>`)
}