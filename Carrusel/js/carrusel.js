const imagenes = [
  "Barcelona_a.jpg",
  "Vienna_a.jpg",
  "Vienna_b.jpg",
  "Munich_a.jpg",
  "Munich_c.jpg",
  "Praga_a.jpg",
  "Praga_c.jpg",
  "Berlin_a.jpg",
  "Berlin_b.jpg",
  "Berlin_c.jpg",
  "Roma_a.jpg",
  "Roma_b.jpg",
  "Napoles_a.jpg",
  "Pompey_a.jpg",
  "Pompey_b.jpg",
];

const nombreImg = [
  "Bicicletas - Barcelona",
  "Plaza de los Héroes - Viena",
  "Monumento a Mozart - Viena",
  "Nuevo Ayuntamiento - Munich",
  "Neuschwanstein - Munich",
  "Castillo de Praga - Praga",
  "Havelské tržiště - Praga",
  "Catedral de Berlín - Berlín",
  "Cuervo - Berlín",
  "Muro de Berlín",
  "Fontana di Trevi - Roma",
  "Coliseo de Roma",
  "Castillo del Huevo - Nápoles",
  "Parque Arqueológico de Pompeya - Nápoles",
  "Parque Arqueológico de Pompeya - Nápoles",
];



//definir el array... let posicion = 0
let initialPosition = 0;
function mostrarImagen(position) {
  let imagen = imagenes[position];
  let nombre = nombreImg[position];
  document.getElementById("imagen").src = `./img/${imagen}`;
  document.getElementById("nombre").innerHTML = nombre;
}

function avanzar() {
  initialPosition++;
  if (initialPosition >= imagenes.length) {
    alert("Es la última imagen");
    initialPosition--;
  }
  mostrarImagen(initialPosition);

  if(initialPosition >= nombreImg.length){
    initialPosition--;
  }
  nombreImagen(initialPosition);
}

function retroceder() {
  initialPosition--;
  if (initialPosition >= imagenes.length) {
    alert("Es la primera imagen");
    initialPosition++;
  }
  mostrarImagen(initialPosition);

  if(initialPosition >= nombreImg.length){
    initialPosition++;
  }
  nombreImagen(initialPosition);
}
