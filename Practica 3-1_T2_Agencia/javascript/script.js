class Viaje{

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
class Reserva{

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

let viaje1 = new Viaje("V001", "Roma", 250);
let cliente1 = new Cliente("jabi","Osuna","estecorreo@gmail.com","336521452");
let reserva1 = new Reserva(viaje1,cliente1);
console.log(viaje1.getInfo());
console.log("Se imprime algo?")
console.table(cliente1);
console.table(cliente1.getResumen());
console.log(reserva1.getResumen());


