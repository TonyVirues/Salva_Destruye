console.log("que le ocurre");

//Gate
let tableBody = document.getElementById("resultado");

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    console.log(data)//Eliminar

    data.forEach(usuario => {

      //Creación de filas.
      let filas = document.createElement("tr");

      //Creación de las diferentes celdas.
      let celdaNombre = document.createElement("td");
      let celdaCorreo = document.createElement("td");
      let celdaCiudad = document.createElement("td");

      //Guardamos el valor en una celda.
      celdaNombre.textContent = usuario.name;
      celdaCorreo.textContent = usuario.email;
      celdaCiudad.textContent = usuario.address.city;
      
      //Imprimimos las celdas creadas en el html.
      filas.appendChild(celdaNombre);
      filas.appendChild(celdaCorreo);
      filas.appendChild(celdaCiudad);
      tableBody.appendChild(filas);

    });
  });