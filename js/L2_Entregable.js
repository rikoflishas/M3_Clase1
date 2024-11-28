/*Evaluador de Notas con Mensajes Personalizados
Crea un programa en JavaScript que evalúe la nota de un estudiante y genere un mensaje personalizado basado en la nota. Las notas se asignan de la siguiente manera:

Si la nota es 90 o más, el estudiante aprueba con "Excelente".
Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
Si la nota es menor de 60, el estudiante no aprueba.
*/

let calificacion = parseInt(prompt("¿Cual es la calificación del examen del estudiante?"));

if(calificacion < 0 || calificacion > 100){
    console.log("La calificación introducida debe estar entre el rango de 0 - 100");
}else if(calificacion >= 90){
    console.log(`${calificacion} es excelente`);

}else if(calificacion <= 89 &&  calificacion >= 75){
    console.log(`${calificacion} es buena`);

}else if(calificacion <= 74 && calificacion >= 60){
    console.log(`${calificacion} es mediocre`);

}else if(calificacion < 60 && calificacion >= 0){
    console.log(`${calificacion} no es satisfactoria`);

}else alert("valor no valido");