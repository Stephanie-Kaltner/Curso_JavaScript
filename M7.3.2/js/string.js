"use strict;"

        function invertir () {
            let frase = document.getElementById("frase").value;
            let invertir = "";
            const longitud = frase.length - 1;

            for (let i = longitud; i >= 0; i--) {
                invertir += frase[i];

            }
            document.getElementById("mostrar").innerHTML = invertir;
        }