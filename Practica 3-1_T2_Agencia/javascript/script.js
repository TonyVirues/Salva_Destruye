//Json?
let inputNombre = document.getElementById("nombre");
let inputApellido = document.getElementById("apellido");
let inputEmail = document.getElementById("email");
let inputTelefono = document.getElementById("telefono");
let tablaClientes = document.getElementById("tablaClientes");
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



function addCliente(nombre, apellido, email, telefono) {
    let cliente1 = new Cliente(nombre, apellido, email, telefono);
    // Cliente.push(cliente1);
    console.table(cliente1);
    clientes.push(cliente1);
    madeClientes();
}


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
        <button class="btn btn-danger btn-sm" onclick="eliminarCliente(${i})">
          Eliminar
        </button>
      </td>
    `;

    tablaClientes.appendChild(tr);
  });
}
addCliente("Julia", "pelotuda", "ranitoalhabla@gmail.com", "336521452");