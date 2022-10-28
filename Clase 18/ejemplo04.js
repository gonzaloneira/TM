function getNombreDiasForMes(mes) {
    if (Number.isNaN(mes)) return false //si o si tiene que ser un número
    if (mes < 1 || mes > 12) return false //si o si tiene que estar comprendido entre 1 y 12
    mes-- //esto es para que el mes 10 se identifique con el elemento 9 (porque los meses son 12 elementos que van del 0 al 11)


    const data = [
        {
            nombre: 'enero', dias: 31
        },
        {
            nombre: 'febrero', dias: 28
        },
        {
            nombre: 'marzo', dias: 31
        },
        {
            nombre: 'abril', dias: 30
        },
        {
            nombre: 'mayo', dias: 31
        },
        {
            nombre: 'junio', dias: 30
        },
        {
            nombre: 'julio', dias: 31
        },
        {
            nombre: 'agosto', dias: 31
        },
        {
            nombre: 'septiembre', dias: 30
        },
        {
            nombre: 'octubre', dias: 31
        },
        {
            nombre: 'noviembre', dias: 30
        },
        {
            nombre: 'diciembre', dias: 31
        }
    ]
    return data[mes]
}

const numMes = parseInt(prompt('Ingrese el mes del año', ''))
const resultado = getNombreDiasForMes(numMes)

if(resultado){
    alert(`El mes de ${resultado.nombre} tiene ${resultado.dias} días`)
} else {
    alert('Mes inválido')
}



console.log(resultado)