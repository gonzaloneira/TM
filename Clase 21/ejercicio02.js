const distancia = parseInt(prompt('Ingrese la distancia', ''))

if (Number.isNaN(distancia)) {
    alert('Ingrese una distancia válida en números')
}
if(distancia >=0 && distancia <=1000){
    document.write('pie')
}
else if(distancia >1000 && distancia <=10000){
    document.write('bicicleta')
}
else if(distancia >10000 && distancia <=30000){
    document.write('colectivo')
}
else if(distancia >30000 && distancia <=100000){
    document.write('auto')
}
else if(distancia >100000){
    document.write('avión')
}