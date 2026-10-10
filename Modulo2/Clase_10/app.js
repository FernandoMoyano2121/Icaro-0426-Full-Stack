/* alert("Hola alumnos!") */

/* ****** Tipos de datos *********/

//Primitivos
//string -> "a;kasdjkjaskdfjk"
//number -> 9, 9.99
//boolean -> true/false verdadero/falso
//null -> ausencia de valor
//undefined -> no registrado

//Compuestos
//objetos literales

/* 
    nombre:"Fernando"
    edad:15
*/

//Array
/* 
["Fernando", 34, true]
*/

//funcion
/* 
nombreDeFuncion(parametros){
 ...cuerpo
}
*/

//declaracion
/* function alert(mensaje){
    muestra el mensaje
}
*/
// Invocación
/* alert("Hola"); */

/***********  VARIABLES **********/

//declaración de una variable
/* let edad; */

//Asignacion de un valor
/* edad = 20;
edad = 15;
edad = 35; */

//inicialización
//let edad = 20; //No se puede volver a declarar la variable con ámbito de bloque 'edad'.

/* const edad = 20; */
/* edad = 35; */ //Uncaught TypeError: Assignment to constant variable.

/*
 const IVA = 21;
const PI = 3.14;
const nombres=[] 
*/

/* Cómo escribir el nombre de una variable */
/* const edadDelAlumno = 40; */

/* ***************COMENTARIOS ****************/

//comentario de una linea
/* comentario multilinea */

/* OPERADORES */

/* Aritméticos */
/* 
    = -> Asignación
    + -> suma/adición
    - -> resta/sustracción
    / -> división
    * -> Multiplicación
    % -> Modulo
*/

/* operadores lógicos */
// && -> Operador logico and/y
// || -> or/o

/* let numero1 = 6;
let numero2 = 9;

const resultado = numero1 + numero2;
console.log(resultado); */

/* console.log(numero1 + numero2); */

/* 
+=
-=
*=
/=
*/

/* let numero = 10;
numero++; */
/* numero += 1; */
/* numero = numero + 1; */
/* numero = 10 + 1; */

/* console.log(numero); */

/* const nombre = prompt("Ingresa tu nombre"); */

/* Salida/muestra de datos/información */
/* alert(nombre); */

/*************** Ejemplo **************/

/* Entrada */
const numero1 = parseInt(prompt("Ingresa el primer numero"));
const numero2 = parseInt(prompt("Ingresa el segundo numero"));

//Proceso

const resultado = numero1 + numero2;

//salida

console.log("El resultado es " + resultado);
console.log(`El resultado es ${resultado}`);
