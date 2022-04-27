function fibonacci (parametro) {
    let arrayFibo = [0, 1, 1];
    let arrayNumberPos = [];

    for (let i = 0; i < parametro; i++) {
        arrayNumberPos.push(i);
    }
    console.log('array de números', arrayNumberPos);
    let longitud = arrayNumberPos.length;
    console.log('longitud de array de números: ', longitud);
    for (let j = 2; j < parametro; j++) {
        arrayFibo[0] = 0;
        arrayFibo[1] = 1;
        arrayFibo[2] = 1;
        arrayFibo[j] = arrayFibo[j - 2] + arrayFibo[j - 1];
    }
    console.log('array de Fibonacci', arrayFibo);
    return arrayFibo;
}

function calcular () {
    let numberPos = parseInt(document.getElementById("numberPos").value);
    console.log('numberPos', numberPos);

    if (numberPos < 0 || numberPos > 200) {
        alert("Ingrese un número del 0 al 200");
    } else if (numberPos === 0) {
        Document.getElementById("resultado").innerHTML = "La secuencia de fibonacci es";
    } else if (numberPos === 1) {
        Document.getElementById("resultado").innerHTML = "La secuencia de fibonacci es";
    } else if (numberPos === 2) {
        Document.getElementById("resultado").innerHTML = "La secuencia de fibonacci es";
    } else {
        let arrayNumberPos = fibonacci(numberPos);
        let resultado = arrayNumberPos.join(' , ');

        console.log('número: ', numberPos);
        console.log('Fibonacci número: ', fibonacci(numberPos));
        console.log('', resultado);

        let imprimir = "La secuencia de números " + numberPos + " es: " + resultado;
        document.getElementById("resultado").innerHTML = imprimir;
    }
}