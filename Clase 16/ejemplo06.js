const alternar = document.getElementsByClassName('alternar')[0] //el 0 lo usa porque si tengo varios botones con la misma class, el 0 indica que tome el primero de todos los botones

alternar.addEventListener('click', function(e){
    e.currentTarget.classList.toggle('activo')
}
)

//classList representa una lista de clases asignadas al elemento
//toggle cambiar una clase
//add agrega una clase
//remove remueve una clase