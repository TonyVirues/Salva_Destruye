console.log("que le ocurre");
let dataArray = []
let ususarios = document.getElementById("resultado");
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
      dataArray = data;

      
      //Gate
      
      
      // let mensaje = document.getElement("p");
      
      dataArray.forEach(ususarios =>{
          let parrafo = document.createElement("p");
          parrafo.textContent = ususarios.name
          ususarios.appendChild(parrafo);
          // console.table(ususarios.name);
          
        });
});



// revisar
// console.log("que le ocurre");

// let dataArray = [];

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(data => {

//     dataArray = data;

//     let contenedor = document.getElementById("resultado");

//     dataArray.forEach(usuario => {
//       let parrafo = document.createElement("p");
//       parrafo.textContent = usuario.name;
//       contenedor.appendChild(parrafo);
//     });

//   });