
// Ejercicio2: Cambiar los Atributos de los elementos del DOM

// 2.1 Seleccionar elemento del DOM
/** 
 * 1. Seleccionar el elemento h1 con querySelector
 * 2. Cambiar el titulo por "Hola Mundo"
 * 3. Ver el efecto en el navegador
 */


//-------------------- SOLUCIÓN

let h1 = document.querySelector('#titulo');
h1.innerText = "Hola Mundo :3 !!!!";
console.log(h1);


// 2.2 Cambiar el atributo src de la imagen
/**
 * 1. Seleccionar la imagen con querySelector
 * 2. Cambiar su atributo src por "imagen/carita.png"
 * 3. Ver el efecto en el navegador
 */

//--------------------- SOLUCIÓN

let img = document.querySelector('img');
img.src = "imagen/carita.png";
img.alt = "Carita";
console.log(img);


// 2.3 Cambiar la clase del div
/**
 * 1. Seleccionar el div main-div con querySelector
 * 2. Cambiar su clase por "new-div"
 * 3. Ver el efecto en el navegador
 */

// -------------- SOLUCIÓN
/*

let div = document.querySelector('.main-div');
div.className = "new-div";
console.log(div);

*/

// 2.4 Cambiar el atributo href del enlace
/**
 * 1. Seleccionar el enlace con querySelector usando su id
 * 2. Mostrar su contenido en consola
 * 3. Mostrar el contenido de su atributo href por consola con getAttribute
 * 2. Cambiar su atributo href por "https://www.icesi.edu.co"
 * 3. Cambiar su texto por "Universidad Icesi"
 * 4. Cambiar su atributo target por "_blank"
 * 5. Cambiar su clase por "boton"
 * 6. Ver el efecto en el navegador
 * 7. Eliminar la clase del enlace
 * 8. Ver el efecto en el navegador
 */

//----------------- SOLUCIÓN 

let enlace = document.querySelector('#enlace');
console.log(enlace.innerHTML);
console.log(enlace.getAttribute('href')); //muestra el contenido del atributo href
enlace.setAttribute('href', 'https://www.icesi.edu.co'); //cambiamos el enlace usando setAttribute
enlace.innerText = "Universidad Icesi"; //modificamos el texto del enlace
enlace.setAttribute('target', '_blank'); //agregamos el atributo target y el valor blank
enlace.className = ('class', 'boton'); //modificamos la clase del enlace a la clase "boton"
enlace.removeAttribute('class'); //eliminamos la clase del enlace
console.log(enlace); //imprimimos nuestro enlace modificado

// 2.5 Cambiar el estilo del div
/**
 * 1. Seleccionar el div con querySelector
 * 2. Cambiar su estilo por:
 *    - background-color: green
 *    - color: white
 *    - font-size: 30px
 *    - font-family: Arial
 *    - text-align: center
 *    - padding: 20px
 *    - border-radius: 10px
 * 3. Ver el efecto en el navegador
 */

//---------------- SOLUCIÓN

let div2 = document.querySelector('.main-div');
div2.style.backgroundColor = "#a48fd4"; //cambiamos el color de fondo a verde
div2.style.color = "white";
div2.style.fontSize = "30px"; //cambiamos el tamaño de la fuente a 30px
div2.style.fontFamily = "Arial"; //cambiamos la fuente a Arial
div2.style.textAlign = "center"; //centramos el texto
div2.style.padding = "20px"; //agregamos un padding de 20px
div2.style.borderRadius = "10px"; //agregamos un border-radius de 10px
console.log(div2);

