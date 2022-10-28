const numeros = []
for(let i = 0;i<5;i++){
    const num = parseInt(prompt('Ingrese un número',''))
    numeros[i] = num
}

let mayor = 0
for(let i=0; i < numeros.length;i++){
    if(numeros[i]>mayor){
        mayor = numeros[i]
    }
}

document.write(`El mayor es ${mayor}`)