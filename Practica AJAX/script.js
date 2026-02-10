console.log("que le ocurre");
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.table(data));

//Gate

let ususarios = document.getElementById("resultado");
// let mensaje = document.getElement("p");

data.forEach(ususarios =>{
    console.table(ususarios.name);
     
})
