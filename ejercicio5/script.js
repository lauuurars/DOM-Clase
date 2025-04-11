
/**
 * Ejercicio 5. Agregar y Eliminar Elementos al DOM
 *  
 * 1. Seleccionar los elementos: contenedor y boton con los que se va a trabajar
 * 2. Crear un nuevo elemento parafo con createElement en el documento
 * 3. Agregar el texto al nuevo parafo creado
 * 4. Adicionar el elemento creado al contenedor selecccioando con appendChild
 * 5. El codigo anterior incluirlo en una nueva funcion crearParafo()
 * 6. Adicionar al boton un escuchador para el evento click que  llame la funcion
 *    crear_parrafo()
 * 
 */

//1. 

const contenedor = document.querySelector('#contenedor') //seleccionamos el contenedor para añadir un nuevo elemento
const botonAgregar = document.querySelector('#botonAgregar') //seleccionamos el boton
const botonEliminar = document.querySelector('#botonEliminar') //seleccionamos el boton eliminar
console.log(contenedor, botonAgregar, botonEliminar)


let nuevoParrafo = document.createElement('p') //creamos el nuevo elemento parrafo 
nuevoParrafo.textContent = 'Soy un nuevo párrafo :3' //agregamos el texto al nuevo parrafo creado 
contenedor.appendChild(nuevoParrafo) //adicionamos el nuevo parrafo al contenedor seleccionado

function crearParrafo () {
    let nuevoParrafo = document.createElement('p') 
    nuevoParrafo.innerText = 'Soy un nuevo párrafo :3'
    contenedor.appendChild(nuevoParrafo) 
}

botonAgregar.addEventListener('click', crearParrafo) //agregamos el evento click al boton para que llame a la funcion crearParrafo

//7. Eliminar el párrafo

botonEliminar.addEventListener('click', function (){
    let elementoEliminar = document.querySelector('p')
    if (!elementoEliminar) {
        alert("Ya no hay elementos :(") //si no hay elementos para eliminar, mostramos un mensaje de alerta
        return //si no hay elementos para eliminar, salimos de la función
    }
    elementoEliminar.remove() 
}) 




