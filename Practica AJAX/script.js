console.log("que le ocurre");

//Gate
let tableBody = document.getElementById("resultado");
let selectorOrden = document.getElementById("orden");
let inputBuscarNombre = document.getElementById("busqueda");

let dataArray = [];
let buscadorNombre = inputBuscarNombre.value.trim();


/**
 * FUNCIONES
 */

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

//Función que recorre el array de datos e imprime la tabla.
function  ordenAscendente(){
  copiadataArray = [...dataArray];
  tableBody.innerHTML ="";
  copiadataArray.sort((a,b) => a.name.localeCompare(b.name));
  crearTabla(copiadataArray);

}

function ordenarDescendente(){

  tableBody.innerHTML ="";
  copiadataArray = [...dataArray]
  copiadataArray.sort((a,b) => b.name.localeCompare(a.name));
  crearTabla(copiadataArray);

}


//Función que busca nombre en el los datos.
// async function buscarNombre(){
//   let data = await extraerDatos();
//   data.forEach(value => {
//     if (value.name==buscadorNombre){
//       console.log("entramos");
//             //Creación de filas.
//       let filas = document.createElement("tr");

//       //Creación de las diferentes celdas.
//       let celdaNombre = document.createElement("td");
//       //Guardamos el valor en una celda.
//       celdaNombre.textContent = value.name;   
//       //Imprimimos las celdas creadas en el html.
//       filas.appendChild(celdaNombre);
//       tableBody.appendChild(filas);

//     }else{
//       let filas = document.createElement("tr");
//       let celdaNombre = document.createElement("td");
//       celdaNombre.textContent = "explote"
//       console.log("exploto")
//     }
//   });
  
// }

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
iniciarApp();