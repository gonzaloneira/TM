let x  = 1
const cuantos = 5
let suma = 0

while(x <= cuantos){
    const valor = parseInt(prompt(`Ingrese el valor ${x} de ${cuantos}`,''))
    suma += valor //también se puede escribir como "suma = suma + valor"
    x++
}

document.write(suma)