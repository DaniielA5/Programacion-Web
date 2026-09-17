const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

function agregarElemento() {
  const texto = input.value.trim();

  if (texto !== '') {
    const li = document.createElement('li');
    // list-group-item: la clase de Bootstrap para cada renglón dentro de un <ul class="list-group">
    // d-flex + justify-content-between: acomoda texto a la izquierda, botón a la derecha
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

    const textoNodo = document.createTextNode(texto);
    li.appendChild(textoNodo);

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.classList.add('btn', 'btn-sm', 'btn-danger');
    botonEliminar.addEventListener('click', function() {
      li.remove();
    });

    li.appendChild(botonEliminar);
    lista.appendChild(li);
    input.value = '';
  } else {
    alert('Escribe algo para agregar a la lista.');
  }
}

botonAgregar.addEventListener('click', agregarElemento);