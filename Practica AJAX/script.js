console.log("que le ocurre");

//Gate
let tableBody = document.getElementById("resultado");
let selectorOrden = document.getElementById("orden");

//Función que recorre el array de datos e imprime la tabla.
async function  crearTabla(){

  let data = await extraerDatos();
  console.log(data);
    
  tableBody.innerHTML ="";
    data.sort((a,b) => a.name.localeCompare(b.name));
    data.forEach(valor => {

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

async function ordenarAscendente(){

    let data = await extraerDatos();
    console.log(data);
    tableBody.innerHTML ="";

      data.sort((a,b) => b.name.localeCompare(a.name));
      data.forEach(valor => {

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
      filas.appendChild(celdaNombre);s
      filas.appendChild(celdaCorreo);
      filas.appendChild(celdaCiudad);
      tableBody.appendChild(filas);

    });
}


/**
 * EVENTOS.
 */

//Selector que ordena alfabeticament en orden ascendente.
selectorOrden.addEventListener("change", () => {
    if (selectorOrden.value=="asc"){
        crearTabla();
    }
    if (selectorOrden.value =="desc"){
      ordenarAscendente();
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