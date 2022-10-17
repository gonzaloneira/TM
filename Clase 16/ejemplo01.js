const items = document.getElementsByClassName('item')

function CambiarVisibilidad(numItem){
    const item = items[numItem] 
    if(item.style.visibility == ''){
        item.style.visibility = 'hidden'
    } else {
        item.style.visibility = ''
    }
}

function CambiarDisplay(numItem){
    const item = items[numItem]
    if(item.style.display == ''){
        item.style.display = 'none'
    } else {
        item.style.display = ''
    }
}