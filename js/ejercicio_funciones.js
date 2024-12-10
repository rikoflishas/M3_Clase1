/*
Un programa que adivinara un número aleatorio secreto 
1) usar una función para general un número aleatorio
2) crear una función que se encargue de manejar nuestros intentos
3) Usar variables globales y locales (scope o alance de variables)
4)dar un mensaje al usuario para que informarle si adivino o no
*/

//VARIABLE GLOBAL, se inicializa con let
let mensaje_Bienvenida = "!!____BIENVENIDOS AL JUEGO DE ADIVINAR EL NUMERO DE LA MUERTE____!!";

//FUNCION QUE GENERA UN NUMERO RANDOM
//la variable local es numAleatorio
function generateRandomNumber(min,max){
    var numAleatorio = Math.floor( Math.random() * (max - min + 1) ) + min;
    return numAleatorio;
}

//FUNCION PARA JUGAR
function juego()
{
    console.log(mensaje_Bienvenida);
    let intentos = 0; // contador de intentos
    let adivinado = false;

    //es una constante porque es un número que no debe de cambiar
    const numSecreto = generateRandomNumber(0, 1000);

    while(!adivinado){
        // console.log("===Entra al ciclo===")
        let intento = parseInt(prompt("Adivina que numero estoy pensando, entre el 1 y 1000"));

        intentos++;

        if(intento === numSecreto){
            alert(`¡Felicidades! Adivinaste el número secreto ${numSecreto} en el intento numero ${intentos}`);
            adivinado = true;
        }else if(intento < numSecreto){
            alert("El número secreto es MAYOR, sigue intentando")
        }else if(intento > numSecreto){
            alert("El número secreto es menor, sigue intentando");  
        }else console.log("Ingresa un numero valido");
    }
}

juego();