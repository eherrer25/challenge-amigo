// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista = [];
let ul = document.getElementById('listaAmigos');

function agregarAmigo(){
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    if(nombre !== ''){
        lista.push(nombre);
        input.value = ''; // limpiar input

        actualizarLista();
    }else{
        alert('El campo nombre no puede estar vacio.');
        return;
    }
}

function actualizarLista(){
    ul.innerHTML = '';

    lista.forEach(function(amigo){
        let li = document.createElement('li');
        li.textContent = amigo;
        ul.append(li);
    });
}

function sortearAmigo(){
    if(lista.length === 0) {
        alert("No hay amigos en la lista");
        return;
    }
    let ganador = lista[Math.floor(Math.random() * lista.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "Tu amigo secreto es: " + ganador;
    lista = []; 
    ul.innerHTML = '';
    // alert("Tu amigo secreto es: " + ganador);
}

