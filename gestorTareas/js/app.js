//array for store tasks
let tasks = [];

//Function to add tasks
function addTask(title, description) {
    const task = {
        id: Date.now(),//id unico para cada tarea
        title,
        description
    };
    tasks.push(task);
}

//Funcion que renderice las tareas (dibujar las tareas en html)
function renderTask(){
    const taskList = document.getElementById("taskList")
    taskList.innerHTML = ""; //limpiar la lista de tareas

    const listItem = document.createElement('li');
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";

    listItem.innerHTML = `
    <div>
        <h5>${task.title}</h5> 
        <p class = "mb-1">${task.description}</p>
    </div>
    `;

    taskList.appendChild(listItem)
}
//Funcion para manejar formulario
document.getElementById("taskForm").addEventListener("submit", function(event){
    event.preventDefault();
    const title = document.getElementById("taskTitle").value;
} );