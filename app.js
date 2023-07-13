const tareas = [];

function agregarTarea() {
const nuevaTarea = prompt('Ingrese una nueva tarea:');
tareas.push(nuevaTarea);
alert(`Tarea "${nuevaTarea}" agregada exitosamente.`);
}

function mostrarTareas() {
if (tareas.length === 0) {
    alert('La lista de tareas está vacía.');
} else {
    let listaTareas = 'Lista de tareas:\n';
    for (let i = 0; i < tareas.length; i++) {
    listaTareas += `${i + 1}. ${tareas[i]}\n`;
    }
    alert(listaTareas);
}
}

function completarTarea() {
const indice = prompt('Ingrese el número de la tarea que desea marcar como completada:');
if (indice >= 1 && indice <= tareas.length) {
    const tareaCompletada = tareas.splice(indice - 1, 1);
    alert(`¡La tarea "${tareaCompletada}" ha sido marcada como completada!`);
} else {
    alert('Índice de tarea inválido. Por favor, ingrese un número de tarea válido.');
}
}

function eliminarTarea() {
const indice = prompt('Ingrese el número de la tarea que desea eliminar:');
if (indice >= 1 && indice <= tareas.length) {
const tareaEliminada = tareas.splice(indice - 1, 1);
alert(`La tarea "${tareaEliminada}" ha sido eliminada exitosamente.`);
} else {
    alert('Índice de tarea inválido. Por favor, ingrese un número de tarea válido.');
}
}

function iniciarPrograma() {
let opcion = '';

while (opcion !== 'Salir') {
    opcion = prompt('Ingrese una opción: Agregar, Mostrar, Completar, Eliminar o Salir');
    
    switch (opcion) {
    case 'Agregar':
        agregarTarea();
        break;
    case 'Mostrar':
        mostrarTareas();
        break;
    case 'Completar':
        completarTarea();
        break;
    case 'Eliminar':
        eliminarTarea();
        break;
    case 'Salir':
        alert('¡Hasta luego!');
        break;
    default:
        alert('Opción inválida. Por favor, ingrese una opción válida.');
        break;
    }
}
}

iniciarPrograma();

