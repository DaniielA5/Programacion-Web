let estudiante= [] ;

const Nombre = document.getElementById("Nombre");
const Icalificacion = document.getElementById("calificacion");
const lista = document.getElementById("lista");

document.getElementById("btnAgregar").addEventListener('click', agregarEstudiante);
document.getElementById("btnCalcular").addEventListener('click', calcular);

function agregarEstudiante(){
    const  nombre = Nombre.value.trim();
    const calificacion = Icalificacion.value.trim();

    if(nombre === '' || calificacion === ''){
        alert("Ingresa el Nombre y la calificacion ");
        return;
    }

    const calNum =Number(calificacion);
    if(isNaN(calNum)){
        alert("Calificacion un numero del 1-100");
        return;
    }

    estudiante.push({ nombre: nombre , calificacion:calNum});

    lista.innerHTML=estudiante.map(e => `${e.nombre}: ${e.calificacion}`).join('<br>');

    Nombre.value='';
    Icalificacion.value='';
    Nombre.focus();

}


function calcular () {
    if(estudiante.length === 0) {
        alert('Agrega a uno o mas estudiantes..');
        return;
    }

    const suma = estudiante.reduce((total, e) => total + e.calificacion, 0);
    const promedio =suma / estudiante.length;


    const calMax = Math.max(...estudiante.map(e => e.calificacion));
    const calMin = Math.min(...estudiante.map(e => e.calificacion));


    const estudianteMax = estudiante.find(e => e.calificacion === calMax);
    const estudianteMin = estudiante.find(e => e.calificacion === calMin);

    document.getElementById('PromedioR').value = promedio.toFixed(2);
    document.getElementById('MaxR').value = estudianteMax.nombre;
    document.getElementById("MinR").value = estudianteMin.nombre;

}
