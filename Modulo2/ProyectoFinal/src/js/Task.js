/* 
id - number
nombre - string
prioridad - string
vencimiento - string
completada - boolean
*/

export class Tarea {
  constructor(id, nombre, prioridad, vencimiento, completada = false) {
    this.id = id;
    this.nombre = nombre;
    this.prioridad = prioridad;
    this.vencimiento = vencimiento;
    this.completada = completada;
  }
}
