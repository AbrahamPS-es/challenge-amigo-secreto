// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let textoAmigo = document.getElementById("amigo");
const lista=document.getElementById('listaAmigos');

// Esta función se encarga de validar la entrada del usuario y agregar el nombre del amigo a la lista si es válido.
function validarEntrada() {
    if (textoAmigo.value=="") {
        // Si el campo de texto está vacío, muestra un mensaje de alerta.
        alert("Por favor, inserte un nombre.");
    }else{
        // Si el campo de texto no está vacío, agrega el nombre a la lista de amigos y limpia el campo.
        amigos.push(textoAmigo.value);
        document.getElementById("amigo").value = "";
    }
}

function agregarAmigoLista() {
    lista.innerHTML=''; // Limpia la lista antes de agregar los nuevos amigos
    // Recorre la lista de amigos y los agrega al elemento HTML correspondiente.
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function agregarAmigo(){
    validarEntrada();
    agregarAmigoLista();
    console.log(amigos);
}

function sortearAmigo() {
    if (amigos.length==0) {
        // Si la lista de amigos está vacía, muestra un mensaje de alerta.
        alert("No hay amigos para revisar.");
    }else{
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSeleccionado = amigos[numeroAleatorio];
        lista.innerHTML = `El amigo secreto es: <strong>${amigoSeleccionado}</strong>`;
    }
}

function resetear() {
    // Limpia la lista de amigos y el campo de texto.
    amigos = [];
    textoAmigo.value = "";
    lista.innerHTML = '';
}