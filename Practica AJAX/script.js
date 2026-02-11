console.log("que le ocurre");
let dataArray = []
let tableBody = document.getElementById("resultado");

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    console.log(data)
     // dataArray = data;

      
      //Gate
      
      
      // let mensaje = document.getElement("p");
      
      data.forEach(usuario =>{
        
        //Creación de filas.
        let filas = document.createElement("tr");

        //Creación de las columns.
        let celdasNombre = document.createElement("td");
        let celdasApellidos = document.createElement("td")

          // let parrafo = document.createElement("p");

          // parrafo.textContent = usuario.name

        celdasNombre.textContent = usuario.name
        celdasApellidos.textContent = usuario.username
        console.table(usuario.name);

        filas.appendChild(celdasNombre);
        filas.appendChild(celdasApellidos);
        tableBody.appendChild(filas);

        // divResultado.appendChild(parrafo);

          // console.table(resultado.name);
          
        });
});