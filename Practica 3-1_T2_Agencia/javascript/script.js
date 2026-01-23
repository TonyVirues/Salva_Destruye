//Json?
let inputNombre = document.getElementById("nombre");
let inputApellido = document.getElementById("apellidos");
let inputEmail = document.getElementById("email");
let inputTelefono = document.getElementById("telefono");
let tablaClientes = document.getElementById("tablaClientes");
let elementButton = document.getElementById("agregarCliente");
let eliminarButton = document.getElementById("eliminarCliente");
let clientes =[];

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
    madeClientes();
}
function eliminarCliente(i){
    clientes.splice(i,1);
    madeClientes();
}

elementButton.addEventListener("click", () => {
    
    addCliente();
});

