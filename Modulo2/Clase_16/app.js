/*
 const persona = {
  nombre: "Juan",
  edad: 35,
};

const persona1 = {
  nombre: "Daniel",
  edad: 40,
}; 
*/

/* **************** FUNCION CONSTRUCTORA ************/

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

/* ******************** CLASE *********************/

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

const persona = new Persona("Mario", 60);
const persona1 = new Persona("Fernando", 35);

/* **************** HERENCIA ************************/

/* function Animal(){} */

/* class Animal {
  constructor(nombre, tipo) {
    ((this.nombre = nombre), (this.tipo = tipo));
  }

  describir() {
    console.log(`Sou un ${this.tipo} y mi nombre es ${this.nombre}`);
  }

  comunicar() {
    console.log(`soy un ${this.tipo} y hago un sonido`);
  }
}

class Perro extends Animal {
  comunicar() {
    console.log(`soy un ${this.tipo} y ladro`);
  }
}

const perro = new Perro("Rex", "Perro");
perro.comunicar(); */

/* --------------- METODO SUPER()------------------------ */

class PersonaConSaludo {
  constructor(nombre, nacionalidad) {
    ((this.nombre = nombre), (this.nacionalidad = nacionalidad));
  }

  saludar() {
    console.log(`Hola mi nombre es ${this.nombre}`);
  }
}

class Estudiante extends PersonaConSaludo {
  constructor(nombre, nacionalidad, curso) {
    super(nombre, nacionalidad);

    this.curso = curso;
  }

  mostrarCurso() {
    console.log(`Estoy cursando en ${this.curso}`);
  }
}

const estudiante = new Estudiante("Carlos", "Argentina", "Full Stack");

/* ************** GETTERS Y SETTERS *****************/
/* Convención para campos privados */

/* class PersonaConGetter {
  constructor(nombre, nacionalidad) {
    ((this._nombre = nombre), (this._nacionalidad = nacionalidad));
  }

  get nombre() {
    return this._nombre;
  }
}

const persona3 = new PersonaConGetter();
console.log(persona3._nombre);
console.log(persona3.nombre); */

/* ------------------------------------------- */

class PersonaConGetter {
  #nombre;
  #nacionalidad;

  constructor(nombrePersona, nacionalidadPersona) {
    ((this.#nombre = nombrePersona),
      (this.#nacionalidad = nacionalidadPersona));
  }

  get nombre() {
    return this.#nombre;
  }

  get nacionalidad() {
    return this.#nacionalidad;
  }
}

const persona4 = new PersonaConGetter();
/* console.log(persona4.#nombre);
console.log(persona4.#nacionalidad);
 */
console.log(persona4.nombre);

/* ********** CUENTA BANCARIA ***************/

class CuentaBancaria {
  #saldo;

  constructor(saldoDeLaCuenta) {
    this.#saldo = saldoDeLaCuenta;
  }

  // Redundante para con un metodo. Si necesitamos algo más que
  // solo obtener el dato conviene un metodo getSaludo sin anteponer la palabra get
  get getSaldo() {
    return this.#saldo;
  }

  //redundante para con un metodo
  set setSaldo(nuevoSaldo) {
    this.#saldo = nuevoSaldo;
  }
}

const cuenta1 = new CuentaBancaria();

/* cuenta1.#saldo = 100000000; */
/* cuenta1.setSaldo(1599); */

cuenta1.setSaldo = 1500;
console.log(cuenta1.getSaldo);
/* cuenta1.saldo = 1500; */
