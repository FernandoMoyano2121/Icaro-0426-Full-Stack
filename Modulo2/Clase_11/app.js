/* 
if(conidición){
 ...código a ejecutar
}

---------------------------

if(condición){
 ...código a ejecutar
}else{
...codigo a ejecutar    
}
---------------------------
*/

/* const EDAD = 18;

if (EDAD > 18) {
  console.log("Eres mayor edad!");
}

console.log("Mensaje después de bloque if");
*/

/* const EDAD = 18;

if (EDAD >= 18) {
  console.log("Eres mayor edad!");
} else {
  console.log("No eres mayor edad");
} */

/* let edad = 18; */

/* if (edad < 16) {
  console.log("No puedes entrar");
} else if (edad < 18) {
  console.log("Puedes entrar con el permiso de tus padres");
} else {
  console.log("Eres mayor puedes ingresa!");
} */

/* if (edad < 16) {
  console.log("No puedes entrar");
}

if (edad <= 18) {
  console.log("Puedes entrar con el permiso de tus padres");
}

console.log("Eres Mayor"); */

/* -------------------------------------- */

/* let condicion = 5 < 1;

if (condicion) {
  console.log("dentro del bloque");
}

console.log("fuera del bloque"); */

/* ------------------------------------- */

/* let igualdad = 5 === parseInt("5");

console.log(5 === parseInt("5"));
console.log(5 !== "5"); */

/* ------------------------------------- */

/* let numero1 = "5";
let numero2 = 5;

console.log(typeof numero1);
console.log(typeof numero2);

if (numero1 !== numero2) {
  console.log("Los valores y tipo de datos NO SON iguales");
} else {
  console.log("Los valores y tipos de datos SON iguales");
}
 */

/* -----------------REGISTRO---------------------- */

/* let estaRegistrado = false;
let edad = 19;

if (estaRegistrado || edad > 18) {
  console.log("Acceso permitido");
} else {
  console.log("Acceso denegado");
} */

/* ---------------- OPERADOR TERNARIO ----------------- */

/* let edad = 18;

let esMayor = edad >= 18 ? "eres mayor" : "eres menor";
console.log(esMayor); */

/* ******************** SWITCH ********************/

/* 
switch(expresion){

case valor1:
    ...codigo a ejecutar
    break

case valor2:
    ...codigo a ejecutar
    break
}
*/

/* const dia = "Lunes";

switch (dia) {
  case "Lunes":
    console.log("comenzando la semana");
    break;

  case "Miercoles":
    console.log("a mitad de semana");
    break;

  case "viernes":
    console.log("llegando al fin de semana");
    break;

  default:
    console.log("es cualquier otro día");
} */

/*
 Crear un pequeño programa que valide los datos ingresados 
 por un usuario .

Instrucciones:
- Pedile al usuario su edad y si tiene licencia de conducir
- Si no tiene edad suficiente (18), indica que no puede conducir.

Valida si puede conducir:
- Si tiene más de 18 años y licencia: "Puedes conducir."
  De lo contrario: "No puedes conducir."

  Tienes un momento para intentarlo…
 
*/

//let edad = parseInt(prompt("Ingresa tu edad (valor numérico)"));
//let tieneLicencia = confirm("Tienes Licenia?");
//// tieneLicencia = prompt("Tienes licencia? (Si/No)").toLocaleLowerCase();

//if (edad > 18 && tieneLicencia)
/* if (edad > 18 && tieneLicencia === "si") {
  console.log("Puedes conducir.");
} else {
  console.log("No puedes conducir.");
} */

//SI-si

let edad = parseInt(prompt("Ingresa tu edad"));
console.log(typeof edad);

if (isNaN(edad)) {
  console.log("No es un numero");
}
