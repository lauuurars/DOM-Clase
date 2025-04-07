
//  Ejercicio 1 - Seleccionar elementos del DOM

/** 1.1. Selecionar x id
 * 1. Seleccionar el elemento por su id "titulo"
 * 2. Mostrar su contenido en consola
 */

/* 
let titulo = document.getElementById('titulo');
console.log(titulo); //se muestra el contenido html del elemento titulo
*/

/* ------------------ Modificar texto en el html desde JS

let titulo = document.getElementById('titulo'); //se selecciona el elemento por su id titulo
titulo.innerText = 'Hola Mundo'; //se cambia el texto del elemento titulo por Hola Mundo
console.log(titulo); 

*/


/** 1.2. Seleccionar x clase
 * 1. Seleccionar el div por su clase main-div 
 * 2. Mostrar su contenido en consola
 * 3. Mostrar su contenido en consola con innerHTML
 * 4. Mostrar su contenido en consola con innerText
 */

/*
const miDiv = document.getElementsByClassName('main-div'); //se selecciona el div por su clase main-div
console.log(miDiv); //se muestra el contenido html del div
*/


/* ---------- Segunda Forma de resolver

const miDiv = document.querySelector('main-div')[0]; //se selecciona el div y se muestra su primer elemento [0]
console.log(miDiv); //se muestra el contenido html del div

*/


/* -------------- Tercera Forma de resolver 

const miDiv = document.querySelector('.main-div'); //se especifica que es una clase agregando . 
console.log(miDiv.innerHTML); //se muestra el contenido html del div (etiquetas)
console.log(miDiv.innerText); //se muestra el contenido de texto del div sin etiquetas html
console.log(miDiv); //se muestra el contenido html del div sin etiquetas html

*/


// 1.3. Por etiqueta
/**
 * 1. Seleccionar el elemento por su etiqueta "img"
 * 2. Mostrar su contenido en consola
 * 3. Mostrar el contenido de los atributos src y alt por consola
 */

/*
let img = document.getElementsByTagName('img'); //se selecciona el elemento por su etiqueta img
console.log(img); 
*/

/* --------------- Segunda Forma de resolver

let img = document.getElementsByTagName('img')[0]; //se selecciona el primer elemento por su etiqueta img
console.log(img); //se muestra el contenido html del elemento 0 de img

*/

/* --------------- Tercera Forma de resolver

let img = document.querySelector('img'); //solo selecciona el primer elemento por su etiqueta img
console.log(img); //se muestra el contenido html del elemento 0 de img

*/

/* ---------------- Cuarta forma de resolver

let img = document.querySelectorAll('img'); //se selecciona todos los elementos por su etiqueta img
console.log(img)

*/

// 1.4. Por querySelector
/**
 * 1. Seleccionar el elemento por su id "titulo"
 * 2. Mostrar su contenido en consola
 * 3. Seleccionar el div por su clase main-div 
 * 4. Mostrar su contenido en consola
 * 5. Seleccionar el elemento por su etiqueta "img"
 * 6. Mostrar su contenido en consola
 * 7. Mostrar el contenido de los atributos src y alt por consola
 */

//----------------- Solución 

let titulo = document.querySelector('#titulo'); //se selecciona el elemento por su id titulo
console.log(titulo);

let mainDiv = document.querySelector('.main-div'); //seleccionamos el div por su clase main-div, usando el .
console.log(mainDiv);

let img = document.querySelector('img'); //seleccionamos el primer elemento por su etiqueta img
console.log(img);
console.log(img.src); //se muestra el contenido del atributo src de la imagen
console.log(img.alt); //se muestra el contenido del atributo alt de la imagen




