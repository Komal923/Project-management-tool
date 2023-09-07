
// Add more JavaScript functionality as needed
function addTask() {
    event.preventDefault();

   
    
    var Name = document.getElementById("name").value;
    var taskName = document.getElementById("tname").value;
    var taskDescription = document.getElementById("tdesc").value;

    
    var taskElement = document.createElement("table");
    taskElement.className = "task";

    
    var taskContent = 
    `
    <tr>
    <th>User Name </th>
     <th>Task Name </th>
     <th>Task description</th>
     
     
     </tr>
        <tr>
        <td>${Name} </td>
        <td>${taskName}  </td>
        <td>${taskDescription}</td>
        
        <td><button class="delete-task">Done</button></td>
        </tr>
    `;

    taskElement.innerHTML = taskContent;


    var taskList = document.getElementById("task-list");
    taskList.appendChild(taskElement);


    document.getElementById("form").reset();

 
    var deleteButton = taskElement.getElementsByClassName("delete-task")[0];
    deleteButton.addEventListener("click", function() {
        taskList.removeChild(taskElement);
    });
}


document.getElementById("form").addEventListener("submit", addTask);