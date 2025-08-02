const listaTareas = document.getElementById("lista-tareas");
const nuevaTareaInput = document.getElementById("nueva-tarea");
const btnAgregar = document.getElementById("agregar");
const totalSpan = document.getElementById("total");
const realizadasSpan = document.getElementById("realizadas");

let tareas = [
  { texto: "Hacer el desafío", realizada: false },
  { texto: "Ir al doctor", realizada: true },
  { texto: "Comprar la comida de las gatas", realizada: false }
];

function renderizarTareas() {
  listaTareas.innerHTML = "";
  tareas.forEach((tarea, index) => {
    const li = document.createElement("li");
    li.className = tarea.realizada ? "completed" : "";

    const span = document.createElement("span");
    span.textContent = tarea.texto;

    const btnRealizado = document.createElement("button");
    btnRealizado.textContent = "✅ Realizado";
    btnRealizado.title = "Marcar como realizada";
    btnRealizado.onclick = () => {
      tareas[index].realizada = !tareas[index].realizada;
      renderizarTareas();
    };

   const btnEliminar = document.createElement("button");
btnEliminar.className = "btn-eliminar";
btnEliminar.innerHTML = '<i class="fas fa-trash-alt"></i> Eliminar';
btnEliminar.title = "Eliminar tarea";
btnEliminar.onclick = () => {
  tareas.splice(index, 1);
  renderizarTareas();
};


    li.appendChild(span);
    li.appendChild(btnRealizado);
    li.appendChild(btnEliminar);
    listaTareas.appendChild(li);
  });

  totalSpan.textContent = tareas.length;
  realizadasSpan.textContent = tareas.filter(t => t.realizada).length;
}

btnAgregar.onclick = () => {
  const texto = nuevaTareaInput.value.trim();
  if (texto !== "") {
    tareas.push({ texto, realizada: false });
    nuevaTareaInput.value = "";
    renderizarTareas();
  }
};

renderizarTareas();
