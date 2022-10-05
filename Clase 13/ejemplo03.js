const nombre = prompt('Ingrese su nombre', '');//esto es para que el usuario cargue el nombre en una ventana y queda almacenado como variable. El dato siempre es tomado como cadena de texto.
const edad = prompt('Ingrese su edad', '');

document.write(`Hola, mi nombre es ${nombre}, así que tienes ${edad}`)

console.log(nombre);