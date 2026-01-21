/**
 * Ejercicio 1
 */

//Crea un array con los números del 1 al 10.
let numeros = new Array(1,2,3,12,5,6,7,8,9,10);
console.table(numeros);

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
let ordenar = palabritas.map(palabra=>palabra.split("").reverse().join(""));
console.table(ordenar);

//Ordena las palabra por longitud usando una función personalizada en sort
console.log(palabritas.sort((a,b)=>a.length-b.length));

/**
 * Ejercicio 5
 * 
 */

//Crea dos arrays de números enteros de igual longitud.
let numeroEnteroPrimero = [2,4,6];
let numeroEnteroSegundo = [1,3,5];

//Usa map para crear un nuevo array que contenga la suma de los elementos corresondientes de ambos arrays.
let sumaTotalDosArrays = numeroEnteroPrimero.map((num, i) => num+numeroEnteroSegundo[i]).reduce((acum,i)=>acum+i,0);
console.log("Sus castas toas");
console.log(sumaTotalDosArrays);

//Multiplica los elementos de una array por su indice usando map.
let numerosMultiplicados = numeros.map((num,i) => num*i);
console.table(numerosMultiplicados);

//Encuentra el índice del primer número mayor a 10 en uno de los arrays usando findIndex.
let encuentraIndice = numeros.findIndex(num => num>10);
console.log("El array numeros");
console.table(numeros);
console.log("El array encuentraIndice");
console.log(encuentraIndice);

/**
 * Parte 6
 */

//Crea un array con una frase dividida en palabras.
let dividida = ["El","durillo","supremo","mecachis"];
console.table(dividida);
let fusion = dividida.reduce((a,b)=>a+b);
console.table(fusion);

//Invierte el orden de las palabras usando reverse.
console.log(dividida.reverse());

//Busca si la palabra "bella" está en la frase utilizando includes.
let sinBella = dividida.includes("bella");
console.table(sinBella);
let dividida2 = ["El","durillo","supremo","mecachis","bellisima"];
let conBella = dividida2.includes("bellisima");
console.table(conBella);

//Crea un array de números aleatorios entre 1 y 100 (usa Math.random y un bucle para generarlos).
let random;
let arrayRandom =[];
for (let i = 0; i < 20; i++) {
    random=Math.floor(Math.random()*99);
    arrayRandom[i]=random;
}
console.log("números aleatorios del 1 al 100");
console.table(arrayRandom);

//Encuentra el número más alto con Math.max y spread operator.
console.log("el número mas grande es");
let numMax=Math.max(...arrayRandom);
console.log(numMax);

//Encuentra el número más bajo de forma similar.
console.log("el número mas chico es");
let numMin=Math.min(...arrayRandom);
console.log(numMin);

//Calcula la cantidad de números impares usando filter.
let impares = arrayRandom.filter(valor => valor%2===1);
console.log("Los impares son: ")
console.table(impares);