
/**
 * Viajes
 */
let inputCodigo = document.getElementById("codigo");
let inputDestino = document.getElementById("destino");
let inputPrecio = document.getElementById("precio");
let selectorTipoViaje = document.getElementById("selectorTipoViaje");
let tablaViajes = document.getElementById("tablaViajes");
let buttonAgregarViaje = document.getElementById("agregarViaje");
let arrayviajes=[];
/**
 * Clientes
 */
let inputNombre = document.getElementById("nombre");
let inputApellido = document.getElementById("apellidos");
let inputEmail = document.getElementById("email");
let inputTelefono = document.getElementById("telefono");
let tablaClientes = document.getElementById("tablaClientes");
let elementButton = document.getElementById("agregarCliente");
let clientes =[];

/**
 * localStorage.
 */
let ls_Clientes="clientes";
let ls_Viajes="viajes";
/**
 * Cargar LocalStorage.
 */
cargarClientes();
cargarViajes();

/**
 * CLASES
 */

class Viaje {
    
    /**
     * 
     * @param {*} codigo 
     * @param {*} destino 
     * @param {*} precio 
     * @param {*} disponibilidad 
     */
    constructor(codigo, destino, precio, disponibilidad = true) {
        this.codigo = codigo;
        this.destino = destino;
        this.precio = precio;
        this.disponibilidad = disponibilidad;
    }
    getInfo() {
        return `Viaje [${this.codigo}] a ${this.destino}, precio: ${this.precio} euros`;
    }

}


class Cliente {

    /**
     * 
     * @param {*} nombre 
     * @param {*} apellido 
     * @param {*} email 
     * @param {*} telefono 
     */
    constructor(nombre, apellido, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
    }
    getResumen() {
        return `Cliente: ${this.nombre} ${this.apellido}, Email: ${this.email}, Teléfono: ${this.telefono}`;
    }

}
class Reserva {

    /**
     * 
     * @param {*} cliente 
     * @param {*} viaje 
     */
    constructor(cliente, viaje) {
        this.cliente = cliente;
        this.viaje = viaje;
    }
    getResumen() {
        return `${this.cliente.getResumen()}\nReservó: ${this.viaje.getInfo()}`;
    }
}

// let viaje1 = new Viaje("V001", "Roma", 250);

// let reserva1 = new Reserva(viaje1,cliente1);
// console.log(viaje1.getInfo());
console.log("Se imprime algo?")
// console.table(cliente1);
// console.table(cliente1.getResumen());
// console.log(reserva1.getResumen());

/**
 * Función que crea la tabla para los clientes
 */

function madeClientes() {
  tablaClientes.innerHTML = "";

  clientes.forEach((cliente, i) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${cliente.nombre}</td>
      <td>${cliente.apellido}</td>
      <td>${cliente.email}</td>
      <td>${cliente.telefono}</td>
      <td>
        <button onclick="eliminarCliente(${i})" class="btn btn-danger btn-sm">
          Eliminar
        </button>
      </td>
    `;

    tablaClientes.appendChild(tr);
  });
}
/**
 * Función que crea los clientes
 */
function addCliente() {

    //Variables que guardan los input.
    let nombre = inputNombre.value.trim();
    let apellido = inputApellido.value.trim();
    let email = inputEmail.value.trim();
    let telefono = inputTelefono.value.trim();
    //creacion de un objeto cliente
    let cliente1 = new Cliente(nombre, apellido, email, telefono);
    console.table(cliente1);
    clientes.push(cliente1);
    guardarClientes();
    madeClientes();
}

/**
 * Función que agrega viajes
 */
elementButton.addEventListener("click", () => {
    addCliente();
});
/**
 * Boton que elimina la fila.
 * @param {*} i 
 */
function eliminarCliente(i){
    clientes.splice(i,1);
    guardarClientes();
    madeClientes();
}


/**
 * VIAJES
 */

function madeViajes() {
  tablaViajes.innerHTML = "";

  arrayviajes.forEach((viaje, i) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${viaje.codigo}</td>
      <td>${viaje.destino}</td>
      <td>${viaje.precio}</td>
      <td>
        <button onclick="eliminarViaje(${i})" class="btn btn-danger btn-sm">
          Eliminar
        </button>
      </td>
    `;

    tablaViajes.appendChild(tr);
  });
}

function addViaje() {

    //Variables que guardan los input.
    let codigo = inputCodigo.value.trim();
    let destino = inputDestino.value.trim();
    let precio = inputPrecio.value.trim();
    
    //creacion de un objeto cliente
    let viaje1 = new Viaje(codigo, destino, precio);
    arrayviajes.push(viaje1);
    guardarViajes();
    madeViajes();
}
/**
 * Función para eliminar la celda fila seleccionada.
 * 
 * @param {*} i 
 */
function eliminarViaje(i){
    arrayviajes.splice(i,1);
    madeViajes();
}

/**
 * boton que agrega cliente
 */
buttonAgregarViaje.addEventListener("click", () => {
    addViaje();
});

/**
 * Funciones de localStorage.
 */
//LocalStorage clientes.
function guardarClientes(){
    localStorage.setItem(ls_Clientes,JSON.stringify(clientes));
}
function cargarClientes(){
    let cargarDatosClientes = localStorage.getItem(ls_Clientes);
    if(cargarDatosClientes){
      clientes = JSON.parse(cargarDatosClientes);
    }
    madeClientes();
}

//LocalStorage Viajes.

function guardarViajes(){
    localStorage.setItem(ls_Viajes,JSON.stringify(arrayviajes));
}
function cargarViajes(){
    let cargarDatosViajes = localStorage.getItem(ls_Viajes);
    if(cargarDatosViajes){
      arrayviajes = JSON.parse(cargarDatosViajes);
    }
    madeViajes();
}