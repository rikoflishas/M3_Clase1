/*
crea un algoritmo que cuenta del 1 a 80 y que indique si el num es par o impar

requisitos:
1.- usar un ciclo FOR 
2.- utiliza una condicional para verificar si es par o impar
3.- imprimir el num con el mensaje PAR O IMPAR

output esperado
1 es impar
2 es par
*/ 

for(let counter = 1;counter <= 80;counter++){
    if(counter % 2 === 0){
        console.log(counter + " es par");
    }else{
        console.log(counter + " es impar");
    }
}

