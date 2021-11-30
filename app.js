

// user input form
const form = document.querySelector("form")
form.addEventListener("submit", addTask)

// Task list
const taskList = document.querySelector("ul");
taskList.addEventListener("click", delTask)

// delete button-link
const deleteBtn = document.querySelector("#delete-tasks")
deleteBtn.addEventListener("click", delTasks)

function delTasks(){
    // taskList.innerHTML = ""
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
}

//delTask
function delTask(event){
    if(event.target.textContent === "x"){
        if(confirm("Do you really want to delete this task?")){
            event.target.parentElement.remove()
        }
    }
}
//addTask function
function addTask(event){
    // get task value from form input
    const task = document.querySelector("#task").value
    // get element from DOM
    const taskList = document.querySelector("ul");
    // create element to DOM
    const li = document.createElement("li")
    // add css class
    li.className = "collection-item"
    // add text to element
    const text = document.createTextNode(task)
    li.appendChild(text)
    // create link
    const link = document.createElement("a")
    // add css style
    link.className = "secondary-content"
    // add text
    link.appendChild(document.createTextNode("x"))
    // add href attribute
    link.setAttribute("href", "#")
    // add link to list items
    li.appendChild(link)
    // add li to taskList
   taskList.appendChild(li)
    // clear form input value
    document.querySelector("#task").value = ""
    event.preventDefault()
}



