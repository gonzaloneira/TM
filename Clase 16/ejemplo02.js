const link = document.getElementById('link')

link.addEventListener('click', function(e){
    e.preventDefault() //frena que funcione el link
    alert('Quisiste ir a: ' + e.currentTarget.href)
})

