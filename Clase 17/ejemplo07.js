const frutas = ['palta','naranja','banana','manzana','anana']

console.log(frutas)
console.log(frutas.sort())
/////////////////////////////////////////////////////////////////

const numeros = [78,10,7,1,2]
console.log(numeros.sort())

const num = numeros.sort(function(a,b){
    return a-b
}) //para ordenar números de menor a mayor

const num2 = numeros.sort(function(a,b){
    return b-a
}) //ordena al revés

console.log(num)
console.log(num2)

/////////////////////////////////////////////////////////////////

const palabras = ['flavia','pablo','abeja','perro','animal']

console.log(palabras.sort().reverse()) //ordena de Z a A

const palabrs = palabras.sort(function(b,a){
    if(b>a) return -1; return 0
}) //hace lo mismo que reverse
console.log(palabrs)