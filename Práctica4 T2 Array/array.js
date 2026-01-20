/**
 * Ejercicio 1
 */
//Crea un array con los números del 1 al 10.

let numeros = new Array(1,2,3,4,5,6,7,8,9,10);
console.log(numeros[9]);

//Usa método map para crear un nuevo array que contenga los cuadros de los números originales.
let dobles = numeros.map(num => num*2);
console.log(dobles);

//Filtra el array original para obtener solo los números pares.
let pares = numeros.filter(num => num%2 === 0);
console.log(pares);

for (let i = 0; i<10; i++){
    if (numeros[i]%2==0){
        console.log(numeros[i]);
    }
};

//Usa "reduce" para calcular la suma de todos los números del array.
let usarReduce = numeros.reduce((before,after) => before+after,0);
console.log(usarReduce);

/**
 * Ejercicio 2
 */

//Crea un array con los nombres de 5 ciudades.
let ciudades = new Array("Gondor","Rohan","Rivendel","Minas Tirith","Moria");

//Convierte todos los nombres a mayúsculas usando map.
let mayus = ciudades.map(letras => letras.toUpperCase());
console.log(mayus);

//Ordena el array alfabéticamente con sort.
console.log (ciudades.sort());

//Busca si alguna ciudad comienza con la letra  "M" utilizando some.
let existe = ciudades.some( i => i[0] === "M");
console.log("Ciudades que empiecen por M: "+[existe]);

//Comprueba si todas las ciudades tienen más de 4 caracteres usando every.
let cuatroCaracteres = ciudades.every(i => i.length > 4);
console.log("Ciudades con mayor de 4 caracteres: "+[cuatroCaracteres]);

/**
 * Ejercicio 3
 */

//Define un array de objetos que representen estudiantes, con las propiedades nombre, edad y nota.
const arrEstudiantes = [
    { nombre: "Mar", edad: 200, nota: 9 },
    { nombre: "Gimli", edad: 101, nota: 4 },
    { nombre: "Aragorn", edad: 24, nota: 7 },
    { nombre: "Legolas", edad: 145, nota: 8 }
];

//Usa filter para obtener los estudiantes aprobados (nota mayor o igual a 5).
let aprobados = arrEstudiantes.filter(i => i.nota >= 5);
console.log("los aprobados son: ",aprobados);

//Ordena a los estudiantes por edad con sort.
console.log(arrEstudiantes.sort((a,b) => a.nota - b.nota));
let ordenarEstudiantes= arrEstudiantes.sort((a,b)=>a.edad - b.edad);
console.table(ordenarEstudiantes);

//Usa map para crear un array que solo contenga los nombres de los estudiantes.
let nombres = arrEstudiantes.map(i => i.nombre);
console.table(nombres);

//Cálcula la nota promedio de los estudiantes con reduce.
let media = arrEstudiantes.reduce((acum,i) => (acum + i.nota)/2,0);
console.table(media);

/**
 * Ejercicio 4
 */

//Crea un array con una lista de palabras (puedes inventarlas).
let palabritas = ["si","durillo","duramen","imodaba","cosquillas"];

//Usa filter para encontrar las palabras que tienen más de 5 letras.
let encontrarPalabras = palabritas.filter(i => i.length >5);
console.table(encontrarPalabras);

//Invierte las letras de cada palabra utilizando map y split/reverse/join.

let delReves = palabritas.split(" ");
let delrevesTodo = delReves.reverse();
let arrayDelReves = delrevesTodo.join("-");
console.table(arrayDelReves);