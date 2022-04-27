
    //Crear un menú para elegir un número
//Calcular el area del cuadrado lado al cuadrado (lado * lado)


//Calcular el area del triangulo base * altura / 2
//Calcular el area del rectángulo base * altura
//Calcular el area del circulo a = pi * r al cuadrado

//Mostrar respuesta


function cuadrado (){
    let altura = prompt("Escribe la altura");
    return altura * altura;
}

function triangulo (){
    let base = prompt("Escribe la base");
    let altura = prompt("Escribe la altura");
    return (base * altura) / 2;
}

function rectangulo (){
    let ladoA = prompt("Escribe el lado A");
    let ladoB = prompt("Escribe el lado B");
    return ladoA * ladoB;
}

function circulo (){
    let radio = prompt("Escribe el radio del circulo");
    return radio * 2;
}

function mostrar () {
let operador = document.getElementById("opciones").value;
let resultado = "";

switch (operador) {
case "cuadrado": resultado = cuadrado();
break;
case "triangulo": resultado = triangulo();
break;
case "rectangulo": resultado = rectangulo();
break;
case "circulo": resultado = circulo();
break;
}
document.getElementById("result").innerHTML = `El area es ${resultado}`;
}