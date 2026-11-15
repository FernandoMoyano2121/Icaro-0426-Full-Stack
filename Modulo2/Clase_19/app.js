/* ************** EVENTO CLICK ***************/

const button = document.getElementById("button");

/* function saludo() {
  alert("Hola alumnos");
}

button.addEventListener("click", saludo); */

/* button.addEventListener("click", () => {
  alert("Hola Alumnos! ");
}); 
*/

/* button.addEventListener("click", (evento) => {
  console.log(evento.target);
});
 */
button.addEventListener("click", (evento) => {
  console.log(evento);
});

/* ****************** EVENTO INPUT ******************/

const input = document.getElementById("input");

/* HTMLElement.addEventListener("nombreDelEvento", callback) */

input.addEventListener("input", (evento) => {
  console.log(`Informacion ingresada por el usuario: ${evento.target.value}`);
});

/* ************** EVENTO MOUSEOVER **************/

const div = document.getElementById("div");

function mouseOver() {
  console.log("Pasando el mouse por encima del div");
}

div.addEventListener("mouseover", mouseOver);

/* ***************EVENTO SUBMIT *************/

const formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const datos = new FormData(formulario);
  const nombre = datos.get("nombre");
  const email = datos.get("email");

  /*
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
      <div>
        <div>Nombre: ${nombre}</div>
        <div>Email: ${email}</div>
     </div>
  `; */

  const resultado = document.getElementById("resultado");
  const dataNombre = document.getElementById("dataNombre");
  const dataEmail = document.getElementById("dataEmail");

  dataNombre.textContent = nombre;
  dataEmail.textContent = email;
});

/* ***************ECOMMERCE *************/

const productos = [
  {
    id: 1,
    descripcion: "Laptop",
    precio: 1200,
    imagen: "https://placehold.co/300x200?text=Laptop",
  },
  {
    id: 2,
    descripcion: "Auriculares",
    precio: 80,
    imagen: "https://placehold.co/300x200?text=Auriculares",
  },
  {
    id: 3,
    descripcion: "Teclado",
    precio: 45,
    imagen: "https://placehold.co/300x200?text=Teclado",
  },
];

const contenedorProductos = document.getElementById("contenedorProductos");
const listaCompras = document.getElementById("listaCompras");

function agregarAlCarrito(producto) {
  const item = document.createElement("li");
  item.textContent = `${producto.descripcion}-${producto.precio}`;
  listaCompras.appendChild(item);
}

productos.forEach((producto) => {
  const card = document.createElement("div");

  card.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.descripcion}" />
    <h3>${producto.descripcion}</h3>
    <p>Precio: ${producto.precio}</p>
    <button>Agregar</button>`;

  card.querySelector("button").addEventListener("click", () => {
    agregarAlCarrito(producto);
  });

  contenedorProductos.appendChild(card);
});
