/* console.log(document.doctype);
console.log(document.body);
console.log(document.ELEMENT_NODE); */

console.log(document.body);

/* getElementById() */
const h1 = document.getElementById("h1");
console.log(h1);

/* getElementTagName() */
const h2 = document.getElementsByTagName("h2");
console.log(h2);

/* getElementByClassName() */
const btn = document.getElementsByClassName("btn");
console.log(btn);

/* querySelector(selector) */
const div = document.querySelector("#contenedor");
console.log(div);

const div1 = document.querySelector(".container");
console.log(div1);

/* querySelectorAll */

const buttons = document.querySelectorAll(".button");
console.log(buttons);

buttons.forEach((b) => {
  console.log(b);
});

/* --------------- Modificando Nodos--------------- */

const miParrafo = document.getElementById("miParrafo");
console.log(miParrafo);
console.log(miParrafo.textContent);

miParrafo.textContent = "Hola mis queridos Alumnos! ";
console.log(miParrafo.textContent);

/* const entradaDelUsuario = document.getElementById("input").value;
console.log(entradaDelUsuario); */

/* ------------------------innerHTML------------------------- */

const miContenedor = document.getElementById("miContenedor");

miContenedor.innerHTML = ` <h3>Hola</h3>
    <p>Alumnos</p>`;

/* --------------------- Ejemplo Final ----------------- */

const titulo = document.getElementById("titulo");
const descripcion = document.querySelector(".descripcion");
console.log(descripcion);

const img = document.querySelector("img");

titulo.textContent = "Modificando texto del titulo";
descripcion.innerHTML = `<h5>Agregando etiqueta strong</h5>`;
img.setAttribute("src", "./img/imagen1.jpg");
