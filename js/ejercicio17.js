

function crearGestor(){
    let tareas = JSON.parse(localStorage.getItem('tareas')) || [] ;

    const guardar =() => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    };

    return{
        obtener: () => tareas,
        agregar: (texto) => {
            tareas.push({ id:Date.now(), texto });
            guardar();
        },
        eliminar: (id) => {
            tareas = tareas.filter(t => t.id !== id) ;
            guardar();
        }
    };


}

const gestor = crearGestor();

const inputTarea = document.getElementById('inputTarea');
const listaTareas = document.getElementById('listaTareas');

const renderizarTareas = () => {
  listaTareas.innerHTML  = '';
  gestor.obtener().forEach(tarea => {
    const li = document.createElement('li');

    li.textContent = tarea.texto;

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.onclick = () => confirmarEliminar(tarea.id);

    li.appendChild(btnEliminar);
    listaTareas.appendChild(li);

  });
};

const confirmarEliminar = (id) => {
  Swal.fire({
    title: '¿Eliminar tarea?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText:'Cancelar' 

  }).then((resultado) => {
    if (resultado.isConfirmed) {
        gestor.eliminar(id);
        renderizarTareas();
    }
  });
};

document.getElementById('btnAgregar').addEventListener('click', () => {

  const texto = inputTarea.value.trim();
  if(texto === '') { 
        Swal.fire('Campo vacío', 'Escribe una tarea antes de agregar.', 'warning');
        return;

  } 
  gestor.agregar(texto);
  inputTarea.value = '';
  renderizarTareas();

});
renderizarTareas();