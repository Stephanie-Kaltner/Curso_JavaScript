function mostrar (){
    let frase = document.getElementById("frase").value;
    document.getElementById("resultado").innerHTML = `El resultado esta formado por ${compCase(frase)}`
}

function compCase(frase){
    if(!isNaN(frase)){
        alert("Introduzca una frase")
        return "numeros"
    }else {
        if(frase == frase.toUpperCase()){
            return "mayusculas"
        }
        if (frase == frase.toLowerCase()){
            return "minusculas"
        } else {
            return "mayusculas y minusculas"
        }
    }
}

