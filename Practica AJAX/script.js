console.log("que le ocurre");

//Gate
let tableBody = document.getElementById("resultado");

let dataArray = [];

//Función que recorre el array de datos e imprime la tabla.
function  crearTabla(dataArray){

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

//Extracción de datos de la Apis.
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {

    console.log(data)//Eliminar.
    dataArray = data;
    crearTabla(dataArray);

  });