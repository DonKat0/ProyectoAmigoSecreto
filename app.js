// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var input = document.getElementById('amigo');
var lista = document.getElementById('listaAmigos');
let amigo=[];

function agregarAmigo(){
    if(!input.value == ""){
        amigo.push(input.value);
        ActualizarLista();
        input.value = "";
    }
    else{
        alert("Por favor, inserte un nombre.");
    }
}
function sortearAmigo(){
    if (amigo.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * amigo.length);
        const amigoSorteado = amigo[indiceAleatorio];
        resultado.innerText = `Amigo seleccionado: ${amigoSorteado}`;
    } else {
        alert("No hay nombres en la lista por sortear");
    }

    
}

function ActualizarLista(){
    lista.innerHTML = "";

    amigo.forEach(amigo => {
        lista.innerHTML += `<ul>${amigo}</ul>`
    });
}
