// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let amigoInput = document.getElementById('amigo');
let amigos = [];
let botonSortear = document.querySelector('.button-draw');

function agregarAmigo() {
  const nombre = amigoInput.value.trim();
  if (nombre === "") {
    alert("Por favor, ingresa un nombre.");
    return;
  }
  if (amigos.includes(nombre)) {
    alert("Este nombre ya ha sido ingresado.");
    return;
  }
  if (nombre !== "") {
    amigos.push(nombre);
    const nuevoLi = document.createElement('li');
    nuevoLi.textContent = nombre;
    listaAmigos.appendChild(nuevoLi);
    amigoInput.value = ""; // Limpiar el input
  }
  
}
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Debes ingresar al menos un amigo para el sorteo.");
    return;
  }

  // crea un índice aleatorio dentro del rango del array de amigos

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtiene el nombre del amigo seleccionado aleatoriamente
  const amigoSeleccionado = amigos[indiceAleatorio];

  resultado.innerHTML = ""; // Limpia resultados anteriores

  const resultadoLi = document.createElement('li');
  resultadoLi.textContent = `El amigo seleccionado es: ${amigoSeleccionado}`;
  resultado.appendChild(resultadoLi);
  listaAmigos.innerHTML = ""; // Limpiar la lista de amigos en pantalla
  botonSortear.disabled = true;
}

// Evento para agregar con Enter
amigoInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // 13 es el código de la tecla Enter
        agregarAmigo();
    }
});