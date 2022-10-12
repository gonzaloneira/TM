const num1 = parseInt(prompt('Ingrese el primer número',''))
const num2 = parseInt(prompt('Ingrese el segundo número',''))
const num3 = parseInt(prompt('Ingrese el tercer número',''))

if(num1>num2 && num1>num3){
    document.write(`el número mayor es ${num1}`)
}

else if(num2>num3){
    document.write(`el número mayor es ${num2}`)
}

else{
    document.write(`el número mayor es ${num3}`)
}