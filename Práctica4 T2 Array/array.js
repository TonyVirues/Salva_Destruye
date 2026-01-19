/**
 * Ejercicio 1
 */
//Crea un array con los números del 1 al 10

let numeros = new Array(1,2,3,4,5,6,7,8,9,10);
console.log(numeros[9]);

//Usa método map para crear unnuevo array que contenga los cuadros de los números originales
let dobles = numeros.map(function(x){
    return x*2;    
});
console.log(dobles);

//Filtra el array original para obtener solo los números pares.
for (let i = 0; i<10; i++){
    if (numeros[i]%2==0){
        console.log(numeros[i]);
    }
};

//Usa "reduce" para calcular la suma de todos los números del array.
