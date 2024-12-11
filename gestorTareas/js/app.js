//array for storing tasks
let tasks = [];

//Function to add tasks
function addTask(title, description) {
    const task = {
        id: Date.now(),//id unico de la fecha exacta para cada tarea
        title,
        description
    };
    tasks.push(task);
}

//Funcion que renderice las tareas (dibujar las tareas en html)
function renderTask(){
    const taskList = document.getElementById("taskList")
    taskList.innerHTML = ""; //limpiar la lista de tareas

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";

    listItem.innerHTML = `
    <div>
        <h5>${task.title}</h5> 
        <p class = "mb-1">${task.description}</p>
        <button class = "btn btn-danger btn-sm" onclick = "deleteTask(${task.id})">Eliminar</button>
    </div>
    `;

    taskList.appendChild(listItem);
    });
    console.log(tasks);
}
//Funcion para manejar formulario
document.getElementById("taskForm").addEventListener("submit", function(event){
    event.preventDefault();
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;

    addTask(title, description);

    event.target.reset();
} );

//tres funciones para eleminar una tarea
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);//filtra las tareas eliminando la que coincida con el id de la tarea seleccionada
    console.log("Tarea eliminada con el siguiente id: ", id);
    renderTask(); 
}

function deleteTask2(id) {
    for (let i = 0;i < tasks.length; i++){
        if(tasks[i].id === id){
            tasks.splice(i,1);//elimina la tarea encontrada
            break;
        }
    }
    renderTask();
}

function deleteTask3(id) {
    const indice = tasks.findIndex(task => task.id === id);
    if(indice !== -1){
        tasks.splice(i,1);
        renderTask();
    }
}