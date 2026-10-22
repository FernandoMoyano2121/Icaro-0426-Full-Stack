/* Definicion */

/* const nombres = ["Fernando", "Ruben", "Mariel"]; */
/* const listado = ["Ruben", true, 35];

const primerElemento = nombres[0];
const segundoElemento = nombres[1];
const tercerElemento = nombres[2];

console.log(primerElemento);

const valorBoleano = listado[1];
console.log(valorBoleano);
 */
/* ------------------------------- */

/* console.log(nombres.length); */

/* --------------- RECORRIDO DE UN ARRAY CON FOR------------- */

/*
for (let indice = 0; indice < nombres.length; indice++) {
  const elemento = nombres[indice];
  console.log(`${indice} - ${nombres[indice]}`);
  console.log(elemento);
}
*/

/*
 for (let nombre of nombres) {
  console.log(nombre);
}
*/

/*
 for(edad of edades)
for(pais of paises) 
*/

/* const nombres = ["Fernando", "Ruben", "Mariel"]; */

/* METODOS QUE MODIFICAN EL ARRAY ORIGINAL */

/* PUSH() */

/* const nuevaLongitudDelArray = nombres.push("Julian");
console.log(nuevaLongitudDelArray);
console.log(nombres);
*/

/* POP() */

/* const elementoEliminado = nombres.pop();
console.log(elementoEliminado);
console.log(nombres);
 */

/* SHIFT */

/* const primerElementoEliminado = nombres.shift();
console.log(nombres);
console.log(primerElementoEliminado); */

/* UNSHIFT */

/* const nuevaLongitudDelArray = nombres.unshift("Juan");
console.log(nombres);
console.log(nuevaLongitudDelArray); */

/* METODOS QUE NO MODIFICAN EL ARRAY ORIGINAL 
   METODOS DE ORDEN SUPERIOR
*/

/* FOREACH */
const nombres = ["Fernando", "Ruben", "Mariel"];
const numeros = [1, 2, 3, 4, 5, 6];

/* ------------------ FOREACH CASERO ----------------------*/

function miForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

miForEach(numeros, (elemento, indice) => {
  console.log(`${indice}-${elemento}`);
});

/* ------------------------------------------- */

nombres.forEach((nombre) => {
  console.log(nombre);
});

/* -------------------------------------------- */

/*
 nombres.forEach((nombre) => {
  console.log(nombre);
});
*/

/* ------------------------------------------------------- */

/* FIND() */
/* const listadoDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]; */

/*
const numeroMenorACinco = listadoDeNumeros.find((numero) => numero < 5);
console.log(numeroMenorACinco);
*/

/* FILTER() */

/* const numerosMenoresACinco = listadoDeNumeros.filter((numero) => numero < 5);
console.log(numerosMenoresACinco); */

/* MAP() */

/* const numerosMultiplicadosPorDos = listadoDeNumeros.map((numero) => numero * 2);
console.log(numerosMultiplicadosPorDos); */
