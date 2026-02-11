console.log("que le ocurre");

//Gate
let dataArray = []
let tableBody = document.getElementById("resultado");

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    console.log(data)

    data.forEach(usuario => {

      //Creación de filas.
      let filas = document.createElement("tr");

      //Creación de las columns.
      let celdaNombre = document.createElement("td");
      let celdaCorreo = document.createElement("td");
      let celdaCiudad = document.createElement("td");

      celdaNombre.textContent = usuario.name;
      celdaCorreo.textContent = usuario.email;
      celdaCiudad.textContent = usuario.address.city;

      filas.appendChild(celdaNombre);
      filas.appendChild(celdaCorreo);
      filas.appendChild(celdaCiudad);
      tableBody.appendChild(filas);

    });
  });