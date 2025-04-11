
/**
 * Ejercicio 4. Jerarquia Elementos al DOM
 * ---------------------------------------
 * 1. Capturar los elementos: contenedor, parrafo1 y parrafo2 con queryselector
 * 2. Ir al nodo padre del parrafo1 y mostrar su etiqueta con tagName
 * 3. Mostrar los hijos que tiene el elemento contenedor
 * 3. Mostrar cuantos hijos tiene el elemento contenedor
 * 4. Mostrar el primer hijo de el contenedor con []
 * 5. Mostrar el Primer y último hijo con firstElementChild y lastElementChild
 * 6. Mostrar el texto del siguiente hermano de parrafo1 nextElementSibling
 * 7. Mostrar el id del anterior hermano de parrafo2 previousElementSibling
 * 8. Recorrer la lista de frutas (Nodos hijos) con ayuda del DOM 
 */

  // Capturar los  elementos 

let contenedor = document.querySelector('#contenedor')
let parrafo1 = document.querySelector('#parrafo1')
let parrafo2 = document.querySelector('#parrafo2')

  // Nodo padre

  console.log(parrafo1.parentNode.tagName) //mostramos nodo padre (div)

  // Hijos del contenedor

  console.log(contenedor.children[0],contenedor.children[1],contenedor.children[2]) //mostramos los hijos del contenedor (nodos hijos)
//usamos los [] para acceder a cada hijo del contenedor

  // Primer y último hijo

console.log(contenedor.firstElementChild) //mostramos el primer hijo de div contenedor (h1)
console.log(contenedor.lastElementChild) //mostramos el último hijo (p)

  // Hermanos

    console.log("Hermanos")
    console.log(parrafo1.nextElementSibling) //mostramos el siguiente hermano de parrafo1 (parrafo2)
    console.log(parrafo2.previousElementSibling) //mostramos el hermano anterior de parrafo2 (parrafo1)

  // Recorrer la lista de frutas con el DOM

let frutas = document.querySelector('#frutas') //declaramos variable frutas
console.log(frutas) 
let hijos = frutas.children //capturamos los hijos de la lista de frutas (li)
console.log(hijos)

//recorrer el arreglo o lista con for 

for (const elemento of hijos) {
    console.log(elemento.textContent) //mostramos el contenido de cada elemento (li)
}
