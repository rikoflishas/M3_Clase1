/*
Un programa que adivinara un número aleatorio secreto 
1) usar una función para general un número aleatorio
2) crear una función que se encargue de manejar nuestros intentos
3) Usar variables globales y locales (scope o alance de variables)
4)dar un mensaje al usuario para que informarle si adivino o no
*/

//VARIABLE GLOBAL, se inicializa con let
let mensaje_Bienvenida = "BIENVENIDOS AL JUEGO DE ADIVINAR EL NUMERO DE LA MUERTE";

//FUNCION QUE GENERA UN NUMERO RANDOM
function randomNumber(){
    var numAleatorio = Math.floor(Math.random * 600) + 1;
    return numAleatorio;
}

//FUNCION PARA JUGAR
function juego(){
    alert(mensaje_Bienvenida);
    let intentos = 0; // contador de intentos
    let adivinado = false;
    //es una constante porque es un número que no debe de cambiar
    const numSecreto = randomNumber();

    while(adivinado != true){
        console.log("entra al ciclo")
        let intento = parseInt(prompt("Adivina que numero estoy pensando, entre el 1 y 600"));

        intentos++;

        if(intento === numSecreto){
            console.log(`¡Felicidades! Adivinaste en el intento numero ${intentos} `);
        }else if(intento < numSecreto){
            alert("el numero es menor al número secreto")
        }else if(intento > numSecreto){
            alert("el numero es mayor al número secreto");
        }else console.log("ingresa numero valido");
    }
}

juego();