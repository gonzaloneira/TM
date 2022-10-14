function TodosLosParrafos() {
    const allparrafos = document.querySelectorAll('p')
    //const allparrafos = document.getElementsByTagName("p")<-cualquiera de los 2 hace lo mismo
    console.log(allparrafos)

    const num = allparrafos.length

    alert(`Hay ${num} elementos <p> dentro de este documento.`)
}

//TodosLosParrafos()

function ParrafosCaja1() {
    const caja1 = document.getElementById('caja1')
    const caja1parrafos = caja1.getElementsByTagName('p')
    console.log(caja1parrafos)

    const num = caja1parrafos.length

    alert(`Hay ${num} elementos <p> dentro de la caja azul.`)
}

function ParrafosCaja2() {

    const caja2parrafos = document.querySelectorAll('#caja2 p')
    console.log(caja2parrafos)

    const num = caja2parrafos.length

    alert(`Hay ${num} elementos <p> dentro de la caja roja.`)
}