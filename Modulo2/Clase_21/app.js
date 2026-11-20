/* function saludar(nombre, callback) {
  console.log(`Hola ${nombre}`);
  callback();
}

function despedir() {
  console.log("Adios! ");
}

saludar("Fernando", despedir); */

/* ------------------------------- */

/* console.log("Inicio");

setTimeout(() => {
  console.log("Han pasado 3 segundos");
}, 3000);

console.log("Fin"); */

/* ------------OBJETO PROMISE------------------- */

/* construcción  */
/* const promesa = new Promise((resolve, reject) => {
  let exito = false;

  if (exito) {
    resolve("Promesa resuelta");
  } else {
    reject("Promesa rechazada");
  }
}); */

/* Ejecucion */
/* promesa
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error)); */

/* ----------------------------------------- */

/* Construcción */
/* async function obtenerDatos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos obtenidos");
    }, 3000);
  });
} */

/* Ejecución */
/* async function ejecutar() {
  const datos = await obtenerDatos();
  console.log(datos);
}

ejecutar();
 */
/* ------------------------------------------ */

document.getElementById("buscarBtn").addEventListener("click", buscarPokemon);

async function obtenerPokemons(nombre) {
  const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

  if (!respuesta.ok) {
    throw new Error("Pokemon no encontrado");
  }

  const data = await respuesta.json();
  return data;
}

/* Ejecución de promesa */
async function buscarPokemon() {
  const nombreDePokemon = document.getElementById("nombrePokemon").value;
  const contenedorDePokemon = document.getElementById("contenedor");

  contenedorDePokemon.textContent = "Buscando...";

  try {
    const pokemon = await obtenerPokemons(nombreDePokemon);

    const imagen = document.createElement("img");
    imagen.setAttribute("src", `${pokemon.sprites.front_shiny}`);

    const h2 = document.createElement("h2");
    h2.textContent = `${pokemon.name}`;

    const p = document.createElement("p");
    p.textContent = `${pokemon.weight}`;

    contenedorDePokemon.textContent = "";

    contenedorDePokemon.append(imagen, h2, p);
  } catch (error) {
    console.error(error);
  }
}
