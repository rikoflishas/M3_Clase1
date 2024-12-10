let contador = 0;

function cambiarText(){
    document.getElementById("parrafo").innerText = "Cambiar texto"    
}

function cambiarColor(){
    const colorActual = document.body.style.backgroundColor;
    document.body.style.backgroundColor = colorActual === "black" ? "white": "black";
}

function contador(){
    contador++;
    document.getElementById("contador").innerText = contador;
}