/* *********************** LET CONST ************************/

/* let nombreDeLaPersona = "Fernando";
nombreDeLaPersona = "Luka"; */

/* let nombre;
nombre = "Ruben"; */

/* const nombre = "Luka";
nombre = "Ruben"; */

/* ---------------------------------- */

/* function saludar() {
  let nombre = "Fernando";
}

console.log(nombre);

saludar(); */

/* ******************** ARROW FUNCTIONS **********************/

/* funcion declarada */
/* function sumar(a, b) {
  console.log(a + b);
} */

/* funcion flecha */
/* const sumar = (a, b) => a + b;
const resultadoSuma = sumar(5, 9); */

/* *************** DESESTRUCTURACIÓN DE OBJETOS **************/

/* const persona1 = {
  nombre: "Luka",
  edad: 25,
  nacionalidad: "Argentina",
}; */

/* console.log(persona1.nombre);
const nombrePersona = persona1.nombre; */

/* const { nombre, nacionalidad } = persona1;
console.log(nombre);
console.log(nacionalidad); */

/* ************** DESESTRUCTURACIÓN / OMISIÓN **************/

/* const numeros = [1, 2, 3, 4, 5, 6];

const [primero, , tercero] = numeros;
const numero1 = numeros[0];

console.log(primero);
console.log(tercero); */

/* ************** OPERADOR SPREAD ARRAYS**************/

/* const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];

const listaCompleta = [...lista1, ...lista2];
console.log(listaCompleta); */

/* 
const productos=[]
productos=[...this.productos, productoNuevo]
*/

/* const persona = { nombre: "Federico", edad: 20 };
const personaActualizada = { ...persona, nacionalidad: "Argentina" };

carrito = [];
const producto = { descripcion: "Arroz", precio: 20 };
const productoSeleccionado = { ...producto, unidades: 1 };
carrito = [...carrito, productoSeleccionado]; */

/* ************** TEMPLATE STRING/PLANTILLAS LITERALES **************/

/* const nombre = "Luka";
const edad = 20;

console.log("Hola soy " + nombre + "y mi edad es: " + edad);
console.log(`Hola soy  ${nombre}  y mi edad es:  ${edad}`);

const mensaje = `hola ${nombre}`;
alert(mensaje); */

/* ********************** CLASES *********************************/

/* function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
} */

class Persona {
  #nombre;
  #edad;
  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  nombreConAppellido(apellido) {
    console.log(this.#nombre + apellido);
  }
}

const persona2 = new Persona("Luka", 25);
const persona3 = new Persona("Ruben", 50);
console.log(persona2);
