/*
function(){
    cuerpo de la funcion
    codigo que se va procesar
}
*/

/*
 console.log()
prompt()
alert()
*/

/* ----------------------------------- */

/* let saludo = "Hola alumnos";
console.log(saludo);
console.log(saludo);

saludo = "Hola profesores! ";
console.log(saludo); */

/* -------------------------------------- */

/* definición */
/* function saludar() {
  console.log("Hola alumnos! ");
} 
*/

/* Invocación */
/* saludar();
saludar(); */

/* ------------------------------------- */

/**
 * @description Funcion de imprime un saludo
 * @param {string} mensaje
 * @returns void
 */
/* function saludar(mensaje) {
  console.log(mensaje);
} */

/* saludar("Hola alumnos! "); */
//+3900 lineas despues
/* saludar("Hola Ruben"); */

/* function sumar(a, b) {
  console.log(a + b);
} */

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

/* function sumar(a, b) {
  let resultado = a + b;
  return resultado;
}
 */

/*
 const resultadoDeLaSuma = sumar(50, 100);
console.log(resultadoDeLaSuma); */

/* const nombre = prompt("Ingresa tu nombre");
console.log(nombre); */

/* console.log(sumar(10, 1));
 */

/* *********** SCOPE *****************/

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
/* function sumar(a, b) {
  let resultado = a + b;
  return resultado;
} */

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
/* function multiplicar(a, b) {
  let resultado = a * b;
  return resultado;
} */

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {function} operacion
 */
/* function operar(a, b, operacion) {
  const resultado = operacion(a, b);
  return resultado;
} */

/* const rs = operar(10, 5, sumar);
console.log(`El resultado de la operación es: ${rs}`); */

/* Función declarada */
/* function nombreDeLaFuncion() {} */

/* Funcion anónima */

/* const saludar = function () {
  console.log("Hola");
};

saludar(); */

/* Funcion flecha */

/* const suma = (a, b) => a + b;
const resultado = suma(5, 10); */

/* console.log(suma(15, 10));
console.log(resultado); */

/* saludar();

function saludar() {
  console.log("Hola");
} */

/* const saludar = function () {
  console.log("hola");
};

saludar() */

/* const saludar1 = () => console.log("Hola");
saludar1(); */

/* APLICACION TAREAS */

let listadoDeTareas = "";
let numeroDeTarea = 0;

function MostrarMenuDeOpciones() {
  return prompt(
    "Selecciona una de las opiones: \n 1. Agregar una tarea \n 2. Ver mis tareas \n 3. Salir",
  );
}

function agregarTarea() {
  const nuevaTarea = prompt("Ingresa la tarea");

  if (nuevaTarea && nuevaTarea.trim() !== "" && isNaN(nuevaTarea)) {
    numeroDeTarea++;
    listadoDeTareas += `${numeroDeTarea}-${nuevaTarea.trim()}\n`;
    alert("✅Tarea agregada");
  } else {
    alert("❌El formato ingresado no es el correcto! ");
  }
}

function mostrarTareas() {
  if (numeroDeTarea === 0) {
    alert("No tienes tareas aún");
  }
  console.log(listadoDeTareas);
}

/**
 * @description funcion de punto de entrada
 */
function main() {
  let eleccionUsuario = MostrarMenuDeOpciones();

  while (eleccionUsuario !== "3") {
    switch (eleccionUsuario) {
      case "1":
        agregarTarea();
        break;
      case "2":
        mostrarTareas();
        break;
      default:
        alert("La opcion ingresada no es valida");
        break;
    }
    eleccionUsuario = MostrarMenuDeOpciones();
  }
  alert("Nos vemos más tarde! ");
}

main();
