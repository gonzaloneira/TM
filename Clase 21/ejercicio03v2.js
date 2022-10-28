const numeros = [10, 20, 305, 586, 132, 65, 32, 1]

var mayor = 0

for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i]
    }
}

console.log(`el mayor de [${numeros}] es ${mayor}`)