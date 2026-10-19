/* 
for(inicialización; condición; actualización){
    ...codigo a ejecutar
}
*/

/* for (let i = 1; i <= 10; i++) {
  console.log(i);
}
 */

/********** TABLA DE MULTIPLICAR ***********/

/* const entrada = prompt("Ingresa un numero");
let numeroIngresado = Number(entrada);

if (entrada === null || entrada.trim() === "" || !Number.isFinite(numeroIngresado)) {
  alert("Ingresa un numero valido");
} else {
  for (let i = 1; i <= 10; i++) {
    const tabla = numeroIngresado * i;
    console.log(`El numero ${numeroIngresado} X ${i} es = ${tabla}`);
  }
}
 */

/****************** WHILE ******************/

/*
 while(condicion){
    ...código a ejecutar
 }

*/

/* let j = 0;
while (j <= 5) {
  console.log(j);
  j++;
} */

/****************** BREAK ******************/

/* let i = 0;

while (i <= 5) {
  if (i === 3) {
    console.log("A mitad del bucle");
    break;
  }
  console.log(i);
  i++;
}
 */

/****************** BREAK ******************/

/* for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
} */

/* ----------------------------------------- */

/* const entrada = prompt("Ingresa un numero");
let numeroIngresado = Number(entrada);

if (
  entrada === null ||
  entrada.trim() === "" ||
  !Number.isFinite(numeroIngresado)
) {
  alert("Ingresa un numero valido");
} else {
  let i = 1;
  while (i <= 10) {
    const tabla = numeroIngresado * i;
    console.log(`El numero ${numeroIngresado} X ${i} es = ${tabla}`);
    i++;
  }
}
 */

/* -------------------------------------------- */

/*
ENUNCIADO
Intentar adivinar el numero secreto

ENTRADA
"Ingrese un numero para intentar adivinar el secreto"

PROCESO
- if()
- for() | while()
- variables 1 = numero secreto
- variable 2 = numero ingresado por el usuario
- variable 3 = intento del usuario

SALIDA
- alert()
- console.log()

*/

let numeroSecreto = 7;
let intentosTotales = 3;

for (
  let intentoUsuario = 1;
  intentoUsuario <= intentosTotales;
  intentoUsuario++
) {
  let eleccionUsuario = parseInt(
    prompt("Ingresa un numero para intentar adivinar el secreto"),
  );

  if (eleccionUsuario === numeroSecreto) {
    alert("adivinaste!!");
    break;
  }

  if (eleccionUsuario !== numeroSecreto) {
    alert("No adivinaste, continua intentando");
  }

  if (intentoUsuario === intentosTotales) {
    alert(
      `No lograste adivinar el numero, el numero secreto era ${numeroSecreto}`,
    );
    break;
  }

  alert(`llevas ${intentoUsuario} intentos(s)`);
  //alert("llevas" + intentoUsuario + "intentos(s)")
}
