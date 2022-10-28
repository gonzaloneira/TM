const empleados =[
    {
        Nombre: 'Flavia', trabajo: 'desarrollador'
    },
    {
        Nombre: 'Gonzalo', trabajo: 'abogado'
    },
    {
        Nombre: 'Gisela', trabajo: 'contador'
    },
    {
        Nombre: 'Alejandro', trabajo: 'desarrollador'
    },
    {
        Nombre: 'Joakin', trabajo: 'científico'
    },
    {
        Nombre: 'Pablo', trabajo: 'desarrollador'
    }

]

const desarrollador = empleados.filter(
    empleado => empleado.trabajo =='desarrollador'
)
console.log(desarrollador) //muestra los desarrolladores


const noDesarrollador = empleados.filter(
    empleado => empleado.trabajo !=='desarrollador'
)
console.log(noDesarrollador) //muestra los que no son desarrolladores