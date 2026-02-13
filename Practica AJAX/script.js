console.log("que le ocurre");

//Gate
let tableBody = document.getElementById("resultado");
let selectorOrden = document.getElementById("orden");
// let inputBuscarNombre = document.getElementById("inputBusqueda");
let btnBuscar = document.getElementById("btnBuscar");

let dataArray = [];



/**
 * FUNCIONES
 */

//Función que recoge los datos de la API.
async function iniciarApp() {
  dataArray = await extraerDatos();
  crearTabla(dataArray);
}

//Función que pinta la tabla.
function crearTabla(dataArray) {

  tableBody.innerHTML = "";

    dataArray.forEach(valor => {

      //Creación de filas.
      let filas = document.createElement("tr");

      //Creación de las diferentes celdas.
      let celdaNombre = document.createElement("td");
      let celdaCorreo = document.createElement("td");
      let celdaCiudad = document.createElement("td");

      //Guardamos el valor en una celda.
      celdaNombre.textContent = valor.name;
      celdaCorreo.textContent = valor.email;
      celdaCiudad.textContent = valor.address.city;
      
      //Imprimimos las celdas creadas en el html.
      filas.appendChild(celdaNombre);
      filas.appendChild(celdaCorreo);
      filas.appendChild(celdaCiudad);
      tableBody.appendChild(filas);

    });
}

//Función que ordena los datos por alfabeticamente.
function  ordenAscendente(){
  tableBody.innerHTML ="";
  let copiadataArray = [];
  copiadataArray = dataArray;
  copiadataArray.sort((a,b) => a.name.localeCompare(b.name));
  crearTabla(copiadataArray);

}

//Función que ordena los dato alfabeticamente de forma descendente.
function ordenarDescendente(){
  tableBody.innerHTML ="";
  let copiadataArray = [];
  copiadataArray = dataArray;
  copiadataArray.sort((a,b) => b.name.localeCompare(a.name));
  crearTabla(copiadataArray);

}

//Función que busca el nombre.

/**
 * EVENTOS.
 */

//Selector que ordena alfabeticament en orden ascendente.
selectorOrden.addEventListener("change", () => {
    if (selectorOrden.value=="asc"){
        ordenAscendente();
    }
    if (selectorOrden.value =="desc"){
      ordenarDescendente();
    }
});

//Input que registra lo escrito.
// inputBuscarNombre.addEventListener("input",)



//Extracción de datos de la Apis.
async function extraerDatos(){

  try {
    let  response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    
    return data;
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
};

/**
 * Llamamos a la función iniciarapp
 * para la extracción de datos y imprimacion de la tabla.
 */
iniciarApp();