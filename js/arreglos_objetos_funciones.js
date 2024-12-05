//ARREGLOS

const arregloAlumnis = ['Benjamin', 'Berenice', 'Brian', 'Carlos', 'Jona']; // tamaño de 6 
console.log(arregloAlumnis[0]);

console.log("Arreglo inicial " + arregloAlumnis);
arregloAlumnis.push('Jose'); //agrega un elemento a la lista 

console.log('Arreglo con push(jose) ' + arregloAlumnis);

arregloAlumnis.pop();// quita el último elemento de la lista
console.log('Arreglo con pop() ' + arregloAlumnis);

//Objeto
var carro = {
    matricula: '1234',
    color: 'negro',
    modelo: '2021',
    serie: '248132'
}

console.log(carro.color);

//FUNCIONES
//funcion normal o declarativa
function sumar(a,b){
    return a + b;
}
console.log('Funcion declarativa', sumar(1,2) );

//funcion expresiva
const sumaExpresiva = function sumaExpresiva(a, b){
    return a + b;
}
console.log('Función expresiva', sumaExpresiva(1,2));

//FunctionArrow
const sumaArrow = (a, b) => a + b;
console.log('FunctionArrow', sumaArrow(1,2) );


/*
### **5. Ejercicios prácticos para dominar estos conceptos**

👩‍💻 **Reto 1: Manejo de arreglos**

- Crea un arreglo con los nombres de tus 3 frutas favoritas.
- Usa un loop para imprimir cada fruta en mayúsculas.*/
function fruitUppercase(){
    const frutas = ['uva','sandia','kiwi'];
    
    for (let i = 0; i < frutas.length; i++) {
        const fruta = frutas[i];
        console.log (fruta.toUpperCase());
    }
}

// 👩‍💻 **Reto 2: Objetos dinámicos**

// - Crea un objeto `libro` con propiedades como `titulo`, `autor` y `año`.
// - Agrega una nueva propiedad `genero` y luego elimina la propiedad `año`.
function ObjectTest(){
    const libro = {
        titulo: 'Aftersun',
        autor: 'Charlote Wells',
        anio: '2023'
    }
    
    libro.genero = 'drama'
    delete libro.anio;
    console.log("Objeto que representa a un libro, con eliminación de una propiedad ", libro);
}

// 👩‍💻 **Reto 3: Funciones avanzadas**

// - Escribe una función llamada `esPar` que reciba un número y devuelva `true` si es par, o `false` si no lo es.

//const numeros = [0,1,2,3,4,5,6,7,8,9,10];

//FUNCION DECLARATIVA
function esParDeclarativa (numero){
    return numero % 2 === 0;
}

//ARROW FUNCTION... Manera más moderna y más común que se utiliza en estos momentos...
const esPar = (numero) => numero % 2 === 0;  //Arrow Function

const esParExpresiva = function(numero) {
    return numero % 2 === 0; 
}

function probarFuncionesPar(numero) {
    console.log(`Numero: ${numero} y dividido en dos resulta en ${numero/2}`);
    console.log("Función Declarativa: ", esParDeclarativa(numero));
    console.log("Función de Expresión: ", esParExpresiva(numero));
    console.log("Función de Flecha: ", esPar(numero));
}

// 🎯 **Reto extra:**
// Convierte todos los retos anteriores en funciones y úsalo como un mini-proyecto.
function init(){
    console.log("**_________RETO #1. FRUTAS EN MAYUSCULA_________**");
    fruitUppercase();

    console.log("**_________RETO #2. MANIPULACIÓN DE UN OBJETO_________**");
    ObjectTest();

    console.log("**_________RETO #3. ¿EL NÚMERO ES PAR?_________**");
    const numero = 245; 
    probarFuncionesPar(numero);
}

init();

